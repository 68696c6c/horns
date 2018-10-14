import React from 'react'
import uuid from 'uuid/v4'
import { SVGLine } from './svg'
import { AXIS_MARK_WIDTH } from './utils'
import ChartLabel from './chart-label'

const ScaleY = ({ x, y, height, marks }) => {
  const y2 = y + height
  const half = AXIS_MARK_WIDTH / 2
  const pStart = x - half
  const pEnd = x + half
  const points = marks.map(mY => <SVGLine className="mark" stroke="copy" x1={pStart} y1={mY} x2={pEnd} y2={mY} key={uuid()}/>)
  return (
    <g className="y-scale">
      <SVGLine className="axis" stroke="copy" x1={x} y1={y} x2={x} y2={y2} key={uuid()} />
      {points}
    </g>
  )
}

const AxisY = ({ labels, chartPadding, fontSize, height }) => {
  const increment = height / (labels.length - 1)
  const labelOffset = fontSize / 2
  let marks = []
  const y2 = height + chartPadding
  for (let i = y2; i >= chartPadding; i -= increment) {
    marks.push(i)
  }
  const scaleLabels = labels.map((text, index) => {
    return <ChartLabel x={0} y={marks[index] - labelOffset} width={chartPadding} height={fontSize} align="center" key={uuid()}>{text}</ChartLabel>
  })
  return (
    <g className="y-axis">
      <ScaleY x={chartPadding} y={chartPadding} height={height} marks={marks} key={uuid()} />
      {scaleLabels}
    </g>
  )
}

export default AxisY