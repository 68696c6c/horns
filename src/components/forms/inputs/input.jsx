import React from 'react'
import PropTypes from 'prop-types'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import uuid from 'uuid/v4'

import { handleProps } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'
import { handleLabel, handleMessage } from './base'
import * as Styled from './styles'

const phoneMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]

const Input = ({
  type: initialType,
  name,
  id,
  label,
  currency,
  placeholder,
  required,
  hasError,
  errorMessage,
  ...props
}) => {
  let type = initialType
  const others = props
  let Tag
  switch (type) {
    case 'tel':
      Tag = Styled.InputMasked
      others.mask = phoneMask
      others.placeholderChar = '_'
      break
    case 'currency':
      Tag = Styled.InputMasked
      others.mask = createNumberMask({
        prefix: currency,
        allowDecimal: true,
      })
      type = 'text'
      break
    case 'percentage':
      Tag = Styled.InputMasked
      others.mask = createNumberMask({
        prefix: '',
        suffix: '%',
        allowDecimal: true,
      })
      type = 'text'
      break
    default:
      Tag = Styled.Input
  }
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      {handleLabel(label, idValue, required, hasError)}
      <Tag
        type={type}
        name={name}
        id={idValue}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...handleProps(others, `input ${errorClass}`)}
      />
      {handleMessage(errorMessage, idValue)}
    </React.Fragment>
  )
}

Input.propTypes = {
  ...Styled.inputPropTypes(),
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
    'currency',
    'percentage',
  ]),
  currency: PropTypes.string,
}

Input.defaultProps = {
  ...Styled.inputDefaultProps(),
  type: 'text',
  currency: '$',
}

export default Input
