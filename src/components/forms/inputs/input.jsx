/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import uuid from 'uuid/v4'

import Label from '../label'
import baseInput from './base'
import { ERROR_CLASS } from '../utils'

const StyledInput = styled('input')`
  ${({ theme }) => baseInput(theme)}
`
const StyledMask = styled(MaskedInput)`
  ${({ theme }) => baseInput(theme)}
`

const Input = ({ type, name, value, id, label, currency, placeholder, required, hasError, className, ...others }) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  let Tag = StyledInput
  switch (type) {
    case 'tel':
      Tag = StyledMask
      others.mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
      others.placeholderChar = '_'
      break
    case 'currency':
      Tag = StyledMask
      others.mask = createNumberMask({
        prefix: currency,
        allowDecimal: true,
      })
      type = 'text'
      break
    case 'percentage':
      Tag = StyledMask
      others.mask = createNumberMask({
        prefix: '',
        suffix: '%',
        allowDecimal: true,
      })
      type = 'text'
      break
  }
  return (
    <React.Fragment>
      {label ? <Label htmlFor={idValue} required={required} hasError={hasError}>{label}</Label> : ''}
      <Tag
        type={type}
        name={name}
        value={value}
        id={idValue}
        className={(className, 'input', errorClass)}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...others}
      />
    </React.Fragment>
  )
}

Input.propTypes = {
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
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  currency: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  id: '',
  label: '',
  currency: '$',
  placeholder: '',
  required: false,
  hasError: false,
}

export default Input
