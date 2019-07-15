/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { gradientHorizontalCSS, gradientVerticalCSS } from '../utils'
import { rgb } from '../../themes/utils'

const Styled = styled('meter')`
  height: 1em;
  &::-webkit-meter-bar {
    background: none;
    background-color: ${({ theme }) => rgb(theme.colors.background.default)};
    border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  &::-webkit-meter-optimum-value {
    background-image: ${({ theme }) => gradientVerticalCSS(theme.colors.background.alpha, theme.colors.copy.alpha)},
      ${({ theme }) => gradientHorizontalCSS(theme.colors.success.default, theme.colors.success.light)};
    background-size: 35px 1em, 100% 100%, 100% 100%;
    border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
  }
  &::-webkit-meter-suboptimum-value {
    background-image: ${({ theme }) => gradientVerticalCSS(theme.colors.background.alpha, theme.colors.copy.alpha)},
      ${({ theme }) => gradientHorizontalCSS(theme.colors.warning.default, theme.colors.warning.light)};
    background-size: 35px 1em, 100% 100%, 100% 100%;
    border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
  }
  &::-webkit-meter-even-less-good-value {
    background-image: ${({ theme }) => gradientVerticalCSS(theme.colors.background.alpha, theme.colors.copy.alpha)},
      ${({ theme }) => gradientHorizontalCSS(theme.colors.danger.default, theme.colors.danger.light)};
    background-size: 35px 1em, 100% 100%, 100% 100%;
    border-radius: ${({ theme, rounded }) => rounded ? theme.config.radius : 0};
  }
`

const Meter = ({ max, value, variant, children, ...others }) => (
  <Styled max={max} value={value} variant={variant} {...others} />
)

Meter.propTypes = {
  rounded: PropTypes.bool,
  form: PropTypes.number,
  low: PropTypes.number,
  high: PropTypes.number,
  min: PropTypes.number,
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

Meter.defaultProps = {
  rounded: true,
  min: 0,
  max: 100,
  variant: 'neutral',
}

export default Meter
