/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import {
  getMapStateClassName,
  getMapLabelClassName,
} from '../utils'

const abbr = 'CO'

const Colorado = ({
  fill,
  fillHover,
  fillActive,
  stroke,
  strokeHover,
  strokeActive,
  labelFill,
  labelFillHover,
  labelFillActive,
  showLabel,
}) => (
  <Styled.MapStateWrapper
    fill={fill}
    fillHover={fillHover}
    fillActive={fillActive}
    stroke={stroke}
    strokeHover={strokeHover}
    strokeActive={strokeActive}
    labelFill={labelFill}
    labelFillHover={labelFillHover}
    labelFillActive={labelFillActive}
  >
    <Styled.MapState
      d="M385.49,256.04L387.104,234.22000000000003L378.275,233.87800000000001L366.529,232.955L354.238,231.721L336.774,230.064L326.583,228.945L316.39200000000005,227.826L306.08400000000006,226.279L295.8930000000001,225.16L285.5850000000001,223.613L272.9050000000001,221.796L270.8950000000001,235.44899999999998L269.0400000000001,248.82899999999998L266.33200000000005,264.969L264.47700000000003,278.349L261.615,297.292L260.185,308.027L269.793,309.53499999999997L286.246,311.69899999999996L296.00899999999996,312.93499999999995L308.84499999999997,314.47999999999996L328.52599999999995,316.67999999999995L341.51699999999994,317.95199999999994L351.43499999999995,318.91599999999994L364.58099999999996,319.91599999999994L381.07199999999995,321.37999999999994L381.9189999999999,311.03399999999993L382.9549999999999,294.6599999999999L383.8759999999999,280.3859999999999L384.5669999999999,270.3159999999999L385.4879999999999,256.0419999999999Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="237.12"
        y="203.775"
        transform="matrix(0.741,0,0,0.741,61.4141,52.7777)"
        textY="8.095312500000006"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Colorado.propTypes = {
  showLabel: PropTypes.bool,
  fill: PropTypes.oneOf(getColorVariants()),
  fillHover: PropTypes.oneOf(getColorVariants()),
  fillActive: PropTypes.oneOf(getColorVariants()),
  stroke: PropTypes.oneOf(getColorVariants()),
  strokeHover: PropTypes.oneOf(getColorVariants()),
  strokeActive: PropTypes.oneOf(getColorVariants()),
  labelFill: PropTypes.oneOf(getColorVariants()),
  labelFillHover: PropTypes.oneOf(getColorVariants()),
  labelFillActive: PropTypes.oneOf(getColorVariants()),
}

Colorado.defaultProps = {
  showLabel: true,
  fill: 'primary',
  fillHover: 'primary-light',
  fillActive: 'primary-dark',
  stroke: 'neutral',
  strokeHover: 'neutral',
  strokeActive: 'neutral',
  labelFill: 'copy',
  labelFillHover: 'copy',
  labelFillActive: 'copy',
}

export default Colorado
