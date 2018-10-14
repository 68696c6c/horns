import React from 'react'
import uuid from 'uuid/v4'
import { SVGCircle } from '../svg'

const linePointWidth = 2

const ChartLine = ({ xScale, yInc, yStart, data }) => {
  const points = []
  for (let i = 0; i < data.length; i++) {
    const y = yStart - (yInc * data[i])
    points.push(<SVGCircle fill="copy" r={linePointWidth} cx={xScale[i]} cy={y} key={uuid()}/>)
  }
  return <g className="line">{points}</g>
}

export default ChartLine
