/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { toClassNames } from '../../utils'
import InputMessage from '../input-message'
import Label from '../label'
import baseInput from './base'
import { ERROR_CLASS } from '../utils'

const Styled = styled('textarea')`
  ${({ theme }) => baseInput(theme)}
`

const Textarea = ({ name, id, label, placeholder, required, hasError, errorMessage, className, ...others }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      {label && <Label htmlFor={idValue} required={required} hasError={hasError}>{label}</Label>}
      <Styled
        name={name}
        id={idValue}
        className={toClassNames(className, 'textarea', errorClass)}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...others}
      />
      {errorMessage && <InputMessage htmlFor={idValue} variant="danger">{errorMessage}</InputMessage>}
    </React.Fragment>
  )
}

Textarea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
}

Textarea.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  errorMessage: '',
}

export default Textarea
