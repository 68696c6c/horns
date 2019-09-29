/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'ND'

const NorthDakota = ({
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
      d="M469.37,62.757L457.586,62.534L448.057,62.153L432.072,61.699999999999996L419.471,61.010999999999996L409.401,60.31999999999999L400.3,59.821999999999996L387.581,58.705L370.66200000000003,57.358999999999995L368.58200000000005,79.996L367.42500000000007,90.887L365.7300000000001,109.047L364.3430000000001,124.137L372.16100000000006,124.986L389.7800000000001,126.37100000000001L400.5540000000001,127.10100000000001L414.5540000000001,127.86700000000002L421.5540000000001,128.25000000000003L435.8280000000001,129.17100000000002L449.98500000000007,129.66400000000002L464.2970000000001,129.88500000000002L478.6090000000001,130.10600000000002L478.5280000000001,126.45000000000002L477.9410000000001,121.78400000000002L476.1110000000001,119.29700000000003L475.6020000000001,115.75800000000002L475.0960000000001,114.74800000000002L475.0920000000001,109.69200000000002L474.5450000000001,106.85300000000002L474.46400000000006,103.19700000000002L474.30600000000004,100.94100000000002L474.574,96.04000000000002L473.676,91.91800000000002L472.584,88.76900000000002L470.477,81.07000000000002L470.78299999999996,75.46900000000002L470.35299999999995,73.05800000000002L471.20599999999996,70.29600000000002L469.33299999999997,63.45300000000002L469.371,62.753000000000014Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="308.256"
        y="71.136"
        transform="matrix(0.741,0,0,0.741,79.8383,18.4242)"
        textY="7.503187499999996"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

NorthDakota.propTypes = {
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

NorthDakota.defaultProps = {
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

export default NorthDakota
