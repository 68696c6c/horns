import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import Label from '../label'
import { baseInput } from './base'

const Styled = styled('textarea')`
  ${({ theme }) => baseInput(theme)}
`

const Textarea = ({ name, value, id, label, placeholder, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      {label ? <Label htmlFor={idValue} className={errorClass}>{label}</Label> : ''}
      <Styled
        name={name}
        id={idValue}
        className={cx(className, 'textarea', errorClass)}
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

Textarea.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
}

export default Textarea
