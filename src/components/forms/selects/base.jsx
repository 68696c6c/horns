import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'uuid/v4'
import { ERROR_CLASS } from '../../../config'

import {
  EVENT_MULTISELECT_CHANGE,
  EVENT_MULTISELECT_OPEN,
  EVENT_SELECT_CHANGE,
  EVENT_SELECT_OPEN,
} from '../../../events'
import { handleProps, inputDefaultProps, inputPropTypes } from '../../../mixins'
import { arrayRemoveByValue, isArray, isUndefined } from '../../../utils'
import { handleLabel, handleMessage } from '../inputs/base'
import * as Styled from './styles'

const SelectInput = React.forwardRef((props, ref) => (
  <input type="hidden" ref={ref} {...props} />
))

SelectInput.propTypes = {
  value: PropTypes.string,
}

SelectInput.defaultProps = {
  value: '',
}

class BaseSelect extends React.Component {
  constructor(props) {
    super(props)

    let values
    if (props.value === '') {
      values = []
    } else if (isArray(props.value)) {
      // Make sure all initial values are strings.
      values = props.value.map(v => `${v}`)
    } else {
      values = [`${props.value}`]
    }

    this.state = {
      open: false,
      text: '',
      values,
      options: [],
    }

    this.getEventData = this.getEventData.bind(this)
    this.setOptions = this.setOptions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.fireOpen = this.fireOpen.bind(this)
    this.fireChange = this.fireChange.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)

    this.htmlID = props.id === '' ? uuid() : props.id
    this.cancelled = false
    this.selectID = uuid()
    this.showFilter = !isUndefined(props.filterRef) && props.filterRef != null

    this.selectRef = React.createRef()

