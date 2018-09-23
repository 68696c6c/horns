import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { cx } from 'react-emotion'
import Label from '../label'
import { ERROR_CLASS } from '../utils'
import StyledSelect from './base'

const SelectMulti = ({ name, value, id, label, placeholder, required, hasError, className, children }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
      <StyledSelect
        multiple
        name={name}
        value={value}
        id={idValue}
        className={cx(className, 'select', errorClass)}
        placeholder={placeholder}
        required={required}
      >
        {children}
      </StyledSelect>
    </React.Fragment>
  )
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
