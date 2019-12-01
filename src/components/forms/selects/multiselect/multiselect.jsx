import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { arrayRemoveByValue, isArray, isUndefined } from '../../../../utils'
import { getEventName } from '../../../../events'

import {
  handleProps,
  inputDefaultProps,
  inputPropTypes,
} from '../../../../mixins'
import { ERROR_CLASS } from '../../../../config'
import { handleLabel, handleMessage } from '../../inputs/base'
import * as Styled from '../styles'

// @TODO highlight selected options.
// @TODO use badges for selected values instead of comma string.

const EVENT_OPEN = getEventName('multiselect:open')
const EVENT_CHANGE = getEventName('multiselect:change')

const SelectInput = React.forwardRef((props, ref) => (
  <input type="hidden" ref={ref} {...props} />
))

export class Multiselect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      value: [],
      text: '',
    }

    this.setOptions = this.setOptions.bind(this)
    this.getEventData = this.getEventData.bind(this)
    this.fireOpen = this.fireOpen.bind(this)
    this.fireChange = this.fireChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)

    this.cancelled = false
    this.selectID = uuid()
    this.showFilter = !isUndefined(props.filterRef) && props.filterRef != null

    this.selectRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('click', event => {
      if (this.selectRef.current !== event.target) {
        this.closeDropDown()
      }
    })
    this.selectRef.current.addEventListener(EVENT_OPEN, event => {
      if (!this.state.open && event.detail.selectID === this.selectID) {
        this.openDropDown()
      } else {
        this.closeDropDown()
      }
    })

    const { children, options, value } = this.props
    let optionArray = options
    if (!isUndefined(children) && isUndefined(options)) {
      optionArray = isArray(children) ? children : [children]
    }
    const initialValue = isUndefined(value) ? [] : value
    this.setOptions(optionArray, initialValue)
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
  }

  componentWillReceiveProps(props) {
    const { options } = this.props
    if (props.options !== options) {
      this.setOptions(props.options, props.value)
    }
  }

  setOptions(options, value) {
    if (isUndefined(options)) {
      return
    }
    const initialValue = isUndefined(value) ? [] : value
    const valueArray = isArray(initialValue) ? initialValue : [initialValue]
    const { placeholder } = this.props
    const optionText = []
    this.options = options.map(o => {
      const isComponent = !isUndefined(o.props)
      const optionValue = isComponent ? o.props.value : o.value
      const label = isComponent ? o.props.children : o.label
      if (valueArray.indexOf(optionValue) > -1) {
        optionText.push(label)
      }
      return (
        <Styled.DropDownOption
          key={uuid()}
          value={optionValue}
          label={label}
          onClick={this.fireChange}
        >
          {label}
        </Styled.DropDownOption>
      )
    })
    const text = optionText.length === 0 ? placeholder : optionText.join(', ')
    this.setState(() => ({ value, text }))
  }

  getEventData() {
    const { selectID } = this
    return {
      bubbles: true,
      detail: { selectID },
    }
  }

  fireOpen(event) {
    if (!this.props.disabled) {
      this.selectRef.current.dispatchEvent(
        new CustomEvent(EVENT_OPEN, this.getEventData())
      )
      this.props.onClick(event)
    }
  }

  fireChange(event) {
    this.handleChange(event)
    this.selectRef.current.dispatchEvent(
      new CustomEvent(EVENT_CHANGE, this.getEventData())
    )
    this.props.onChange(event)
  }

  handleChange(event) {
    if (!this.cancelled) {
      const { placeholder } = this.props
      const { value } = event.target
      const text = event.target.getAttribute('label')
      const stateValue = isUndefined(this.state.value) ? [] : this.state.value
      const currentValue = isArray(stateValue) ? stateValue : [stateValue]
      const exists = currentValue.indexOf(value) > -1
      this.setState(
        prevState => {
          let newValue = currentValue
          let newText =
            prevState.text === '' || prevState.text === placeholder
              ? []
              : prevState.text.split(', ')
          if (exists) {
            newValue = arrayRemoveByValue(newValue, value)
            newText = arrayRemoveByValue(newText, text)
          } else {
            newValue.push(value)
            newText.push(text)
          }
          newText = newText.join(', ')
          newText = newText === '' ? placeholder : newText
          return { value: newValue, text: newText }
        },
        () => {
          this.closeDropDown()
          this.props.onChange(event)
        }
      )
    }
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
            this.props.filterRef.current.focus()
          }
        }
      )
    }
  }

  toggleDropDown(event) {
    event.preventDefault()
    event.stopPropagation()
    if (!this.cancelled) {
      if (this.state.open) {
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
      id,
      label,
      required,
      disabled,
      hasError,
      errorMessage,
      placeholder,
      ...others
    } = this.props
    const { value, text, open } = this.state
    const errorClass = hasError ? ERROR_CLASS : ''
    const idValue = id === '' ? uuid() : id
    return (
      <>
        <SelectInput
          ref={forwardedRef}
          id={idValue}
          name={name}
          value={value}
          required={required}
        />
        {handleLabel(label, idValue, required, hasError)}
        <Styled.SelectContainer className="select-custom-container">
          <Styled.Select
            {...handleProps(others, `multiselect-custom ${errorClass}`)}
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
              {this.options}
            </Styled.DropDown>
          </Styled.DropDownContainer>
        </Styled.SelectContainer>
        {handleMessage(errorMessage, idValue)}
      </>
    )
  }
}

Multiselect.propTypes = {
  ...inputPropTypes(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  filterRef: PropTypes.object,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
}

Multiselect.defaultProps = {
  ...inputDefaultProps(),
  value: '',
  disabled: false,
  filterRef: null,
  onClick: () => {},
  onChange: () => {},
  onKeyUp: () => {},
}

export default React.forwardRef((props, ref) => {
  const { value, ...others } = props
  return <Multiselect value={`${value}`} {...others} forwardedRef={ref} />
})
