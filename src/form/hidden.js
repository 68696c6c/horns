import React from 'react'
import PropTypes from 'prop-types'

const InputHidden = (props) => {
  const required = props.required ? 'required' : ''
  return (
    <input
      type="hidden"
      id={props.id}
      name={props.name}
      value={props.value}
      required={required}
    />
  )
}

InputHidden.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
}

export default InputHidden
