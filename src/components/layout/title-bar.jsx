import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { COLOR_VARIANT_NONE, colorVariantCSS, containerStyleHorizontal } from '../utils'

const Styled = styled('header')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
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
    COLOR_VARIANT_NONE,
  ]),
}

TitleBar.defaultProps = {
  fluid: false,
  variant: COLOR_VARIANT_NONE,
}

export default TitleBar
