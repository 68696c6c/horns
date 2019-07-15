/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import uuid from 'uuid/v4'
import ChartLine from './line'
import AxisY from '../y-axis'
import AxisX from '../x-axis'
import { SVGRect } from '../../svg'
import { rgb } from '../../../themes/utils'
import { isArray } from '../../../utils/utils'

const StyledChart = styled('svg')`
  border: 1px solid ${({ theme }) => rgb(theme.colors.copy.default)};
`

export const LineChartBase = ({ theme, y, x, width, height, fontSize, children, ...others }) => {
  const xMax = x.length - 1
  const xInc = width / xMax

  const yMax = y[y.length - 1]
  const yInc = height / yMax

  const chartPaddingX = xInc / 4
  const chartPaddingY = fontSize * 3

  const xStart = chartPaddingX
  const yStart = height + chartPaddingY

  const xScale = x.map((text, index) => {
    return xStart + (xInc * index)
  })

  const chartWidth = width + (chartPaddingX * 2)
  const chartHeight = height + (chartPaddingY * 2)
  const childArray = isArray(children) ? children : [children]

  const content = childArray.map(line => {
    return <ChartLine xScale={xScale} yInc={yInc} yStart={yStart} key={uuid()} {...line.props} />
  })
  return (
    <StyledChart width={chartWidth} height={chartHeight} {...others}>
      <SVGRect className="background" fill="light" x={chartPaddingX} y={chartPaddingY} width={width} height={height} />
      <AxisY labels={y} chartPaddingX={chartPaddingX} chartPaddingY={chartPaddingY} fontSize={fontSize} height={height} width={width} />
      <AxisX increment={xInc} scale={xScale} labels={x} chartPaddingX={chartPaddingX} chartPaddingY={chartPaddingY} fontSize={fontSize} height={height} width={width} />
      {content}
    </StyledChart>
  )
}

LineChartBase.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired,
}

LineChartBase.defaultProps = {
  width: 600,
  height: 300,
  fontSize: 15,
}

export const Line = props => <div {...props}/>

export default withTheme(LineChartBase)
