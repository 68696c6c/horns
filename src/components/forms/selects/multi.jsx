import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactSelect } from 'react-select'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import Label from '../label'
import { baseInput } from '../inputs/base'
import { ERROR_CLASS } from '../utils'
import { isUndefined } from '../../../utils/utils'

const StyledSelect = styled('select')`
  ${({ theme }) => baseInput(theme)}
`

class SelectMulti extends React.Component {
  constructor(props) {
    super(props)

    this.selectedIndexes = []
    if (isUndefined(this.props.value)) {
      this.selectedValues = []
    } else if (this.props.value.constructor !== Array) {
      this.selectedValues = [this.props.value]
    } else {
      this.selectedValues = this.props.value
    }
    this.hasInitialValue = this.selectedValues.length > 0
    this.options = []
    this.defaultValue = []

    this.setOptions = this.setOptions.bind(this)
    this.setDefaultValue = this.setDefaultValue.bind(this)

    this.setOptions()
  }

  setOptions() {
    const options = this.props.children.constructor === Array ? this.props.children : [this.props.children]
    this.options = options.map((option, index) => {
      const { value, children: label } = option.props
      if (this.hasInitialValue && this.selectedValues.indexOf(value) > -1) {
        this.selectedIndexes.push(index)
      }
      return { value, label }
    })
    this.setDefaultValue()
  }

  setDefaultValue() {
    this.defaultValue = this.selectedIndexes.map(selectedIndex => {
      return this.options[selectedIndex]
    })
  }

  render() {
    const { name, id, label, placeholder, required, hasError, className } = this.props
    const errorClass = hasError ? ERROR_CLASS : ''
    const idValue = id === '' ? uuid() : id
    return (
      <React.Fragment>
        {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
        <ReactSelect
          isMulti={true}
          name={name}
          defaultValue={this.defaultValue}
          id={idValue}
          className={cx(className, 'select-multi', errorClass)}
          placeholder={placeholder}
          required={required}
          options={this.options}
        />
      </React.Fragment>
    )
  }
}

SelectMulti.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

SelectMulti.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
}

export default SelectMulti
