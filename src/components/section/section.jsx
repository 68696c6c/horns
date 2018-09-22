import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../../themes/utils'
import { containerStyle } from '../utils'

const VARIANT_NONE = 'none'

const Styled = styled('section')`
  background: ${({ variant, theme }) => variant === VARIANT_NONE ? 'none' : rgb(theme.colors[variant].default)};
  color: ${({ variant, theme }) => {
    if (variant === VARIANT_NONE) {
      return rgb(theme.colors.copy.default)
    }
    return theme.colors[variant].default.isLight() ? rgb(theme.colors.copy.dark) : rgb(theme.colors.copy.light)
  }};
  overflow: auto;
  ${({ fluid, padded, theme }) => containerStyle(theme.breakpoints, fluid, padded)};
`

export const Section = ({ fluid, padded, variant, className, children, ...others }) => (
  <Styled fluid={fluid} padded={padded} variant={variant} className={className} {...others}>{children}</Styled>
)

Section.propTypes = {
  fluid: PropTypes.bool,
  padded: PropTypes.bool,
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

Section.defaultProps = {
  fluid: false,
  padded: true,
  variant: VARIANT_NONE,
}

export default Section
