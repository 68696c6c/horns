import React from 'react'
import uuid from 'uuid/v4'
import { isUndefined } from '../../../../utils/utils'

import {
  handleProps,
  inputDefaultProps,
  inputPropTypes,
} from '../../../../mixins'
import { ERROR_CLASS } from '../../../../config'
import { handleLabel, handleMessage } from '../../inputs/base'
import * as Styled from '../styles'

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
  ...others
}) => {
  const selected = isUndefined(value)
  const valueProp = !selected ? { defaultValue: value } : { value }
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <>
      {handleLabel(label, idValue, required, hasError)}
      <Styled.SelectNative
        name={name}
        {...valueProp}
        id={idValue}
        placeholder={placeholder}
        required={required}
        {...handleProps(others, `select-native ${errorClass}`)}
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
}

SelectNative.defaultProps = {
  ...inputDefaultProps(),
}

export default SelectNative
