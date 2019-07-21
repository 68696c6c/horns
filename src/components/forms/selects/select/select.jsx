/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { isArray, isUndefined } from '../../../../utils/utils'
import { getEventName } from '../../../../events'
import InputMessage from '../../input-message'
import Label from '../../label'
import { ERROR_CLASS } from '../../utils'
import {
  Option,
  StyledDropDown,
  StyledDropDownContainer,
  StyledFilter,
  StyledSelect,
  StyledSelectContainer,
} from '../base'

const EVENT_OPEN = getEventName('select:open')
const EVENT_CHANGE = getEventName('select:change')

const SelectInput = React.forwardRef((props, ref) => (
  <input type="hidden" ref={ref} {...props} />
))

SelectInput.propTypes = {
  value: PropTypes.string,
}

SelectInput.defaultProps = {
  value: '',
}

export class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      value: '',
      text: '',
      term: props.term,
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

  shouldComponentUpdate(nextProps, nextState) {
    let should = false
    if (nextState.open !== this.state.open || nextState.value !== this.state.value || nextState.text !== this.state.text || nextProps.term !== this.props.term) {
      should = true
    }
    return should
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
    this.setOptions(optionArray, value)
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
    const { placeholder } = this.props
    let optionText = this.state.text
    this.options = options.map(o => {
      const isComponent = !isUndefined(o.props)
      const optionValue = isComponent ? `${o.props.value}` : `${o.value}`
      const label = isComponent ? o.props.children : o.label
      if (optionValue === value) {
        optionText = label
      }
      return <Option key={uuid()} value={optionValue} label={label} onClick={this.fireChange}>{label}</Option>
    })
    const text = optionText === '' ? placeholder : optionText
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
  }

  handleChange(event) {
    if (!this.cancelled) {
      const value = `${event.target.getAttribute('value')}`
      const text = event.target.getAttribute('label')
      this.setState(() => ({ value, text }), () => {
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
    const { forwardedRef, filterRef, onKeyUp, name, id, label, required, disabled, hasError, errorMessage, className } = this.props
    const filter = this.showFilter ? <StyledFilter innerRef={filterRef} onKeyUp={onKeyUp} /> : ''
    const idValue = id === '' ? uuid() : id
    return (
      <React.Fragment>
        <SelectInput ref={forwardedRef} id={idValue} name={name} value={this.state.value} required={required} />
        {label && <Label htmlFor={idValue} required={required} hasError={hasError}>{label}</Label>}
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
        {hasError && errorMessage && <InputMessage htmlFor={idValue} variant="danger">{errorMessage}</InputMessage>}
      </React.Fragment>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  filterRef: PropTypes.object,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
}

Select.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  errorMessage: '',
  disabled: false,
  onClick: () => {},
  onChange: () => {},
  onKeyUp: () => {},
}

export default React.forwardRef((props, ref) => {
  const { value, ...others } = props
  return <Select value={`${value}`} {...others} forwardedRef={ref} />
})
