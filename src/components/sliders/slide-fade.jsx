import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { COLOR_VARIANT_NONE, colorVariantCSS } from '../utils'

const Styled = styled('div')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  height: 100%;
  width: 100%;
  opacity: 0;
  grid-area: content;
  transition: opacity ${({ speed }) => speed}ms ease-in;
  &.active {
    opacity: 1;
  }
`

const SlideFade = ({ className, children, speed, ...others }) => (
  <Styled className={cx('slide', className)} speed={speed} {...others}>{children}</Styled>
)

SlideFade.propTypes = {
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
  speed: PropTypes.number,
}

SlideFade.defaultProps = {
  vertical: false,
  variant: COLOR_VARIANT_NONE,
  speed: 3,
}

export default SlideFade
