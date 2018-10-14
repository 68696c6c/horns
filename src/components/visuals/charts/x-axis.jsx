import React from 'react'
import uuid from 'uuid/v4'
import { SVGLine } from './svg'
import { AXIS_MARK_WIDTH } from './utils'
import ChartLabel from './chart-label'

const ScaleX = ({ x, y, width, increment }) => {
  const x2 = x + width
  const half = AXIS_MARK_WIDTH / 2
  const pStart = y - half
  const pEnd = y + half
  let points = []
  for (let i = x; i < x2; i += increment) {
    points.push(<SVGLine className="mark" stroke="copy" x1={i} y1={pStart} x2={i} y2={pEnd} key={uuid()} />)
  }
  return (
    <g className="x-scale">
      <SVGLine className="axis" stroke="copy" x1={x} y1={y} x2={x2} y2={y} key={uuid()} />
      {points}
    </g>
  )
}

const AxisX = ({ scale, labels, chartPadding, fontSize, height, width }) => {
  const increment = width / labels.length
  const y = height + chartPadding + ((chartPadding - fontSize) / 2)
  const scaleLabels = labels.map((text, index) => {
    return <ChartLabel x={scale[index]} y={y} width={increment} height={fontSize} align="left" key={uuid()}>{text}</ChartLabel>
  })
  return (
    <g className="x-axis">
      <ScaleX x={chartPadding} y={height + chartPadding} width={width} increment={increment} key={uuid()} />
      {scaleLabels}
    </g>
  )
}

export default AxisX
