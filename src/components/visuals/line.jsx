import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import uuid from 'uuid/v4'
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
const axisMarkWidth = 5

const Label = ({ x, y, width, height, align, children }) => (
  <foreignObject x={x} y={y} width={width} height={height}>
    <StyledLabel {...htmlProps} fontSize={height} align={align}>{children}</StyledLabel>
  </foreignObject>
)

const ScaleY = ({ x, y, height, marks }) => {
  const y2 = y + height
  const pStart = x - (axisMarkWidth / 2)
  const pEnd = x + (axisMarkWidth / 2)
  // let points = []
  // for (let i = y2; i > y; i -= increment) {
  //   points.push(<StyledLine className="mark" x1={pStart} y1={i} x2={pEnd} y2={i} key={uuid()}/>)
  // }
  const points = marks.map(mY => <StyledLine className="mark" x1={pStart} y1={mY} x2={pEnd} y2={mY} key={uuid()}/>)
  return (
    <g className="y-scale">
      <StyledLine className="axis" x1={x} y1={y} x2={x} y2={y2} key={uuid()} />
      {points}
    </g>
  )
}

const AxisY = ({ scale, labels, chartPadding, fontSize, height }) => {
  const increment = height / (labels.length - 1)
  const labelOffset = fontSize / 2
  let marks = []
  const y2 = height + chartPadding
  for (let i = y2; i >= chartPadding; i -= increment) {
    marks.push(i)
  }
  const scaleLabels = labels.map((text, index) => {
    return <Label x={0} y={marks[index] - labelOffset} width={chartPadding} height={fontSize} align="center" key={uuid()}>{text}</Label>
  })
  return (
    <g className="y-axis">
      <ScaleY x={chartPadding} y={chartPadding} height={height} marks={marks} key={uuid()} />
      {scaleLabels}
    </g>
  )
}

const ScaleX = ({ x, y, width, increment }) => {
  const x2 = x + width
  let points = []
  const pStart = y - (axisMarkWidth / 2)
  const pEnd = y + (axisMarkWidth / 2)
  for (let i = x; i < x2; i += increment) {
    points.push(<StyledLine className="mark" x1={i} y1={pStart} x2={i} y2={pEnd} key={uuid()} />)
  }
  return (
    <g className="x-scale">
      <StyledLine className="axis" x1={x} y1={y} x2={x2} y2={y} key={uuid()} />
      {points}
    </g>
  )
}

const AxisX = ({ scale, labels, chartPadding, fontSize, height, width }) => {
  const increment = width / labels.length
  const y = height + chartPadding + ((chartPadding - fontSize) / 2)
  const scaleLabels = labels.map((text, index) => {
    return <Label x={scale[index]} y={y} width={increment} height={fontSize} align="left" key={uuid()}>{text}</Label>
  })
  return (
    <g className="x-axis">
      <ScaleX x={chartPadding} y={height + chartPadding} width={width} increment={increment} key={uuid()} />
      {scaleLabels}
    </g>
  )
}

const linePointWidth = 2
const StyledPoint = styled('circle')`
  fill: ${({ theme }) => rgb(theme.colors.copy.default)};
  stroke: ${({ theme }) => rgb(theme.colors.copy.default)};
  stroke-width: ${linePointWidth};
`
const ChartLine = ({ xScale, yInc, yStart, data }) => {
  const points = []
  for (let i = 0; i < data.length; i++) {
    const y = yStart - (yInc * data[i])
    points.push(<StyledPoint r={linePointWidth} cx={xScale[i]} cy={y} key={uuid()} />)
  }
  return <g className="line">{points}</g>
}

export const Line = props => <div {...props}/>
export const LineChartBase = ({ theme, y, x, width, height, fontSize, children, ...others }) => {
  let defs = []
  // for (let name in theme.colors) {
  //   const color = theme.colors[name]
  //   defs.push(<GradientDef name={name} color1={color.light} color2={color.default} key={uuid()} />)
  // }
  const chartPadding = fontSize * 1.5
  const chartWidth = width + (chartPadding * 2)
  const chartHeight = height + (chartPadding * 2)
  const childArray = isArray(children) ? children : [children]

  const yMax = y[y.length - 1]
  const yStart = height + fontSize
  const yInc = height / yMax
  const yScale = y.map((text, index) => {
    return yStart - (yInc * index)
  })

  const xInc = width / x.length
  const xScale = x.map((text, index) => {
    return chartPadding + (xInc * index)
  })

  const content = childArray.map(line => {
    return <ChartLine xScale={xScale} yInc={yInc} yStart={height + chartPadding} data={line.props.data} />
  })
  return (
    <StyledChart width={chartWidth} height={chartHeight} {...others}>
      <defs>{defs}</defs>
      <StyledBackground className="background" x={chartPadding} y={chartPadding} width={width} height={height} />
      <AxisY scale={yScale} labels={y} chartPadding={chartPadding} fontSize={fontSize} height={height} />
      <AxisX scale={xScale} labels={x} chartPadding={chartPadding} fontSize={fontSize} height={height} width={width} />
      {content}
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
