import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import { baseInput } from '../inputs/base'
import Label from '../label'
import { ERROR_CLASS } from '../utils'
import { isUndefined } from '../../../utils/utils'
import InputHidden from '../inputs/hidden'
import { rgb } from '../../../themes/utils'

// @TODO need to use a global config value for input margins and borders.
const StyledDropDownContainer = styled('div')`
  position: relative;
  margin-top: -1em;
  margin-bottom: 2em;
`
const StyledSelect = styled('div')`
  ${({ theme }) => baseInput(theme)};
  display: ${({ open }) => open ? 'none' : 'block'};  min-height: 1.6em;
  box-sizing: content-box;
  cursor: pointer;
`
const StyledFilter = styled('input')`
  ${({ theme }) => baseInput(theme)};
  margin: 5px;
  width: calc(100% - 10px);
`
const StyledDropDown = styled('ul')`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  background: ${({ theme }) => rgb(theme.colors.copy.light)};
  border-left: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-right: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-bottom: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  color: ${({ theme }) => rgb(theme.colors.copy.dark)};
  border-radius: 0 0 ${({ theme }) => theme.config.radius} ${({ theme }) => theme.config.radius};
  margin: -2px 0 0 0;
  padding: 0;
  width: 100%;
  list-style: none inside;
`
const StyledOption = styled('li')`
  padding: .5em 1em;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => rgb(theme.colors.neutral.alpha)};
  }
  &:first-child {
    padding-top: 1em;
  }
  &:last-child {
    padding-bottom: 1em;
  }
`

class SelectAsync extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      value: isUndefined(props.value) ? '' : props.value,
      text: undefined,
      options: [],
    }

    this.filterOptions = this.filterOptions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.cancelled = false
    this.selectID = uuid()
    this.filterRef = React.createRef()
    this.dropDownRef = React.createRef()
    this.openEvent = new CustomEvent('select-open', { bubbles: true, detail: { selectID: this.selectID } })

    this.filterOptions()
  }

  componentDidMount() {
    window.addEventListener('click', this.closeDropDown)
    window.addEventListener('select-open', (event) => {
      if (event.detail.selectID !== this.selectID) {
        this.closeDropDown()
      }
    })
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
  }

  componentDidUpdate() {
    this.filterRef.current.focus()
  }

  filterOptions() {
    const value = this.state.value
    const term = this.filterRef.current === null ? '' : this.filterRef.current.value
    this.props.filterOptions(term, options => {
      if (!this.cancelled) {
        const selectedOption = options.filter(option => {
          return option.value === value
        })
        const text = selectedOption.length > 0 ? selectedOption[0].label : undefined
        this.setState(() => ({ options, text }))
      }
    })
  }

  handleChange(event) {
    if (!this.cancelled) {
      const value = event.target.value
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
      this.setState(() => ({ open: true }))
      this.dropDownRef.current.dispatchEvent(this.openEvent)
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
    const { name, id, label, placeholder, required, hasError, className, ...others } = this.props
    const errorClass = hasError ? ERROR_CLASS : ''
    const idValue = id === '' ? uuid() : id
    const open = this.state.open
    const text = isUndefined(this.state.text) ? placeholder : this.state.text
    return (
      <div>
        <InputHidden id={idValue} name={name} value={this.state.value} required={required}/>
        {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
        <StyledSelect
          className={cx(className, 'select', errorClass)}
          {...others}
          onClick={this.toggleDropDown}
          innerRef={this.dropDownRef}
        >
          {text}
        </StyledSelect>
        <StyledDropDownContainer>
          <StyledDropDown open={open}>
            <StyledFilter innerRef={this.filterRef} onClick={event => {
              event.stopPropagation()
            }} onKeyUp={this.filterOptions}/>
            {this.state.options.map(option => {
              return (
                <StyledOption key={uuid()} value={option.value} label={option.label} onClick={this.handleChange}>
                  {option.label}
                </StyledOption>
              )
            })}
          </StyledDropDown>
        </StyledDropDownContainer>
      </div>
    )
  }
}

SelectAsync.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  filter: PropTypes.bool,
  filterOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

SelectAsync.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  filter: false,
  onChange: () => {
  },
}

export default SelectAsync
