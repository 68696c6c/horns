import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { handleProps, inputDefaultProps, inputPropTypes } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'
import { handleMessage } from '../inputs/base'
import ToggleLabel from './toggle-label'
import * as Styled from './styles'

const Radio = ({
  label,
  id,
  name,
  value,
  required,
  hasError,
  errorMessage,
  ...others
}) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <Styled.ToggleContainer className="toggle-container">
      <Styled.Toggle
        type="radio"
        name={name}
        id={idValue}
        value={value}
        required={required ? 'required' : ''}
        {...handleProps(others, `radio ${errorClass}`)}
      />
      <Styled.ToggleControl
        htmlFor={idValue}
        className="toggle-control"
        round
      />
      {label && (
        <ToggleLabel htmlFor={idValue} required={required} hasError={hasError}>
          {label}
        </ToggleLabel>
      )}
      {handleMessage(errorMessage, idValue, 'toggle-message')}
    </Styled.ToggleContainer>
  )
}

Radio.propTypes = {
  ...inputPropTypes(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Radio.defaultProps = {
  ...inputDefaultProps(),
  value: '',
}

export default Radio
