/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { toClassNames } from '../../utils'
import { ERROR_CLASS } from '../utils'

const InputHidden = ({ id, name, value, required, hasError, className, ...others }) => (
  <input
    type="hidden"
    id={id}
    name={name}
    value={value}
    required={required ? 'required' : ''}
    className={toClassNames(className, hasError ? ERROR_CLASS : '')}
    {...others}
  />
)

InputHidden.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

InputHidden.defaultProps = {
  id: '',
  value: '',
  required: false,
  hasError: false,
}

export default InputHidden
