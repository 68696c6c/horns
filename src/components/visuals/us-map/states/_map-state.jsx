/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { TSpanA } from '../us-map.styles'

export const getMapStateClassName = abbr => `$map-state-${abbr}`
export const getMapLabelClassName = abbr => `$map-label-${abbr}`

const mapStateBaseCSS = css`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: 1;
  cursor: pointer;
  stroke-opacity: 1;
  stroke-linejoin: round;
  fill-opacity: 1;
`

const Styled = styled('path')`
  ${mapStateBaseCSS}
`

const MapState = ({ ...others }) => (
  <Styled
    fill="#77bcff"
    stroke="#ffffff"
    opacity="1"
    strokeOpacity="1"
    strokeWidth="1.8749999999999998"
    strokeLinejoin="round"
    fillOpacity="1"
    {...others}
  />
)

const StyledMapStateLabelBackground = styled('rect')`
  ${mapStateBaseCSS}
`

export const MapStateLabelBackground = ({ ...others }) => (
  <StyledMapStateLabelBackground
    width="45"
    height="28.767968749999998"
    r="5.753593749999999"
    rx="5.753593749999999"
    ry="5.753593749999999"
    fill="#77bcff"
    stroke="#ffffff"
    strokeWidth="1.8749999999999998"
    opacity="1"
    strokeOpacity="1"
    strokeLinejoin="round"
    fillOpacity="1"
    {...others}
  />
)

const StyledLabel = styled('text')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-anchor: middle;
  font: bold 22px arial, sans-serif;
  cursor: pointer;
  opacity: 1;
`

export const MapStateLabel = ({ children, textX, textY, ...others }) => (
  <StyledLabel
    textAnchor="middle"
    font='10px "Arial"'
    stroke="none"
    fill="#002767"
    strokeWidth="0"
    fontSize="22px"
    fontWeight="bold"
    fontFamily="arial,sans-serif"
    opacity="1"
    {...others}
  >
    <TSpanA dy={textY}>{children}</TSpanA>
  </StyledLabel>
)

export default MapState
