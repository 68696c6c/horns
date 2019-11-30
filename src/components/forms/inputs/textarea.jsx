import React from 'react'
import uuid from 'uuid/v4'

import { handleProps } from '../../../mixins'
import { ERROR_CLASS } from '../utils'
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
    <React.Fragment>
      {handleLabel(label, idValue, required, hasError)}
      <Styled.Textarea
        name={name}
        id={idValue}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...handleProps(others, `textarea ${errorClass}`)}
      />
      {handleMessage(errorMessage, idValue)}
    </React.Fragment>
  )
}

Textarea.propTypes = {
  ...Styled.inputPropTypes(),
}

Textarea.defaultProps = {
  ...Styled.inputDefaultProps(),
}

export default Textarea