    if (props.multi) {
      this.eventOpen = EVENT_MULTISELECT_OPEN
      this.eventChange = EVENT_MULTISELECT_CHANGE
    } else {
      this.eventOpen = EVENT_SELECT_OPEN
      this.eventChange = EVENT_SELECT_CHANGE
    }
  }

  componentDidMount() {
    window.addEventListener('click', event => {
      if (this.selectRef.current !== event.target) {
        this.closeDropDown()
      }
    })
    this.selectRef.current.addEventListener(this.eventOpen, event => {
      const { open } = this.state
      if (!open && event.detail.selectID === this.selectID) {
        this.openDropDown()
      } else {
        this.closeDropDown()
      }
    })

    // If we were provided options as children, use those as the initial options.
    const { children, options, value } = this.props
    let optionArray = options
    if (!isUndefined(children) && isUndefined(options)) {
      optionArray = isArray(children) ? children : [children]
    }
    this.setOptions(optionArray, value)
  }

  // componentWillReceiveProps(props) {
  //   const { options } = this.props
  //   if (props.options !== options) {
  //     this.setOptions(props.options, props.value)
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let should = false
  //   if (
  //     nextState.open !== this.state.open ||
  //     nextState.value !== this.state.value ||
  //     nextState.text !== this.state.text ||
  //     nextProps.term !== this.props.term
  //   ) {
  //     should = true
  //   }
  //   return should
  // }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
  }

  getEventData() {
    const { selectID } = this
    return {
      bubbles: true,
      detail: { selectID },
    }
  }

  setOptions(optionArray, selectedValue) {
    const { placeholder } = this.props

    // Value is always treated as an array in order to support multiselects.
    let selectedValues
    if (selectedValue === '') {
      selectedValues = []
    } else if (isArray(selectedValue)) {
      selectedValues = selectedValue.map(v => `${v}`)
    } else {
      selectedValues = [`${selectedValue}`]
    }
    if (this.htmlID === 'multi-default-value-strings') {
      console.log('BaseSelect setOptions selectedValues', selectedValues)
    }
    const optionText = []

    const options = optionArray.map(o => {
      const isComponent = !isUndefined(o.props)
      const optionValue = isComponent ? `${o.props.value}` : `${o.value}`
      const label = isComponent ? o.props.children : o.label
      if (this.htmlID === 'multi-default-value-strings') {
        console.log(
          'BaseSelect setOptions optionValue',
          optionValue,
          selectedValues.indexOf(optionValue) > -1
        )
      }
      if (selectedValues.indexOf(optionValue) > -1) {
        optionText.push(label)
      }
      return {
        key: uuid(),
        value: optionValue,
        label,
      }
    })
    const text = optionText.length === 0 ? placeholder : optionText.join(', ')
    this.setState(() => ({ text, options }))
  }

  handleChange(event) {
    if (!this.cancelled) {
      const { multi, placeholder } = this.props

      // The options are actually list items, not option elements, and their value attributes are NOT the same as the
      // value attribute of an option or input.  Event.target.value is for accessing the value of inputs, options, etc.
      // and is not safe for accessing our arbitrary value attribute, so getAttribute('value') must be used instead.
      const eventValue = event.target.getAttribute('value')
      const text = event.target.getAttribute('label')
      console.log('BaseSelect handleChange | eventValue', eventValue)

      if (multi) {
        const { values: currentValues } = this.state
        const selected = currentValues.indexOf(eventValue) > -1
        if (this.htmlID === 'multi-default-value-strings') {
          console.log(
            'BaseSelect handleChange | currentValues | selected',
            currentValues,
            selected
          )
        }
        this.setState(
          prevState => {
            let newValues = currentValues
            let newText =
              prevState.text === '' || prevState.text === placeholder
                ? []
                : prevState.text.split(', ')

            // If the event value already exists in the state values, the user is trying to unselect it.
            if (selected) {
              newValues = arrayRemoveByValue(newValues, eventValue)
              newText = arrayRemoveByValue(newText, text)
            } else {
              newValues.push(eventValue)
              newText.push(text)
            }
            newText = newText.join(', ')
            newText = newText === '' ? placeholder : newText
            return { values: newValues, text: newText }
          },
          () => {
            this.closeDropDown()
            const { onChange } = this.props
            onChange(event)
          }
        )
      } else {
        this.setState({ values: [eventValue], text }, () => {
          this.closeDropDown()
          const { onChange } = this.props
          onChange(event)
        })
      }
    }
  }

  fireOpen(event) {
    const { disabled, onClick } = this.props
    if (!disabled) {
      this.selectRef.current.dispatchEvent(
        new CustomEvent(this.eventOpen, this.getEventData())
      )
      onClick(event)
    }
  }

  fireChange(event) {
    this.handleChange(event)
    this.selectRef.current.dispatchEvent(
      new CustomEvent(this.eventChange, this.getEventData())
    )
    const { onChange } = this.props
    onChange(event)
  }

  closeDropDown() {
    if (!this.cancelled) {
      this.setState(() => ({ open: false }))
    }
  }

  openDropDown() {
    if (!this.cancelled) {
      this.setState(
        () => ({ open: true }),
        () => {
          if (this.showFilter) {
            const { filterRef } = this.props
            filterRef.current.focus()
          }
        }
      )
    }
  }

  toggleDropDown(event) {
    event.preventDefault()
    event.stopPropagation()
    if (!this.cancelled) {
      const { open } = this.state
      if (open) {
        this.closeDropDown()
      } else {
        this.openDropDown()
      }
    }
  }

  render() {
    const {
      forwardedRef,
      filterRef,
      onKeyUp,
      name,
      label,
      required,
      disabled,
      hasError,
      errorMessage,
      multi,
      // id and placeholder are unused, but destructured here to prevent passing them to handleProps.
      id,
      placeholder,
      ...others
    } = this.props
    const { values, text, open, options } = this.state
    const errorClass = hasError ? ERROR_CLASS : ''
    const className = multi
      ? `multiselect-custom ${errorClass}`
      : `select-custom ${errorClass}`
    return (
      <>
        <SelectInput
          ref={forwardedRef}
          id={this.htmlID}
          name={name}
          value={values}
          required={required}
        />
        {handleLabel(label, this.htmlID, required, hasError)}
        <Styled.SelectContainer className="select-custom-container">
          <Styled.Select
            {...handleProps(others, className)}
            ref={this.selectRef}
            onClick={this.fireOpen}
            disabled={disabled}
          >
            {text}
          </Styled.Select>
          <Styled.DropDownContainer className="select-custom-dropdown-container">
            <Styled.DropDown open={open} className={errorClass}>
              {this.showFilter && (
                <Styled.Filter ref={filterRef} onKeyUp={onKeyUp} />
              )}
              {options.map(o => (
                <Styled.DropDownOption
                  key={o.key}
                  value={o.value}
                  label={o.label}
                  onClick={this.fireChange}
                >
                  {o.label}
                </Styled.DropDownOption>
              ))}
            </Styled.DropDown>
          </Styled.DropDownContainer>
        </Styled.SelectContainer>
        {handleMessage(errorMessage, this.htmlID)}
      </>
    )
  }
}

BaseSelect.propTypes = {
  ...inputPropTypes(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  filterRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),

  multi: PropTypes.bool,

  // Forwarded
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
}

BaseSelect.defaultProps = {
  ...inputDefaultProps(),
  value: '',
  disabled: false,
  filterRef: null,

  multi: false,

  // Forwarded
  onClick: () => {},
  onChange: () => {},
  onKeyUp: () => {},
}

export default React.forwardRef((props, ref) => (
  <BaseSelect {...props} forwardedRef={ref} />
))
