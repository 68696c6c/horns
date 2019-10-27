import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { COLOR_VARIANT_NONE, colorVariantCSS } from '../utils'

const Styled = styled('footer')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
`

const Footer = ({ children, ...others }) => {
  return <Styled {...others}>{children}</Styled>
}

Footer.propTypes = {
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

Footer.defaultProps = {
  variant: COLOR_VARIANT_NONE,
}

export default Footer
