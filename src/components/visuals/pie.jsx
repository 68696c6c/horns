import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import uuid from 'uuid/v4'
import { colorVariantCSS, gradientRadialCSS, gradientVerticalCSS } from '../utils'
import { rgb } from '../../themes/utils'
import { isArray } from '../../utils/utils'

// https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/

const StyledChart = styled('svg')`
  background: ${({ theme, variant }) => gradientRadialCSS(theme.colors[variant].default, theme.colors[variant].dark)};
  transform: rotate(-90deg);
  border-radius: 50%;
`
const StyledRegion = styled('circle')`
  fill: transparent;
  stroke: url(#${({ variant }) => variant}-stroke);
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-dasharray: ${({ percent }) => percent} 100;
  stroke-dashoffset: -${({ offset }) => offset};
`

export const Region = ({ variant, children, ...others }) => (
  <StyledRegion variant={variant} {...others} />
)

Region.propTypes = {
  percent: PropTypes.number.isRequired,
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

Region.defaultProps = {
  variant: 'neutral',
}

const GradientDef = ({ name, color1, color2 }) => (
  <linearGradient id={`${name}-stroke`}>
    <stop offset="0%" stopColor={rgb(color1)} />
    <stop offset="100%" stopColor={rgb(color2)} />
  </linearGradient>
)

export const PieChartBase = ({ theme, width, variant, children, ...others }) => {
  let defs = []
  for (let name in theme.colors) {
    const color = theme.colors[name]
    defs.push(<GradientDef name={name} color1={color.light} color2={color.default} key={uuid()} />)
  }
  // const radius = 15.915494309
  const radius = 100 / (2 * Math.PI)
  const diameter = radius * 2
  const rProps = { strokeWidth: diameter, r: radius, cx: radius, cy: radius }
  const childArray = isArray(children) ? children : [children]
  let offset = 0
  return (
    <StyledChart viewBox={`0 0 ${diameter} ${diameter}`} width={width} height={width} variant={variant} {...others}>
      <defs>{defs}</defs>
      {childArray.map(region => {
        const { percent: p, variant: rv, ...others } = region.props
        const slice = <StyledRegion offset={offset} percent={p} variant={rv} {...others} {...rProps} key={uuid()} />
        offset += p
        return slice
      })}
    </StyledChart>
  )
}

PieChartBase.propTypes = {
  width: PropTypes.string,
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

PieChartBase.defaultProps = {
  width: '100px',
  variant: 'neutral',
}

export default withTheme(PieChartBase)
