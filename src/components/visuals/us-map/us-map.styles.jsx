/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'
import { rgb } from '../../../themes'

import { getColorVariants } from '../../utils'

export const SVGMap = styled('svg')`
  overflow: hidden;
  position: relative;
`

const StyledMapBackground = styled('rect')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  fill-opacity: 1;
  fill: ${({ theme, variant }) =>
    rgb(theme.mapVariants[variant].backgroundFill)};
  stroke: none;
  width: 100%;
  height: 100%;
`

export const MapBackground = props => (
  <StyledMapBackground x="0" y="0" r="0" rx="0" ry="0" {...props} />
)

MapBackground.propTypes = {
  variant: PropTypes.oneOf(getColorVariants(['custom'])).isRequired,
}

export const MapStateWrapper = styled('g')`
  .map-state {
    cursor: pointer;
    fill: ${({ theme, variant }) =>
      rgb(theme.mapVariants[variant].states.fill)};
    stroke: ${({ theme, variant }) =>
      rgb(theme.mapVariants[variant].states.stroke)};
  }
  .map-label-bg {
    cursor: pointer;
    fill: ${({ theme, variant }) =>
      rgb(theme.mapVariants[variant].states.fill)};
    stroke: ${({ theme, variant }) =>
      rgb(theme.mapVariants[variant].states.stroke)};
  }
  .map-label tspan {
    fill: ${({ theme, variant }) =>
      rgb(theme.mapVariants[variant].labels.fill)};
  }
  &:hover {
    .map-state {
      fill: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.fillHover)};
      stroke: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.strokeHover)};
    }
    .map-label-bg {
      fill: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.fillHover)};
      stroke: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.strokeHover)};
    }
    .map-label tspan {
      fill: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].labels.fillHover)};
    }
  }
  &:active {
    .map-state {
      fill: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.fillActive)};
      stroke: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.strokeActive)};
    }
    .map-label-bg {
      fill: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.fillActive)};
      stroke: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].states.strokeActive)};
    }
    .map-label tspan {
      fill: ${({ theme, variant }) =>
        rgb(theme.mapVariants[variant].labels.fillActive)};
    }
  }
`

MapStateWrapper.propTypes = {
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

MapStateWrapper.propTypes = {
  variant: 'custom',
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
