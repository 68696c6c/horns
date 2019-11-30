import React from 'react'
import { css } from '@emotion/core'
import { rgb } from '../../../themes/utils'

import { font } from '../../utils'
import { ERROR_CLASS } from '../utils'
import InputMessage from '../input-message'
import { Label } from '../../typography'

export const handleLabel = (label, id, required, hasError) => {
  return label ? (
    <Label htmlFor={id} required={required} hasError={hasError}>
      {label}
    </Label>
  ) : (
    ''
  )
}

export const handleMessage = (errorMessage, id) => {
  return errorMessage ? (
    <InputMessage htmlFor={id} colorway="danger">
      {errorMessage}
    </InputMessage>
  ) : (
    ''
  )
}

const baseInput = theme =>
  css`
    display: block;
    background: ${rgb(theme.inputs.backgroundColor)};
    color: ${rgb(theme.inputs.color)};
    border: ${theme.inputs.borderWidth} solid ${rgb(theme.inputs.borderColor)};
    border-radius: ${theme.config.radius};
    margin: 0 0 ${theme.spacing.tiny} 0;
    padding: ${theme.spacing.tiny} ${theme.spacing.xsmall};
    ${font(theme)};
    &.${ERROR_CLASS} {
      border: ${theme.inputs.borderWidth} solid
        ${rgb(theme.colors.danger.default)};
      &::placeholder {
        color: ${rgb(theme.colors.danger.default)};
      }
    }
    &[disabled] {
      background: ${rgb(theme.colors.neutral.light)};
      cursor: not-allowed;
    }
  `

export default baseInput
