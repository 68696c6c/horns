import React from 'react'
import uuid from 'uuid/v4'
import { SVGCircle, SVGPath } from '../svg'

const linePointWidth = 2

const ChartLine = ({ xScale, yInc, yStart, data }) => {
  let points = []
  let path = ''
  for (let i = 0; i < data.length; i++) {
    const y = yStart - (yInc * data[i])
    const x = xScale[i]
    if (i === 0) {
      path += `M ${x} ${y} `
    } else {
      path += `L ${x} ${y} `
    }
    points.push({ x, y })
  }
  return (
    <g className="line">
      {points.map(point => <SVGCircle fill="copy" r={linePointWidth} cx={point.x} cy={point.y} key={uuid()}/>)}
      <SVGPath stroke="copy" d={path} />
    </g>
  )
}

export default ChartLine
