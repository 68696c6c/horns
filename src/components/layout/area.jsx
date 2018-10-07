import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { COLOR_VARIANT_NONE, colorVariantCSS } from '../utils'

const Styled = styled('div')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  ${({ area }) => area === '' ? '' : `grid-area: ${area};`}
`

const Area = ({ className, children, ...others }) => {
  return <Styled className={cx(className, 'area')} {...others}>{children}</Styled>
}

Area.propTypes = {
  area: PropTypes.string,
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

Area.defaultProps = {
  area: '',
  variant: COLOR_VARIANT_NONE,
}

export default Area
