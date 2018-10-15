import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { SVGCircle, SVGPath } from '../svg'
import { withTheme } from 'emotion-theming'
import { rgb } from '../../../../themes/utils'

const linePointWidth = 2

const ChartLine = ({ theme, label, variant, xScale, yInc, yStart, data }) => {
  let points = []
  let originX = 0
  let endX = 0
  const originY = yStart
  let path = ''
  let fillPath = ''
  for (let i = 0; i < data.length; i++) {
    const y = yStart - (yInc * data[i])
    const x = xScale[i]
    if (i === 0) {
      path += `M ${x} ${y} `
      originX = x
      fillPath += `M ${originX} ${originY} L ${x} ${y} `
    } else {
      path += `L ${x} ${y} `
      fillPath += `L ${x} ${y} `
    }
    if (i === data.length - 1) {
      endX = x
    }
    points.push({ x, y })
  }
  fillPath += ` L ${endX} ${originY} L ${originX} ${originY}`
  const pointColor = theme.colors[variant].dark
  const lineColor = theme.colors[variant].default
  const fillColor = theme.colors[variant].alpha
  return (
    <g className="line">
      <path stroke="none" fill={rgb(fillColor)} d={fillPath} />
      <path cursor="help" stroke={rgb(lineColor)} fill="none" strokeWidth={linePointWidth} d={path}>
        <title>{label}</title>
      </path>
      {points.map(point => (
        <circle cursor="help" fill={rgb(pointColor)} r={linePointWidth * 2} cx={point.x} cy={point.y} key={uuid()}>
          <title>{point.y}</title>
        </circle>
      ))}
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
