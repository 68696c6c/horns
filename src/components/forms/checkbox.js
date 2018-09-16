import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const Checkbox = ({ label, id, name, value, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const requiredValue = required ? 'required' : ''
  const style = css`
    vertical-align: baseline;
    margin: 0 .5em 0 0;
    height: 1em;
    & ~ label.checkbox-label {
      vertical-align: baseline;
      display: inline-block;
    }
  `
  const labelHTML = label ? (
    <label htmlFor={id} className={cx(css`cursor: pointer;`, 'checkbox-label', errorClass)}>{label}</label>
  ) : ''
  return (
    <React.Fragment>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={cx('checkbox', className, style, errorClass)}
        value={value}
        required={requiredValue}
        {...others}
      />
      <label htmlFor={id} className={cx(css`cursor: pointer;`, 'checkbox-control')}/>
      {labelHTML}
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

export default Checkbox
