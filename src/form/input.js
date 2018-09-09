import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const Input = ({ type, name, value, id, label, placeholder, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const style = css`display: block;`
  return (
    <React.Fragment>
      {label ? <label htmlFor={id} className={cx(css`display: block;`, className, errorClass)}>{label}</label> : ''}
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        className={cx('input', className, style, errorClass)}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...others}
      />
    </React.Fragment>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
