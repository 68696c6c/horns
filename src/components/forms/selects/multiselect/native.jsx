/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import InputMessage from '../../input-message'
import Label from '../../label'
import { ERROR_CLASS } from '../../utils'
import { StyledNativeSelect } from '../base'

const SelectMulti = ({ name, value, id, label, required, hasError, errorMessage, className, children, ...others }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      {label && <Label htmlFor={idValue} required={required} hasError={hasError}>{label}</Label>}
      <StyledNativeSelect
        multiple
        name={name}
        defaultValue={value}
        id={idValue}
        className={(className, 'select', errorClass)}
        required={required}
        {...others}
      >
        {children}
      </StyledNativeSelect>
      {errorMessage && <InputMessage htmlFor={idValue} variant="danger">{errorMessage}</InputMessage>}
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
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
}

SelectMulti.defaultProps = {
  id: '',
  label: '',
  required: false,
  hasError: false,
  errorMessage: '',
}

export default SelectMulti
