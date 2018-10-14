import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import styled from 'react-emotion'
import { isArray } from '../../../../utils/utils'
import ChartLine from './line'
import AxisY from '../y-axis'
import AxisX from '../x-axis'
import { rgb } from '../../../../themes/utils'
import { SVGRect } from '../svg'

const StyledChart = styled('svg')`
  border: 1px solid ${({ theme }) => rgb(theme.colors.copy.default)};
`

export const LineChartBase = ({ theme, y, x, width, height, fontSize, children, ...others }) => {
  let defs = []
  // for (let name in theme.colors) {
  //   const color = theme.colors[name]
  //   defs.push(<GradientDef name={name} color1={color.light} color2={color.default} key={uuid()} />)
  // }


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
    return <ChartLine xScale={xScale} yInc={yInc} yStart={yStart} {...line.props} />
  })
  return (
    <StyledChart width={chartWidth} height={chartHeight} {...others}>
      <defs>{defs}</defs>
      <SVGRect className="background" fill="light" x={chartPaddingX} y={chartPaddingY} width={width} height={height} />
      <AxisY labels={y} chartPaddingX={chartPaddingX} chartPaddingY={chartPaddingY} fontSize={fontSize} height={height} />
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

LineChartBase.defaultProps = {
  width: 600,
  height: 300,
  fontSize: 15,
  variant: 'neutral',
}

export const Line = props => <div {...props}/>

export default withTheme(LineChartBase)
