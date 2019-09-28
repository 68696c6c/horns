/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'

export const SVGMap = styled('svg')`
  overflow: hidden;
  position: relative;
  left: -0.328125px;
`

// style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0;"
export const SVGRectA = styled('rect')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  fill-opacity: 0;
`

export const MapBackground = ({ ...others }) => (
  <SVGRectA
    x="-2020"
    y="-1242"
    width="5000"
    height="3080"
    r="0"
    rx="0"
    ry="0"
    fill="#ffffff"
    stroke="none"
    transform="matrix(0.741,0,0,0.741,0,0)"
    strokeWidth="1.349527665317139"
    fillOpacity="0"
  />
)

// style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; cursor: pointer; stroke-opacity: 1; stroke-linejoin: round; display: none; fill-opacity: 1;"
export const SVGPathA = styled('path')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: 1;
  cursor: pointer;
  stroke-opacity: 1;
  stroke-linejoin: round;
  display: none;
  fill-opacity: 1;
`

// style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: bold 22px arial, sans-serif; cursor: pointer; opacity: 1;"
export const TextA = styled('text')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-anchor: middle;
  font: bold 22px arial, sans-serif;
  cursor: pointer;
  opacity: 1;
`

// style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
export const TSpanA = styled('tspan')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

// style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: bold 22px arial, sans-serif; cursor: pointer; opacity: 1; display: none;"
export const TextB = styled('text')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-anchor: middle;
  font: bold 22px arial, sans-serif;
  cursor: pointer;
  opacity: 1;
  display: none;
`

// style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0.8; cursor: pointer;"
export const SVGPathC = styled('path')`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: 0.8;
  cursor: pointer;
`

//////

export const Point = props => (
  <SVGPathC
    fill="#ff46a2"
    stroke="#ffffff"
    strokeWidth="1.8749999999999998"
    opacity=".8"
    {...props}
  />
)

export const StarPoint = props => (
  <SVGPathC
    fill="#ffe42f"
    stroke="#ffffff"
    strokeWidth="1.8749999999999998"
    opacity=".8"
    {...props}
  />
)

const Label = props => (
  <TextA
    x="96.33"
    y="40.755"
    textAnchor="middle"
    font='10px "Arial"'
    stroke="none"
    fill="#002767"
    strokeWidth="0"
    fontSize="22px"
    fontWeight="bold"
    fontFamily="arial,sans-serif"
    opacity="1"
    transform="matrix(0.741,0,0,0.741,24.9495,10.5555)"
    className="sm_label_WA"
  >
    <TSpanA dy="7.497187500000003">WA</TSpanA>
  </TextA>
)

