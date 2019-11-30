import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'

const InputHidden = ({ id, name, value, required, hasError, ...others }) => (
  <input
    type="hidden"
    id={id}
    name={name}
    value={value}
    required={required ? 'required' : ''}
    {...handleProps(others, hasError ? ERROR_CLASS : '')}
  />
)

InputHidden.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

InputHidden.defaultProps = {
  name: '',
  id: '',
  required: false,
  hasError: false,
  value: '',
}

export default InputHidden
