import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import uuid from 'uuid/v4'
import { isUndefined } from '../../../../utils/utils'
import { getEventName } from '../../../../events'
import InputHidden from '../../inputs/hidden'
import Label from '../../label'
import { ERROR_CLASS } from '../../utils'
import { baseInput } from '../../inputs/base'
import { rgb } from '../../../../themes/utils'
import { getLogger } from '../../../../utils/logger'

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
const Option = styled('li')`
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

const Styled = styled(`div`)``

const EVENT_OPEN = getEventName('select:open')
const EVENT_CHANGE = getEventName('select:change')
const EVENT_KEY_UP = getEventName('select:keyUp')

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.logger = new getLogger('Select', 'violet', props.debug)
    this.logger.log('props', props)

    this.state = {
      open: false,
      value: '',
      text: '',
    }

    this.setOptions = this.setOptions.bind(this)
    this.getEventData = this.getEventData.bind(this)
    this.fireOpen = this.fireOpen.bind(this)
    this.fireChange = this.fireChange.bind(this)
    this.fireKeyUp = this.fireKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)

    this.cancelled = false
    this.selectID = uuid()

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
      optionArray = children.constructor === Array ? children : [children]
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
    const placeholder = this.props.placeholder
    let optionText = undefined
    if (isUndefined(options)) {
      return
    }
    this.options = options.map(o => {
      const isComponent = !isUndefined(o.props)
      const optionValue = isComponent ? o.props.value : o.value
      const label = isComponent ? o.props.children : o.label
      if (optionValue === value) {
        optionText = label
      }
      return <Option key={uuid()} value={optionValue} label={label} onClick={this.fireChange}>{label}</Option>
    })
    const text = isUndefined(optionText) ? placeholder : optionText
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
    this.selectRef.current.dispatchEvent(new CustomEvent(EVENT_OPEN, this.getEventData()))
    this.props.onClick(event)
  }

  fireChange(event) {
    this.handleChange(event)
    this.selectRef.current.dispatchEvent(new CustomEvent(EVENT_CHANGE, this.getEventData()))
    this.props.onChange(event)
  }

  fireKeyUp(event) {
    this.selectRef.current.dispatchEvent(new CustomEvent(EVENT_KEY_UP, this.getEventData()))
    this.props.onKeyUp(event)
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
    const props = this.props
    const { className } = props
    const { name, id, label, required, hasError } = props
    const { filterRef } = props
    const htmlID = id === '' ? uuid() : id
    return (
      <Styled innerRef={this.props.onRef} className={cx(className, 'select-custom', hasError ? ERROR_CLASS : '')}>
        <InputHidden id={htmlID} name={name} value={this.state.value} required={required}/>
        {label ? <Label htmlFor={htmlID}>{label}</Label> : ''}
        <StyledSelect innerRef={this.selectRef} onClick={this.fireOpen}>
          {this.state.text}
        </StyledSelect>
        <StyledDropDownContainer>
          <StyledDropDown open={this.state.open}>
            <StyledFilter innerRef={filterRef} onKeyUp={this.fireKeyUp}/>
            {this.options}
          </StyledDropDown>
        </StyledDropDownContainer>
      </Styled>
    )
  }
}

Select.propTypes = {
  debug: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
}

Select.defaultProps = {
  debug: false,
  onClick: () => {},
  onChange: () => {},
  onKeyUp: () => {},
}

export default Select
