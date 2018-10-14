import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { SVGCircle, SVGPath } from '../svg'

const linePointWidth = 2

const ChartLine = ({ variant, xScale, yInc, yStart, data }) => {
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
      {points.map(point => <SVGCircle fill={variant} r={linePointWidth * 2} cx={point.x} cy={point.y} key={uuid()}/>)}
      <SVGPath stroke={variant} strokeWidth={linePointWidth} d={path} />
    </g>
  )
}

ChartLine.propTypes = {
  label: PropTypes.string,
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
    'copy',
  ]),
  xScale: PropTypes.array.isRequired,
  yInc: PropTypes.number.isRequired,
  yStart: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
}

ChartLine.defaultProps = {
  variant: 'copy',
}

export default ChartLine
