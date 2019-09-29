/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'
import { colorVariantSwatchValue } from '../../../utils'

export const getMapStateClassName = abbr => `$map-state-${abbr}`
export const getMapLabelClassName = abbr => `$map-label-${abbr}`


const StyledMapState = styled('path')`
  fill: inherit;
  stroke: inherit;
  cursor: pointer;
`

const MapState = props => <StyledMapState {...props} />

const StyledMapStateLabelBackground = styled('rect')`
  fill: inherit;
  stroke: inherit;
  cursor: pointer;
`

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
  fill: ${({ theme, variant }) => colorVariantSwatchValue(theme, variant)};
  stroke: none;
  stroke-width: 0;
`

export const StyledMapLabelText = styled('tspan')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  fill: inherit;
`

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

MapStateLabel.propTypes = {
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
  ]),
}

MapStateLabel.defaultProps = {
  variant: 'dark',
}

export default MapState
