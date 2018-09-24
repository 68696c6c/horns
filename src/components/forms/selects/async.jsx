import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import { mapDispatchToProps, mapStateToProps } from '../../../store/utils'
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
  min-height: 1.6em;
  box-sizing: content-box;
  cursor: pointer;
`
const StyledDropDown = styled('ul')`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  background: ${({ theme }) => rgb(theme.colors.copy.light)};
  color: ${({ theme }) => rgb(theme.colors.copy.dark)};
  border-left: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-right: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-bottom: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-radius: 0 ${({ theme }) => theme.config.radius} ${({ theme }) => theme.config.radius} 0;
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

    this.setOptions = this.setOptions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.cancelled = false
    this.selectID = uuid()

    this.setOptions()
  }

  componentDidMount() {
    window.addEventListener('click', this.closeDropDown)
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
  }

  setOptions() {
    const value = this.state.value
    this.props.filterOptions(this.state.value, options => {
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
      this.setState(() => ({ value, text }), () => this.props.onChange(event))
    }
  }

  closeDropDown() {
    if (!this.cancelled) {
      this.props.setActiveSelect('')
    }
  }

  handleClick(event) {
    event.preventDefault()
    event.stopPropagation()
    if (!this.cancelled) {
      const activeSelect = this.props.activeSelect === this.selectID ? '' : this.selectID
      this.props.setActiveSelect(activeSelect)
    }
  }

  render() {
    const { name, id, label, placeholder, required, hasError, className, ...others } = this.props
    const errorClass = hasError ? ERROR_CLASS : ''
    const idValue = id === '' ? uuid() : id
    const open = this.props.activeSelect === this.selectID
    const text = isUndefined(this.state.text) ? placeholder : this.state.text
    return (
      <React.Fragment>
        <InputHidden id={idValue} name={name} value={this.state.value} required={required}/>
        {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
        <StyledSelect
          className={cx(className, 'select', errorClass)}
          {...others}
          onClick={this.handleClick}
        >
          {text}
        </StyledSelect>
        <StyledDropDownContainer>
          <StyledDropDown open={open}>
            {this.state.options.map(option => {
              return (
                <StyledOption key={uuid()} value={option.value} label={option.label} onClick={this.handleChange}>
                  {option.label}
                </StyledOption>
              )
            })}
          </StyledDropDown>
        </StyledDropDownContainer>
      </React.Fragment>
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
  filterOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  activeSelect: PropTypes.string,
  setActiveSelect: PropTypes.func.isRequired,
}

SelectAsync.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  onChange: () => {
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAsync)
