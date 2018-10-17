import React from 'react'
import uuid from 'uuid/v4'
import { SVGLine } from './svg'
import { AXIS_MARK_WIDTH } from './utils'
import ChartLabel from './chart-label'

const ScaleX = ({ x, y, xMax, marks }) => {
  const half = AXIS_MARK_WIDTH / 2
  const pStart = y - half
  const pEnd = y + half
  const points = marks.map(mX => <SVGLine className="mark" strokeWidth={2} stroke="copy" x1={mX} y1={pStart} x2={mX} y2={pEnd} key={uuid()}/>)
  return (
    <g className="x-scale">
      <SVGLine className="axis" stroke="copy" strokeWidth={2} x1={x} y1={y} x2={xMax} y2={y} key={uuid()} />
      {points}
    </g>
  )
}

const AxisX = ({ increment, scale, labels, chartPaddingX, chartPaddingY, fontSize, height, width }) => {
  const labelOffset = chartPaddingX * 2
  const xMin = chartPaddingX
  const xMax = width + chartPaddingX
  const marks = scale.map(x => x)
  const y = height + chartPaddingY + ((chartPaddingY - fontSize) / 2)
  const scaleLabels = labels.map((text, index) => {
    return <ChartLabel x={marks[index] - labelOffset} y={y} width={increment} height={fontSize} align="center" key={uuid()}>{text}</ChartLabel>
  })
  return (
    <g className="x-axis">
      <ScaleX x={xMin} y={height + chartPaddingY} xMax={xMax} marks={marks} key={uuid()} />
      {scaleLabels}
    </g>
  )
}

export default AxisX
