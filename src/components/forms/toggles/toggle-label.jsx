import React from 'react'
import PropTypes from 'prop-types'

import { ERROR_CLASS } from '../../../config'
import { handleProps } from '../../../mixins'
import * as Styled from './styles'

const ToggleLabel = ({ htmlFor, required, hasError, children, ...others }) => {
  const reqClass = required ? 'required' : ''
  const errorClass = hasError ? ERROR_CLASS : ''
  return (
    <Styled.ToggleLabel
      htmlFor={htmlFor}
      {...handleProps(others, `toggle-label ${reqClass} ${errorClass}`)}
    >
      {children}
    </Styled.ToggleLabel>
  )
}

ToggleLabel.propTypes = {
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  children: PropTypes.string,
}

ToggleLabel.defaultProps = {
  htmlFor: '',
  required: false,
  hasError: false,
}

export default ToggleLabel
