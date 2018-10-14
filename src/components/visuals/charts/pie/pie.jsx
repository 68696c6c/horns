import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import uuid from 'uuid/v4'
import { colorVariantCSS, gradientRadialCSS, gradientVerticalCSS } from '../../../utils'
import { rgb } from '../../../../themes/utils'
import { isArray } from '../../../../utils/utils'

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

const SVGRegion = ({ theme, variant, r, percent, children, ...others }) => {
  return <StyledRegion variant={variant} r={r} percent={percent} {...others} />
  // const fillPath = `M 0 0 L ${r} ${r}`
  // return (
  //   <React.Fragment>
  //     <StyledRegion variant={variant} r={r} percent={percent} {...others} />
  //     <path stroke={rgb(theme.colors[variant].default)} fill="none" d={fillPath} />
  //   </React.Fragment>
  // )
}

SVGRegion.propTypes = {
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

SVGRegion.defaultProps = {
  variant: 'neutral',
}

export const Region = withTheme(SVGRegion)

const GradientDef = ({ name, color }) => (
  <radialGradient id={`${name}-stroke`}>
    <stop offset="0%" stopColor={rgb(color.default)} />
    <stop offset="100%" stopColor={rgb(color.light)} />
  </radialGradient>
)

export const PieChartBase = ({ theme, width, variant, children, ...others }) => {
  let defs = []
  for (let name in theme.colors) {
    const color = theme.colors[name]
    defs.push(<GradientDef name={name} color={color} key={uuid()} />)
  }
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
        const slice = <Region offset={offset} percent={p} variant={rv} {...others} {...rProps} key={uuid()} />
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
  variant: 'light',
}

export default withTheme(PieChartBase)
