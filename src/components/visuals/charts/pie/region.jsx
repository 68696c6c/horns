import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { rgb } from '../../../../themes/utils'

const VARIANT_NONE = 'none'

const percentToCartesian = (centerX, centerY, radius, percent) => {
  const degrees = percent / 100 * 360
  const angleInRadians = (degrees - 90) * Math.PI / 180.0
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

const PieRegionBase = ({ theme, label, radius, center, percent, offset, strokeWidth, stroke, fill, ...others }) => {
  const start = percentToCartesian(center, center, radius, offset)
  const end = percentToCartesian(center, center, radius, percent + offset)
  const f = percent - offset <= 180 ? '0' : '1'
  const fillPath = `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${f} 1 ${end.x} ${end.y} L ${center} ${center} L ${start.x} ${start.y}`
  const strokeValue = stroke === VARIANT_NONE ? VARIANT_NONE : rgb(theme.colors[stroke].dark)
  const fillValue = fill === 'transparent' ? 'transparent' : rgb(theme.colors[fill].default)
  return (
    <path cursor="help" d={fillPath} {...others} stroke={strokeValue} strokeWidth={strokeWidth} fill={fillValue}>
      <title>{label} {percent}%</title>
    </path>
  )
}

PieRegionBase.propTypes = {
  label: PropTypes.string,
  radius: PropTypes.number.isRequired,
  center: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.oneOf([
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
    VARIANT_NONE,
  ]),
  fill: PropTypes.oneOf([
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
    'transparent',
  ]),
}

PieRegionBase.defaultProps = {
  strokeWidth: 0,
  stroke: VARIANT_NONE,
  fill: 'transparent',
}

export default withTheme(PieRegionBase)
