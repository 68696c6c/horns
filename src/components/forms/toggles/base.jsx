import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { rgb } from '../../../themes/utils'
import { baseLabel } from '../label'
import { ERROR_CLASS } from '../utils'

export const ToggleControl = styled('label')`
  content: ' ';
  background: ${({ theme }) => rgb(theme.colors.light.default)};
  display: inline-block;
  width: 1.2em;
  min-width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
  margin: 0 ${({ theme }) => theme.spacing.xsmall} 0 ${({ theme }) => theme.spacing.tiny};
  border: 2px solid ${({ theme }) => rgb(theme.colors.dark.default)};
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

export const ToggleLabel = ({ htmlFor, required, hasError, className, children, ...others }) => {
  const reqClass = required ? 'required' : ''
  const errorClass = hasError ? ERROR_CLASS : ''
  return (
    <StyledToggleLabel htmlFor={htmlFor} className={cx(className, reqClass, errorClass)} {...others}>
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
  & ~ label.toggle-label {
    vertical-align: bottom;
    display: inline-block;
  }
  &:checked + label.toggle-control {
    background: ${({ theme }) => rgb(theme.colors.primary.default)};
  }
  &.error + label.toggle-control {
    border: 2px solid ${({ theme }) => rgb(theme.colors.danger.default)};
  }
  &:disabled + label.toggle-control {
    background: ${({ theme }) => rgb(theme.colors.neutral.light)};
    cursor: not-allowed;
  }
  &:disabled + label.toggle-control + label.toggle-label {
    cursor: not-allowed;
  }
`
