import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { COLOR_VARIANT_NONE, colorVariantCSS } from '../utils'

const Styled = styled('div')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  height: 100%;
  width: 100%;
`

const Slide = ({ className, children, ...others }) => (
  <Styled className={cx('slide', className)} {...others}>{children}</Styled>
)

Slide.propTypes = {
  vertical: PropTypes.bool,
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

Slide.defaultProps = {
  vertical: false,
  variant: COLOR_VARIANT_NONE,
}

export default Slide
