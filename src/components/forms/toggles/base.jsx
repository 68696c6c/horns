/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { rgb } from '../../../themes/utils'
import { baseLabel } from '../label'
import { ERROR_CLASS } from '../utils'

export const ToggleControl = styled('label')`
  content: ' ';
  background: ${({ theme }) => rgb(theme.inputs.backgroundColor)};
  display: inline-block;
  width: 1.2em;
  min-width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
  margin: 0 ${({ theme }) => theme.spacing.xsmall} 0 ${({ theme }) => theme.spacing.tiny};
  border: ${({ theme }) => `${theme.inputs.borderWidth} solid ${rgb(theme.inputs.borderColor)}`};
  cursor: pointer;
  ${({ round }) => round ? 'border-radius: 50%;' : ''};
`

ToggleControl.propTypes = {
  round: PropTypes.bool,
}

ToggleControl.defaultProps = {
  round: false,
}

const StyledToggleLabel = styled('label')`
  display: inline-block;
  cursor: pointer;
  margin: 0 ${({ theme }) => theme.spacing.small} 0 0;
  ${({ theme }) => baseLabel(theme)}
`

export const ToggleLabel = ({ htmlFor, required, hasError, children, ...others }) => {
  const reqClass = required ? 'required' : ''
  const errorClass = hasError ? ERROR_CLASS : ''
  return (
    <StyledToggleLabel htmlFor={htmlFor} className={`toggle-label ${reqClass} ${errorClass}`} {...others}>
      {children}
    </StyledToggleLabel>
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

export const Toggle = styled('input')`
  display: none;
  font-size: 1em;
  vertical-align: baseline;
  margin: 0 1em 0 0;
  height: 1em;
  ~ label.toggle-label,
  ~ label.toggle-message {
    vertical-align: bottom;
    display: inline-block;
  }
  &:checked + label.toggle-control {
    background: ${({ theme }) => rgb(theme.inputs.active)};
  }
  &.error + label.toggle-control {
    border-color: ${({ theme }) => rgb(theme.colors.danger.default)};
  }
  &:disabled + label.toggle-control {
    background: ${({ theme }) => rgb(theme.inputs.disabled)};
    cursor: not-allowed;
  }
  &:disabled + label.toggle-control + label.toggle-label {
    cursor: not-allowed;
  }
`
