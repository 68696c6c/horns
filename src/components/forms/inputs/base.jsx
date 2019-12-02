import React from 'react'

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

export const handleMessage = (errorMessage, id, className = '') => {
  return errorMessage ? (
    <InputMessage htmlFor={id} colorway="danger" className={className}>
      {errorMessage}
    </InputMessage>
  ) : (
    ''
  )
}
