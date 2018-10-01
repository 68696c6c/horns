import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { containerStyleHorizontal } from '../utils'
import { rgb } from '../../themes/utils'

const VARIANT_NONE = 'none'

const Styled = styled('header')`
  background: ${({ variant, theme }) => variant === VARIANT_NONE ? 'none' : rgb(theme.colors[variant].default)};
  color: ${({ variant, theme }) => {
    if (variant === VARIANT_NONE) {
      return rgb(theme.colors.copy.default)
    }
    return theme.colors[variant].default.isLight() ? rgb(theme.colors.copy.dark) : rgb(theme.colors.copy.light)
  }};
  ${({ fluid, theme }) => containerStyleHorizontal(theme.breakpoints, fluid)};
  padding-top: 1em;
  padding-bottom: 1em;
`

const TitleBar = ({ fluid, variant, children, ...others }) => (
  <Styled fluid={fluid} variant={variant} {...others}>{children}</Styled>
)

TitleBar.propTypes = {
  fluid: PropTypes.bool,
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
    VARIANT_NONE,
  ]),
}

TitleBar.defaultProps = {
  fluid: false,
  variant: VARIANT_NONE,
}

export default TitleBar
