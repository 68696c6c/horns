import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'react-emotion'
import { ERROR_CLASS } from '../utils'

const InputHidden = ({ id, name, value, required, hasError, className, ...others }) => (
  <input
    type="hidden"
    id={id}
    name={name}
    value={value}
    required={required ? 'required' : ''}
    className={cx(className, hasError ? ERROR_CLASS : '')}
    {...others}
  />
)

InputHidden.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

InputHidden.defaultProps = {
  id: '',
  required: false,
  hasError: false,
}

export default InputHidden
