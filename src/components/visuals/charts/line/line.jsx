import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { SVGCircle, SVGPath } from '../svg'
import { withTheme } from 'emotion-theming'
import { rgb } from '../../../../themes/utils'

const linePointWidth = 2

const ChartLine = ({ theme, variant, xScale, yInc, yStart, data }) => {
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
  const pointColor = theme.colors[variant].dark
  const lineColor = theme.colors[variant].default
  const fillColor = theme.colors[variant].alpha
  return (
    <g className="line">
      {points.map(point => <circle fill={rgb(pointColor)} r={linePointWidth * 2} cx={point.x} cy={point.y} key={uuid()}/>)}
      <path stroke={rgb(lineColor)} fill={rgb(fillColor)} strokeWidth={linePointWidth} d={path} />
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

export default withTheme(ChartLine)
