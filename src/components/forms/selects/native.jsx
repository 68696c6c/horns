import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { handleProps, inputDefaultProps, inputPropTypes } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'
import { handleLabel, handleMessage } from '../inputs/base'
import * as Styled from './styles'

const SelectNative = ({
  name,
  value,
  id,
  label,
  placeholder,
  required,
  hasError,
  errorMessage,
  children,
  multiple,
  ...others
}) => {
  const selected = value !== ''
  const valueProp = !selected ? { defaultValue: value } : { value }
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  const className = multiple
    ? `multiselect-native ${errorClass}`
    : `select-native ${errorClass}`
  return (
    <>
      {handleLabel(label, idValue, required, hasError)}
      <Styled.SelectNative
        multiple={multiple}
        name={name}
        {...valueProp}
        id={idValue}
        placeholder={placeholder}
        required={required}
        {...handleProps(others, className)}
      >
        <option disabled selected={selected}>
          {placeholder}
        </option>
        {children}
      </Styled.SelectNative>
      {handleMessage(errorMessage, idValue)}
    </>
  )
}

SelectNative.propTypes = {
  ...inputPropTypes(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  multiple: PropTypes.bool,
}

SelectNative.defaultProps = {
  ...inputDefaultProps(),
  value: '',
  multiple: false,
}

export default SelectNative
