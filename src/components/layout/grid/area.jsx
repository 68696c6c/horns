/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { COLOR_VARIANT_NONE, colorVariantCSS } from '../../utils'

const Styled = styled('div')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  ${({ area }) => area === '' ? '' : `grid-area: ${area};`}
`

const Area = ({ children, ...others }) => {
  return <Styled {...others}>{children}</Styled>
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
