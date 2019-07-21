/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

const fields = [
  {
    input: 'text|email|checkbox|select-async|etc...',
    label: '',
    placeholder: '',
    name: '',
    value: '',
    required: '',
    requiredMessage: 'This is required',
    typeMessage: 'Not a valid email',
    options: {
      currency: '$',
      filterOptions: '',
    },
    onClick: '',
    onChange: '',
    onKeyUp: '',
  },
]

const Form = ({ fields }) => {
  return (
    <form />
  )
}

Form.propTypes = {}

Form.defaultProps = {}

export default Form
