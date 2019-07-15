/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import uuid from 'uuid/v4'
import { rgb } from '../../../themes/utils'
import { isArray } from '../../../utils/utils'
import PieRegion from './region'

const StyledRegion = styled('circle')`
  fill: transparent;
  stroke: url(#${({ variant }) => variant}-stroke);
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-dasharray: ${({ percent }) => percent} 100;
  stroke-dashoffset: -${({ offset }) => offset};
`

export const Region = ({ theme, variant, r, percent, children, ...others }) => (
  <StyledRegion variant={variant} r={r} percent={percent} {...others} />
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

export const PieChartBase = ({ theme, width, variant, children, ...others }) => {
  const padding = 4
  const chartWidth = width + padding
  const radius = width / 2
  const c = radius + (padding / 2)
  const childArray = isArray(children) ? children : [children]

  let offset = 0
  let regions = []
  let outlines = []
  for (let i = 0; i < childArray.length; i++) {
    const { label, percent, variant: rv, ...others } = childArray[i].props
    regions.push(<PieRegion label={label} radius={radius} center={c} offset={offset} percent={percent} fill={rv}
                            {...others} key={uuid()}/>)
    outlines.push(<PieRegion label={label} radius={radius} center={c} offset={offset} percent={percent} stroke={variant}
                             strokeWidth={2} {...others} key={uuid()}/>)
    offset += percent
  }

  const gID = uuid()

  return (
    <svg width={chartWidth} height={chartWidth} {...others}>
      <defs>
        <radialGradient id={gID} cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stopColor={rgb(theme.colors.light.alpha)}/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
      <circle fill={rgb(theme.colors[variant].default)} stroke={rgb(theme.colors[variant].dark)} strokeWidth={2}
              r={radius} cx={c} cy={c}/>
      {regions}
      <circle fill={`url(#${gID})`} stroke="none" strokeWidth={0} r={radius} cx={c} cy={c}/>
      {outlines}
    </svg>
  )
}

PieChartBase.propTypes = {
  width: PropTypes.number,
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
  width: 100,
  variant: 'light',
}

export default withTheme(PieChartBase)
