import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import { css, cx } from 'react-emotion'

const MaskedPhoneInput = ({ type, name, value, id, label, placeholder, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const style = css`display: block;`
  return (
    <React.Fragment>
      {label ? <label htmlFor={id} className={errorClass}>{label}</label> : ''}
      <InputMask
        type="tel"
        name={name}
        value={value}
        id={id}
        className={cx('input', className, style, errorClass)}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        mask="999.999.9999"
        maskChar="_"
        {...others}
      />
    </React.Fragment>
  )
}

MaskedPhoneInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

MaskedPhoneInput.defaultProps = {
  type: 'text',
}

export default MaskedPhoneInput
