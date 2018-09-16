import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const RadioButton = ({ label, id, name, value, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const requiredValue = required ? 'required' : ''
  const style = css`
    vertical-align: baseline;
    margin: 0 .5em 0 0;
    height: 1em;
    & ~ label.radio-button-label {
      vertical-align: baseline;
      display: inline-block;
    }
  `
  return (
    <React.Fragment>
      <input
        type="radio"
        name={name}
        id={id}
        className={cx('radio-button', className, style, errorClass)}
        value={value}
        required={requiredValue}
        {...others}
      />
      <label htmlFor={id} className={cx(css`cursor: pointer;`, 'radio-button-control')}/>
      {label ? <label htmlFor={id}
                      className={cx(css`cursor: pointer;`, 'radio-button-label', errorClass)}>{label}</label> : ''}
    </React.Fragment>
  )
}

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

export default RadioButton
