/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import InputMessage from '../input-message'
import { Toggle, ToggleControl, ToggleLabel } from './base'
import { ERROR_CLASS } from '../utils'

const Radio = ({ label, id, name, value, required, hasError, errorMessage, className, ...others }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      <Toggle
        type="checkbox"
        name={name}
        id={idValue}
        className={(className, 'checkbox', errorClass)}
        value={value}
        required={required ? 'required' : ''}
        {...others}
      />
      <ToggleControl htmlFor={idValue} className="toggle-control" round />
      {label && <ToggleLabel htmlFor={idValue} required={required} hasError={hasError}>{label}</ToggleLabel>}
      {errorMessage && <InputMessage htmlFor={idValue} variant="danger" className="toggle-message">{errorMessage}</InputMessage>}
    </React.Fragment>
  )
}

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
}

Radio.defaultProps = {
  id: '',
  label: '',
  required: false,
  hasError: false,
  errorMessage: '',
}

export default Radio
