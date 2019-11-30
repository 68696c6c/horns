import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { handleProps, inputDefaultProps, inputPropTypes } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'
import { handleMessage } from '../inputs/base'
import ToggleLabel from './toggle-label'
import * as Styled from './styles'

const Checkbox = ({
  label,
  id,
  name,
  value,
  required,
  hasError,
  errorMessage,
  className,
  ...others
}) => {
  const errorClass = hasError ? ERROR_CLASS : ''
  const idValue = id === '' ? uuid() : id
  return (
    <React.Fragment>
      <Styled.Toggle
        type="checkbox"
        name={name}
        id={idValue}
        value={value}
        required={required ? 'required' : ''}
        {...handleProps(others, `checkbox ${errorClass}`)}
      />
      <Styled.ToggleControl htmlFor={idValue} className="toggle-control" />
      {label && (
        <ToggleLabel htmlFor={idValue} required={required} hasError={hasError}>
          {label}
        </ToggleLabel>
      )}
      {handleMessage(errorMessage, idValue, 'toggle-message')}
    </React.Fragment>
  )
}

Checkbox.propTypes = {
  ...inputPropTypes(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Checkbox.defaultProps = {
  ...inputDefaultProps(),
  value: '',
}

export default Checkbox
