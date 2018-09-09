import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const Textarea = ({ name, value, id, label, placeholder, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const style = css`
    width: 100%;
    height: 100%;
    font-size: 1em;
  `
  return (
    <React.Fragment>
      {label ? <label htmlFor={id} className={errorClass}>{label}</label> : ''}
      <textarea
        name={name}
        id={id}
        className={cx('textarea', style, className, errorClass)}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        value={value}
        {...others}
      />
    </React.Fragment>
  )
}

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

export default Textarea
