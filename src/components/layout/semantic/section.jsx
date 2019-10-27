/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { COLOR_VARIANT_NONE, colorVariantCSS, containerStyle } from '../../utils'

const Styled = styled('section')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  overflow: auto;
  ${({ fluid, padded, theme }) => containerStyle(theme.breakpoints, fluid, padded)};
  text-align: ${({ textAlign }) => textAlign};
`

export const Section = ({ fluid, padded, variant, className, children, ...others }) => (
  <Styled fluid={fluid} padded={padded} variant={variant} className={className} {...others}>{children}</Styled>
)

Section.propTypes = {
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
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
  textAlign: 'inherit',
  fluid: false,
  padded: true,
  variant: COLOR_VARIANT_NONE,
}

export default Section
