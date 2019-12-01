import React from 'react'
import uuid from 'uuid/v4'

import { handleProps, inputPropTypes, inputDefaultProps } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'
import { handleLabel, handleMessage } from './base'
import * as Styled from './styles'

const Textarea = ({
  name,
  id,
  label,
  placeholder,
  required,
  hasError,
  errorMessage,
  ...others
}) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <>
      {handleLabel(label, idValue, required, hasError)}
      <Styled.Textarea
        name={name}
        id={idValue}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...handleProps(others, `textarea ${errorClass}`)}
      />
      {handleMessage(errorMessage, idValue)}
    </>
  )
}

Textarea.propTypes = {
  ...inputPropTypes(),
}

Textarea.defaultProps = {
  ...inputDefaultProps(),
}

export default Textarea
