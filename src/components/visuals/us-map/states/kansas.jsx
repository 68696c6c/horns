/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'KS'

const Kansas = ({
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
      d="M510.36,325.08L509.87600000000003,305.673L509.788,294.433L509.658,278.83799999999997L506.117,276.818L504.75300000000004,273.513L501.56100000000004,270.24899999999997L502.571,267.215L503.93100000000004,265.464L504.903,265.658L505.29,263.713L502.994,262.043L501.82800000000003,262.822L499.92100000000005,261.735L497.78000000000003,259.79200000000003L480.357,259.963L469.973,259.81600000000003L455.81600000000003,259.32300000000004L445.432,259.17600000000004L427.77500000000003,258.49100000000004L407.045,257.49800000000005L396.54400000000004,256.92400000000004L385.494,256.03900000000004L384.57300000000004,270.31300000000005L383.88200000000006,280.38300000000004L382.96100000000007,294.65700000000004L381.92500000000007,311.03100000000006L381.0780000000001,321.37700000000007L393.6790000000001,322.0660000000001L409.7790000000001,322.94700000000006L425.87900000000013,323.82800000000003L434.00800000000015,324.132L449.99300000000017,324.585L465.9780000000002,325.03799999999995L486.0480000000002,325.29299999999995L497.98800000000017,325.24399999999997L510.3550000000002,325.078Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="329.745"
        y="214.89"
        transform="matrix(0.741,0,0,0.741,85.404,55.6565)"
        textY="8.093124999999986"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Kansas.propTypes = {
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

Kansas.defaultProps = {
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

export default Kansas
