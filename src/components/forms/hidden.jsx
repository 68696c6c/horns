import React from 'react'
import PropTypes from 'prop-types'

const InputHidden = ({ id, name, value, required }) => (
  <input type="hidden" id={id} name={name} value={value} required={required ? 'required' : ''}/>
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
