import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { COLOR_VARIANT_NONE, colorVariantCSS, containerStyle } from '../utils'

const Styled = styled('section')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
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
    COLOR_VARIANT_NONE,
  ]),
}

Section.defaultProps = {
  fluid: false,
  padded: true,
  variant: COLOR_VARIANT_NONE,
}

export default Section
