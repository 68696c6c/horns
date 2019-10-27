/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { COLOR_VARIANT_NONE, colorVariantCSS, containerStyleHorizontal } from '../../utils'

const FluidTitleBar = styled('header')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  ${({ theme, fluid }) => containerStyleHorizontal(theme.breakpoints, fluid)};
  padding-top: ${({ theme }) => theme.spacing.small};
  padding-bottom: ${({ theme }) => theme.spacing.small};
`

const PaddedTitleBar = styled('header')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  padding: ${({ theme }) => theme.spacing.small};
`

const TitleBar = ({ fluid, variant, children, ...others }) => {
  let Tag = PaddedTitleBar
  if (fluid) {
    Tag = FluidTitleBar
  }
  return (
    <Tag variant={variant} {...others}>{children}</Tag>
  )
}

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
