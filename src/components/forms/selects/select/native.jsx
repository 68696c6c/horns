/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import InputMessage from '../../input-message'
import Label from '../../label'
import { ERROR_CLASS } from '../../utils'
import { StyledNativeSelect } from '../base'
import { isUndefined } from '../../../../utils/utils'

const SelectNative = ({ name, value, id, label, placeholder, required, hasError, errorMessage, className, children, ...others }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  const selected = isUndefined(value)
  const valueProp = !selected ? { defaultValue: value } : { value }
  return (
    <React.Fragment>
      {label && <Label htmlFor={idValue} required={required} hasError={hasError}>{label}</Label>}
      <StyledNativeSelect
        name={name}
        {...valueProp}
        id={idValue}
        className={(className, 'select', errorClass)}
        placeholder={placeholder}
        required={required}
        {...others}
      >
        <option disabled selected={selected}>{placeholder}</option>
        {children}
      </StyledNativeSelect>
      {errorMessage && <InputMessage htmlFor={idValue} variant="danger">{errorMessage}</InputMessage>}
    </React.Fragment>
  )
}

SelectNative.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
}

SelectNative.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  errorMessage: '',
}

export default SelectNative
