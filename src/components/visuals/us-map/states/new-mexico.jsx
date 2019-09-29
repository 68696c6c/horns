/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import MapState, {
  MapStateWrapper,
  MapStateLabel,
  getMapStateClassName,
  getMapLabelClassName,
} from '../map-state'

const abbr = 'NM'

const NewMexico = ({
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
  <MapStateWrapper
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
    <MapState
      d="M363.7,330.97L364.585,319.92L351.43899999999996,318.92L341.52099999999996,317.956L328.53,316.684L308.849,314.48400000000004L296.013,312.939L286.25,311.70300000000003L269.797,309.53900000000004L260.189,308.03100000000006L257.947,323.35600000000005L256.051,334.9080000000001L254.31099999999998,346.18800000000005L252.069,361.51300000000003L250.601,372.94800000000004L248.705,384.50000000000006L246.965,395.78000000000003L245.342,407.48800000000006L243.10000000000002,422.81300000000005L241.82300000000004,430.74800000000005L243.22300000000004,430.82500000000005L257.30300000000005,432.718L258.81100000000004,423.11L278.18100000000004,425.85400000000004L290.31700000000006,427.36L288.99300000000005,425.88300000000004L287.94000000000005,422.03400000000005L301.20300000000003,423.46100000000007L321.58400000000006,425.69900000000007L338.07500000000005,427.16300000000007L354.56600000000003,428.62700000000007L356.415,407.66300000000007L358.14700000000005,386.2710000000001L359.84200000000004,368.11100000000005L360.92100000000005,356.09100000000007L362.34400000000005,337.77200000000005L362.999,330.92600000000004L363.699,330.96400000000006Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="226.005"
        y="270.465"
        transform="matrix(0.741,0,0,0.741,58.5353,70.0504)"
        textY="8.097812499999975"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

NewMexico.propTypes = {
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

NewMexico.defaultProps = {
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

export default NewMexico
