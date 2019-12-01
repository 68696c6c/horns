import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import {
  handleProps,
  inputDefaultProps,
  inputPropTypes,
} from '../../../../mixins'
import { ERROR_CLASS } from '../../../../config'
import { handleLabel, handleMessage } from '../../inputs/base'
import * as Styled from '../styles'

const MultiselectNative = ({
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
  const selected = value !== ''
  const valueProp = !selected ? { defaultValue: value } : { value }
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <>
      {handleLabel(label, idValue, required, hasError)}
      <Styled.SelectNative
        multiple
        name={name}
        {...valueProp}
        id={idValue}
        required={required}
        {...handleProps(others, `multiselect-native ${errorClass}`)}
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

MultiselectNative.propTypes = {
  ...inputPropTypes(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

MultiselectNative.defaultProps = {
  ...inputDefaultProps(),
  value: '',
}

export default MultiselectNative
