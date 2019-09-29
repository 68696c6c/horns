/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'
import { colorVariantSwatchValue } from '../../utils'

export const SVGMap = styled('svg')`
  overflow: hidden;
  position: relative;
`

export const StyledMapBackground = styled('rect')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  fill-opacity: 1;
  fill: ${({ theme, variant }) => colorVariantSwatchValue(theme, variant)};
  stroke: none;
  stroke-width: 1.349527665317139;
  width: 100%;
  height: 100%;
`

export const MapBackground = props => (
  <StyledMapBackground x="0" y="0" r="0" rx="0" ry="0" {...props} />
)

MapBackground.propTypes = {
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
  ]).isRequired,
}

export const SVGPStyledPoint = styled('path')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: 0.8;
  cursor: pointer;
`

export const Point = props => (
  <SVGPStyledPoint
    fill="#ff46a2"
    stroke="#ffffff"
    strokeWidth="1.8749999999999998"
    opacity=".8"
    {...props}
  />
)

export const StarPoint = props => (
  <SVGPStyledPoint
    fill="#ffe42f"
    stroke="#ffffff"
    strokeWidth="1.8749999999999998"
    opacity=".8"
    {...props}
  />
)
