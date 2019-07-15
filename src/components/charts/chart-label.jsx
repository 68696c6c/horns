/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import { HTML_PROPS } from './utils'

const StyledLabel = styled('label')`
  display: block;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 1em;
  vertical-align: top;
  text-align: ${({ align }) => align};
`

const ChartLabel = ({ x, y, width, height, align, children }) => (
  <foreignObject x={x} y={y} width={width} height={height}>
    <StyledLabel {...HTML_PROPS} fontSize={height} align={align}>{children}</StyledLabel>
  </foreignObject>
)

export default ChartLabel
