import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../../themes/utils'
import { baseLabel } from './utils'

export const ToggleControl = styled('label')`
  content: ' ';
  background: ${({ theme }) => rgb(theme.colors.light.default)};
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
  margin-right: .5em;
  border: 2px solid ${({ theme }) => rgb(theme.colors.dark.default)};
  cursor: pointer;
  ${({ round }) => round ? 'border-radius: 50%;' : ''}
`

ToggleControl.propTypes = {
  round: PropTypes.bool,
}

ToggleControl.defaultProps = {
  round: false,
}

export const ToggleLabel = styled('label')`
  display: inline-block;
  cursor: pointer;
  margin: 1em 1em 0 0;
  ${({ theme }) => baseLabel(theme)}
`

export const Toggle = styled('input')`
  display: none;
  font-size: 1em;
  vertical-align: baseline;
  margin: 0 1em 0 0;
  height: 1em;
  & ~ label.toggle-label {
    vertical-align: baseline;
    display: inline-block;
  }
  &:checked + label.toggle-control {
    background: ${({ theme }) => rgb(theme.colors.primary.default)};
  }
  &.error + label.toggle-control {
    border: 2px solid ${({ theme }) => rgb(theme.colors.danger.default)};
  }
`
