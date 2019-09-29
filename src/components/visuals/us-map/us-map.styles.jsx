/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'

import {
  colorVariantSwatchValue,
  colorVariantValue,
  getColorVariants,
} from '../../utils'

export const SVGMap = styled('svg')`
  overflow: hidden;
  position: relative;
`

export const StyledMapBackground = styled('rect')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  fill-opacity: 1;
  fill: ${({ theme, variant }) => colorVariantSwatchValue(theme, variant)};
  stroke: none;
  width: 100%;
  height: 100%;
`

export const MapBackground = props => (
  <StyledMapBackground x="0" y="0" r="0" rx="0" ry="0" {...props} />
)

MapBackground.propTypes = {
  variant: PropTypes.oneOf(getColorVariants()).isRequired,
}

export const MapStateWrapper = styled('g')`
  .map-state {
    cursor: pointer;
    fill: ${({ theme, fill }) => fill && colorVariantValue(theme, fill)};
    stroke: ${({ theme, stroke }) =>
      stroke && colorVariantValue(theme, stroke)};
  }
  .map-label-bg {
    cursor: pointer;
    fill: ${({ theme, fill }) => fill && colorVariantValue(theme, fill)};
    stroke: ${({ theme, stroke }) =>
      stroke && colorVariantValue(theme, stroke)};
  }
  .map-label tspan {
    fill: ${({ theme, labelFill }) =>
      labelFill && colorVariantValue(theme, labelFill)};
  }
  &:hover {
    .map-state {
      fill: ${({ theme, fillHover }) =>
        fillHover && colorVariantValue(theme, fillHover)};
      stroke: ${({ theme, strokeHover }) =>
        strokeHover && colorVariantValue(theme, strokeHover)};
    }
    .map-label-bg {
      fill: ${({ theme, fillHover }) =>
        fillHover && colorVariantValue(theme, fillHover)};
      stroke: ${({ theme, strokeHover }) =>
        strokeHover && colorVariantValue(theme, strokeHover)};
    }
    .map-label tspan {
      fill: ${({ theme, labelFillHover }) =>
        labelFillHover && colorVariantValue(theme, labelFillHover)};
    }
  }
  &:active {
    .map-state {
      fill: ${({ theme, fillActive }) =>
        fillActive && colorVariantValue(theme, fillActive)};
      stroke: ${({ theme, strokeActive }) =>
        strokeActive && colorVariantValue(theme, strokeActive)};
    }
    .map-label-bg {
      fill: ${({ theme, fillActive }) =>
        fillActive && colorVariantValue(theme, fillActive)};
      stroke: ${({ theme, strokeActive }) =>
        strokeActive && colorVariantValue(theme, strokeActive)};
    }
    .map-label tspan {
      fill: ${({ theme, labelFillActive }) =>
        labelFillActive && colorVariantValue(theme, labelFillActive)};
    }
  }
`

MapStateWrapper.propTypes = {
  fill: PropTypes.oneOf(getColorVariants()).isRequired,
  fillHover: PropTypes.oneOf(getColorVariants()).isRequired,
  fillActive: PropTypes.oneOf(getColorVariants()).isRequired,
  stroke: PropTypes.oneOf(getColorVariants()).isRequired,
  strokeHover: PropTypes.oneOf(getColorVariants()).isRequired,
  strokeActive: PropTypes.oneOf(getColorVariants()).isRequired,
  labelFill: PropTypes.oneOf(getColorVariants()).isRequired,
  labelFillHover: PropTypes.oneOf(getColorVariants()).isRequired,
  labelFillActive: PropTypes.oneOf(getColorVariants()).isRequired,
}

const StyledMapState = styled('path')``

export const MapState = props => <StyledMapState {...props} />

const StyledMapStateLabelBackground = styled('rect')``

export const MapStateLabelBackground = props => (
  <StyledMapStateLabelBackground
    width="45"
    height="28.767968749999998"
    r="5.753593749999999"
    rx="5.753593749999999"
    ry="5.753593749999999"
    {...props}
  />
)

const StyledLabel = styled('text')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-anchor: middle;
  font: bold 22px arial, sans-serif;
  cursor: pointer;
  opacity: 1;
  stroke: none;
  stroke-width: 0;
`

export const StyledMapLabelText = styled('tspan')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

// @TODO use theme fonts
export const MapStateLabel = ({ children, textX, textY, ...others }) => (
  <StyledLabel
    font='10px "Arial"'
    fontSize="22px"
    fontWeight="bold"
    fontFamily="arial,sans-serif"
    {...others}
  >
    <StyledMapLabelText dy={textY}>{children}</StyledMapLabelText>
  </StyledLabel>
)

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
