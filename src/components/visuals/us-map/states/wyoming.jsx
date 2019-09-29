/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'WY'

const Wyoming = ({
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
      d="M358.44,188.28L360.174,169.416L361.638,152.925L362.37,144.679L351.052,143.639L339.189,142.288L327.598,141.092L314.062,139.50900000000001L297.337,137.19000000000003L283.957,135.33500000000004L267.387,132.74400000000003L255.13400000000001,130.81000000000003L253.27700000000002,141.66200000000003L250.257,158.34900000000005L247.97400000000002,171.84600000000006L245.846,185.07100000000005L244.02700000000002,195.22300000000004L240.46800000000002,216.65500000000003L246.30300000000003,217.81700000000004L262.601,220.25300000000004L272.909,221.80000000000004L285.589,223.61700000000005L295.897,225.16400000000004L306.08799999999997,226.28300000000004L316.39599999999996,227.83000000000004L326.58699999999993,228.94900000000004L336.7779999999999,230.06800000000004L354.2419999999999,231.72500000000005L355.3989999999999,220.83400000000006L356.55399999999986,207.41500000000005L358.44299999999987,188.27500000000003Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="222.3"
        y="133.38"
        transform="matrix(0.741,0,0,0.741,57.5757,34.5454)"
        textY="8.098749999999995"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Wyoming.propTypes = {
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

Wyoming.defaultProps = {
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

export default Wyoming
