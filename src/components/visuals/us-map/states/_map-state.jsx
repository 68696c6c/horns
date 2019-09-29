/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'
import { colorVariantValue, getColorVariants } from '../../../utils'

export const getMapStateClassName = abbr => `map-state map-state-${abbr}`
export const getMapLabelBGClassName = abbr => `map-label-bg map-label-bg-${abbr}`
export const getMapLabelClassName = abbr => `map-label map-label-${abbr}`

export const MapStateWrapper = styled('g')`
  .map-state {
    cursor: pointer;
    fill: ${({ theme, fill }) => fill && colorVariantValue(theme, fill)};
    stroke: ${({ theme, stroke }) => stroke && colorVariantValue(theme, stroke)};
  }
  .map-label-bg {
    cursor: pointer;
    fill: ${({ theme, fill }) => fill && colorVariantValue(theme, fill)};
    stroke: ${({ theme, stroke }) => stroke && colorVariantValue(theme, stroke)};
  }
  .map-label tspan {
    fill: ${({ theme, labelFill }) => labelFill && colorVariantValue(theme, labelFill)};
  }
  &:hover {
    .map-state {
      fill: ${({ theme, fillHover }) => fillHover && colorVariantValue(theme, fillHover)};
      stroke: ${({ theme, strokeHover }) => strokeHover && colorVariantValue(theme, strokeHover)};
    }
    .map-label-bg {
      fill: ${({ theme, fillHover }) => fillHover && colorVariantValue(theme, fillHover)};
      stroke: ${({ theme, strokeHover }) => strokeHover && colorVariantValue(theme, strokeHover)};
    }
    .map-label tspan {
      fill: ${({ theme, labelFillHover }) => labelFillHover && colorVariantValue(theme, labelFillHover)};
    }
  }
  &:active {
    .map-state {
      fill: ${({ theme, fillActive }) => fillActive && colorVariantValue(theme, fillActive)};
      stroke: ${({ theme, strokeActive }) => strokeActive && colorVariantValue(theme, strokeActive)};
    }
    .map-label-bg {
      fill: ${({ theme, fillActive }) => fillActive && colorVariantValue(theme, fillActive)};
      stroke: ${({ theme, strokeActive }) => strokeActive && colorVariantValue(theme, strokeActive)};
    }
    .map-label tspan {
      fill: ${({ theme, labelFillActive }) => labelFillActive && colorVariantValue(theme, labelFillActive)};
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

const MapState = props => <StyledMapState {...props} />

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

export default MapState
