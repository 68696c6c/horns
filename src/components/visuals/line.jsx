import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import uuid from 'uuid/v4'
import { colorVariantCSS, gradientRadialCSS, gradientVerticalCSS } from '../utils'
import { rgb } from '../../themes/utils'
import { isArray } from '../../utils/utils'

const StyledChart = styled('svg')`
  border: 1px solid ${({ theme }) => rgb(theme.colors.copy.default)};
`
const StyledBackground = styled('rect')`
  stroke: none;
  stroke-width: 0;
  fill: ${({ theme }) => rgb(theme.colors.light.default)};
`
const StyledLine = styled('line')`
  stroke: ${({ theme }) => rgb(theme.colors.copy.default)};
  stroke-width: 1;
`
const StyledLabel = styled('label')`
  display: block;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 1em;
  vertical-align: top;
  text-align: ${({ align }) => align};
`
const htmlProps = { xmlns: 'http://www.w3.org/1999/xhtml' }
const pointWidth = 5

const Label = ({ x, y, width, height, align, children }) => (
  <foreignObject x={x} y={y} width={width} height={height}>
    <StyledLabel {...htmlProps} fontSize={height} align={align}>{children}</StyledLabel>
  </foreignObject>
)

const ScaleY = ({ x, y, height, increment }) => {
  const y2 = y + height
  let points = []
  const pStart = x - (pointWidth / 2)
  const pEnd = x + (pointWidth / 2)
  for (let i = y2; i > y; i -= increment) {
    points.push(<StyledLine className="point" x1={pStart} y1={i} x2={pEnd} y2={i} key={uuid()}/>)
  }
  return (
    <g className="y-scale">
      <StyledLine className="axis" x1={x} y1={y} x2={x} y2={y2} key={uuid()} />
      {points}
    </g>
  )
}

const AxisY = ({ labels, chartPadding, fontSize, height }) => {
  const increment = height / labels.length
  const start = height + fontSize
  const scale = labels.map((text, index) => {
    const pos = start - (increment * index)
    return <Label x={0} y={pos} width={chartPadding} height={fontSize} align="center" key={uuid()}>{text}</Label>
  })
  return (
    <g className="y-axis">
      <ScaleY x={chartPadding} y={chartPadding} height={height} increment={increment} key={uuid()} />
      {scale}
    </g>
  )
}

const ScaleX = ({ x, y, width, increment }) => {
  const x2 = x + width
  let points = []
  const pStart = y - (pointWidth / 2)
  const pEnd = y + (pointWidth / 2)
  for (let i = x; i < x2; i += increment) {
    points.push(<StyledLine className="point" x1={i} y1={pStart} x2={i} y2={pEnd} key={uuid()} />)
  }
  return (
    <g className="x-scale">
      <StyledLine className="axis" x1={x} y1={y} x2={x2} y2={y} key={uuid()} />
      {points}
    </g>
  )
}

const AxisX = ({ labels, chartPadding, fontSize, height, width }) => {
  const increment = width / labels.length
  const y = height + chartPadding + ((chartPadding - fontSize) / 2)
  const scale = labels.map((text, index) => {
    const pos = chartPadding + (increment * index)
    return <Label x={pos} y={y} width={increment} height={fontSize} align="left" key={uuid()}>{text}</Label>
  })
  return (
    <g className="x-axis">
      <ScaleX x={chartPadding} y={height + chartPadding} width={width} increment={increment} key={uuid()} />
      {scale}
    </g>
  )
}

export const LineChartBase = ({ theme, y, x, width, height, fontSize, children, ...others }) => {
  let defs = []
  // for (let name in theme.colors) {
  //   const color = theme.colors[name]
  //   defs.push(<GradientDef name={name} color1={color.light} color2={color.default} key={uuid()} />)
  // }
  const chartPadding = fontSize * 1.5
  const chartWidth = width + (chartPadding * 2)
  const chartHeight = height + (chartPadding * 2)
  // const childArray = isArray(children) ? children : [children]
  return (
    <StyledChart width={chartWidth} height={chartHeight} {...others}>
      <defs>{defs}</defs>
      <StyledBackground className="background" x={chartPadding} y={chartPadding} width={width} height={height} />
      <AxisY labels={y} chartPadding={chartPadding} fontSize={fontSize} height={height} />
      <AxisX labels={x} chartPadding={chartPadding} fontSize={fontSize} height={height} width={width} />
    </StyledChart>
  )
}

LineChartBase.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired,
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

LineChartBase.defaultProps = {
  width: 600,
  height: 300,
  fontSize: 15,
  variant: 'neutral',
}

export default withTheme(LineChartBase)
