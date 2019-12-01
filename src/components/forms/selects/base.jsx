import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import {
  EVENT_MULTISELECT_CHANGE,
  EVENT_MULTISELECT_OPEN,
  EVENT_SELECT_CHANGE,
  EVENT_SELECT_OPEN,
} from '../../../events'
import { ERROR_CLASS } from '../../../config'
import { handleProps, inputDefaultProps, inputPropTypes } from '../../../mixins'
import { arrayRemoveByValue, isArray, isUndefined } from '../../../utils'
import { handleLabel, handleMessage } from '../inputs/base'
import * as Styled from './styles'

const SelectInput = React.forwardRef((props, ref) => (
  <input type="hidden" ref={ref} {...props} />
))

// The class is exported in addition to the default export on purpose.  The default export forwards a ref to the
// underlying input element.  If the default export is wrapped by the withAsync HOC, we would need to forward the ref
// twice.  To avoid that, withAsync wraps the exported class directly.
export class BaseSelect extends React.Component {
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
    this.options = []
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

  componentWillReceiveProps(props) {
    const { options } = this.props
    if (props.options !== options) {
      this.setOptions(props.options, props.value)
    }
  }

  // This exists to reduce the number of times the component renders.
  // The reason for the unused 'term' prop is for this function to make sure the component re-renders when the term
  // state variable in the withAsync HOC changes.
  shouldComponentUpdate(nextProps, nextState) {
    const { open, value, text, term } = this.state
    return (
      nextState.open !== open ||
      nextState.value !== value ||
      nextState.text !== text ||
      nextProps.term !== term
    )
  }

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
    const optionText = []

    const options = optionArray.map(o => {
      const isComponent = !isUndefined(o.props)
      const optionValue = isComponent ? `${o.props.value}` : `${o.value}`
      const label = isComponent ? o.props.children : o.label
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
    // It is weird to handle the options as a class property rather than a state variable, but is done this way so that
    // the withAsync HOC can manage its options in its own state and pass them to this component as props.  Since this
    // component is intended to be static, this should not cause any problems.
    this.options = options
    this.setState({ text })
  }

  handleChange(event) {
    if (!this.cancelled) {
      const { multi, placeholder } = this.props

      // The options are actually list items, not option elements, and their value attributes are NOT the same as the
      // value attribute of an option or input.  Event.target.value is for accessing the value of inputs, options, etc.
      // and is not safe for accessing our arbitrary value attribute, so getAttribute('value') must be used instead.
      const eventValue = event.target.getAttribute('value')
      const text = event.target.getAttribute('label')
      let newState = {}

      if (multi) {
        const { values: currentValues, text: currentText } = this.state
        const selected = currentValues.indexOf(eventValue) > -1

        let newValues = currentValues
        let newText =
          currentText === '' || currentText === placeholder
            ? []
            : currentText.split(', ')

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
        newState = { values: newValues, text: newText }
      } else {
        newState = { values: [eventValue], text }
      }

      this.setState(newState, () => {
        this.closeDropDown()
        const { onChange } = this.props
        onChange(event)
      })
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
      this.setState({ open: false })
    }
  }

  openDropDown() {
    if (!this.cancelled) {
      this.setState({ open: true }, () => {
        if (this.showFilter) {
          const { filterRef } = this.props
          filterRef.current.focus()
        }
      })
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
    const { values, text, open } = this.state
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
              {this.options.map(o => (
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
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
  disabled: PropTypes.bool,
  filterRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  multi: PropTypes.bool,
  term: PropTypes.string,
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
  term: '',
  onClick: () => {},
  onChange: () => {},
  onKeyUp: () => {},
}

export default React.forwardRef((props, ref) => (
  <BaseSelect {...props} forwardedRef={ref} />
))
