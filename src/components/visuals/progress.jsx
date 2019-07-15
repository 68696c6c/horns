/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { diagonalLinesCSS, gradientHorizontalCSS, gradientVerticalCSS } from '../utils'
import { rgb } from '../../themes/utils'

const Styled = styled('progress')`
  appearance: none;
  height: 1em;
  &:not([value]) {
    &::-webkit-progress-bar {
      background-color: ${({ theme, variant }) => rgb(theme.colors[variant].light)};
      background-image: ${({ theme }) => diagonalLinesCSS(theme.colors.copy.alpha)},
        ${({ theme }) => gradientVerticalCSS(theme.colors.background.alpha, theme.colors.copy.alpha)};
      background-size: 35px 1em, 100% 100%, 100% 100%;
      border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
  }
  &[value] {
    &::-webkit-progress-bar {
      background-color: ${({ theme }) => rgb(theme.colors.background.default)};
      border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    &::-webkit-progress-value {
      background-image: ${({ theme }) => gradientVerticalCSS(theme.colors.background.alpha, theme.colors.copy.alpha)},
        ${({ theme, variant }) => gradientHorizontalCSS(theme.colors[variant].dark, theme.colors[variant].default)};
      background-size: 35px 1em, 100% 100%, 100% 100%;
      border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
    }
  }
`

const Progress = ({ max, value, variant, children, ...others }) => (
  <Styled max={max} value={value} variant={variant} {...others} />
)

Progress.propTypes = {
  rounded: PropTypes.bool,
  max: PropTypes.number,
  value: PropTypes.number,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'background',
  ]),
}

Progress.defaultProps = {
  rounded: true,
  max: 100,
  variant: 'neutral',
}

export default Progress
