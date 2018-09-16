import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { cx } from 'react-emotion'
import { Toggle, ToggleControl, ToggleLabel } from './base'

const Checkbox = ({ label, id, name, value, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      <Toggle
        type="checkbox"
        name={name}
        id={idValue}
        className={cx(className, 'checkbox', errorClass)}
        value={value}
        required={required ? 'required' : ''}
        {...others}
      />
      <ToggleControl htmlFor={idValue} className="toggle-control"/>
      {label && <ToggleLabel htmlFor={idValue} className={cx('toggle-label', errorClass)}>{label}</ToggleLabel>}
    </React.Fragment>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

Checkbox.defaultProps = {
  id: '',
  label: '',
  required: false,
  hasError: false,
}

export default Checkbox
