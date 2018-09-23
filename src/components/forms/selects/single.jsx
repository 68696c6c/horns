import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { cx } from 'react-emotion'
import Label from '../label'
import { ERROR_CLASS } from '../utils'
import StyledSelect from './base'
import { isUndefined } from '../../../utils/utils'

const Select = ({ async, name, value, id, label, placeholder, required, hasError, className, children, ...others }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  const selected = isUndefined(value)
  const isAsync = isUndefined(async) ? false : async
  const valueProp = !isAsync ? { defaultValue: value } : { value }
  return (
    <React.Fragment>
      {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
      <StyledSelect
        name={name}
        {...valueProp}
        id={idValue}
        className={cx(className, 'select', errorClass)}
        placeholder={placeholder}
        required={required}
        {...others}
      >
        <option disabled selected={selected}>{placeholder}</option>
        {children}
      </StyledSelect>
    </React.Fragment>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

Select.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
}

export default Select
