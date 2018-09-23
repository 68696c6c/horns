import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactAsyncSelect } from 'react-select/lib/Async'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import Label from '../label'
import { baseInput } from '../inputs/base'
import { ERROR_CLASS } from '../utils'
import { isUndefined } from '../../../utils/utils'

const StyledSelect = styled('select')`
  ${({ theme }) => baseInput(theme)}
`

class SelectAsync extends React.Component {
  constructor(props) {
    super(props)

    this.selectedIndex = undefined
    this.selectedValue = this.props.value
    this.hasInitialValue = !isUndefined(this.selectedValue)
    this.options = []

    this.setOptions = this.setOptions.bind(this)

    this.state = {
      options: [],
    }

    this.setOptions()
  }

  setOptions() {
    this.props.loadOptions(this.selectedValue, (options) => {
      console.log(options)
      this.setState(() => ({ options }))
    })
    // if (!isUndefined(this.props.children)) {
    //   const options = this.props.children.constructor === Array ? this.props.children : [this.props.children]
    //   this.options = options.map((option, index) => {
    //     const { value, children: label } = option.props
    //     if (this.hasInitialValue && value === this.selectedValue) {
    //       this.selectedIndex = index
    //     }
    //     return { value, label }
    //   })
    // }
  }

  render() {
    const { name, id, label, placeholder, required, hasError, className } = this.props
    const errorClass = hasError ? ERROR_CLASS : ''
    const idValue = id === '' ? uuid() : id
    return (
      <React.Fragment>
        {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
        <ReactAsyncSelect
          isMulti={false}
          name={name}
          defaultValue={this.options[this.selectedIndex]}
          id={idValue}
          className={cx(className, 'select', errorClass)}
          placeholder={placeholder}
          required={required}
          options={this.state.options}
          loadOptions={this.props.loadOptions}
          cacheOptions
        />
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
  loadOptions: PropTypes.func.isRequired,
}

SelectAsync.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
}

export default SelectAsync
