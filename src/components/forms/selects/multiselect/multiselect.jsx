/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { arrayRemoveByValue, isArray, isUndefined } from '../../../../utils/utils'
import { getEventName } from '../../../../events'
import InputHidden from '../../inputs/hidden'
import Label from '../../label'
import { ERROR_CLASS } from '../../utils'
import {
  Option,
  StyledDropDown,
  StyledDropDownContainer,
  StyledFilter,
  StyledSelect,
  StyledSelectContainer
} from '../base'

// @TODO highlight selected options.
// @TODO use badges for selected values instead of comma string.
// @TODO need to use a global config value for input margins and borders.

const EVENT_OPEN = getEventName('multiselect:open')
const EVENT_CHANGE = getEventName('multiselect:change')

class Multiselect extends React.Component {
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
    this.showFilter = !isUndefined(props.filterRef)

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
    let optionText = []
    this.options = options.map(o => {
      const isComponent = !isUndefined(o.props)
      const optionValue = isComponent ? o.props.value : o.value
      const label = isComponent ? o.props.children : o.label
      if (valueArray.indexOf(optionValue) > -1) {
        optionText.push(label)
      }
      return <Option key={uuid()} value={optionValue} label={label} onClick={this.fireChange}>{label}</Option>
    })
    const text = optionText.length === 0 ? placeholder : optionText.join(', ')
    this.setState(() => ({ value, text }))
  }

  getEventData() {
    const selectID = this.selectID
    return {
      bubbles: true,
      detail: { selectID }
    }
  }

  fireOpen(event) {
    if (!this.props.disabled) {
      this.selectRef.current.dispatchEvent(new CustomEvent(EVENT_OPEN, this.getEventData()))
      this.props.onClick(event)
    }
  }

  fireChange(event) {
    this.handleChange(event)
    this.selectRef.current.dispatchEvent(new CustomEvent(EVENT_CHANGE, this.getEventData()))
    this.props.onChange(event)
  }

  handleChange(event) {
    if (!this.cancelled) {
      const { placeholder } = this.props
      const value = event.target.value
      const text = event.target.getAttribute('label')
      const stateValue = isUndefined(this.state.value) ? [] : this.state.value
      const currentValue = isArray(stateValue) ? stateValue : [stateValue]
      const exists = currentValue.indexOf(value) > -1
      this.setState(prevState => {
        let newValue = currentValue
        let newText = prevState.text === '' || prevState.text === placeholder ? [] : prevState.text.split(', ')
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
      }, () => {
        this.closeDropDown()
        this.props.onChange(event)
      })
    }
  }

  closeDropDown() {
    if (!this.cancelled) {
      this.setState(() => ({ open: false }))
    }
  }

  openDropDown() {
    if (!this.cancelled) {
      this.setState(() => ({ open: true }), () => {
        if (this.showFilter) {
          this.props.filterRef.current.focus()
        }
      })
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
    const { filterRef, onKeyUp, name, id, label, required, disabled, hasError, className } = this.props
    const filter = this.showFilter ? <StyledFilter innerRef={filterRef} onKeyUp={onKeyUp}/> : ''
    const htmlID = id === '' ? uuid() : id
    return (
      <React.Fragment>
        <InputHidden id={htmlID} name={name} value={this.state.value} required={required}/>
        {label ? <Label htmlFor={htmlID} required={required} hasError={hasError}>{label}</Label> : ''}
        <StyledSelectContainer className="select-custom-container">
          <StyledSelect
            innerRef={this.selectRef}
            className={(className, 'select-custom', hasError ? ERROR_CLASS : '')}
            onClick={this.fireOpen}
            disabled={disabled}
          >
            {this.state.text}
          </StyledSelect>
          <StyledDropDownContainer className="select-custom-dropdown-container">
            <StyledDropDown open={this.state.open} className={hasError ? ERROR_CLASS : ''}>
              {filter}
              {this.options}
            </StyledDropDown>
          </StyledDropDownContainer>
        </StyledSelectContainer>
      </React.Fragment>
    )
  }
}

Multiselect.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  filterRef: PropTypes.object,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
}

Multiselect.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  disabled: false,
  onClick: () => {
  },
  onChange: () => {
  },
  onKeyUp: () => {
  },
}

export default Multiselect
