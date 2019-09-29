/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'OH'

const Ohio = ({
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
      d="M741.09,224.93L739.1750000000001,213.731L736.2040000000001,196.155L728.663,200.517L723.843,203.905L719.336,209.276L716.187,210.36800000000002L713.3870000000001,210.21500000000003L710.1990000000001,212.00700000000003L708.3330000000001,212.74800000000005L706.1560000000001,214.03300000000004L704.249,212.94600000000005L700.866,213.18200000000004L699.545,214.23300000000003L698.766,213.06700000000004L696.236,210.54100000000003L693.8629999999999,210.27100000000002L692.3839999999999,209.067L689.8559999999999,209.06900000000002L676.4009999999998,211.14200000000002L668.1959999999998,212.23800000000003L669.2539999999998,221.14300000000003L670.8199999999998,233.58700000000002L672.6229999999998,249.41400000000002L674.6619999999998,268.625L676.4109999999998,267.457L677.8899999999999,268.661L680.8839999999999,267.842L683.3349999999999,269.24L685.906,273.594L687.851,273.981L689.834,273.668L691.779,274.055L694.62,276.036L695.592,276.23L697.379,274.362L700.296,274.94300000000004L701.503,275.992L704.4970000000001,275.173L705.7400000000001,272.994L708.1890000000001,271.86400000000003L709.825,275.324L711.8870000000001,276.139L714.3000000000001,278.237L715.7,278.314L718.577,277.067L719.041,273.722L720.3240000000001,273.371L719.6980000000001,269.405L721.3660000000001,264.58099999999996L722.1040000000002,263.919L725.1000000000001,265.628L726.1100000000001,265.122L725.9890000000001,259.63800000000003L726.8040000000002,257.576L728.5150000000002,257.108L728.5920000000002,255.708L729.6410000000002,254.501L731.1580000000002,255.005L733.7630000000003,253.603L735.2400000000002,252.279L736.3270000000002,250.37199999999999L738.8530000000002,247.84199999999998L738.7720000000002,244.18599999999998L739.7820000000002,241.152L739.6630000000001,238.196L740.3200000000002,233.878L740.9800000000001,232.088L740.0840000000002,230.494L740.5880000000002,228.977L738.6030000000002,226.762L741.0900000000001,224.932Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="518.7"
        y="177.84"
        transform="matrix(0.741,0,0,0.741,134.3433,46.0606)"
        textY="7.504062500000003"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Ohio.propTypes = {
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

Ohio.defaultProps = {
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

export default Ohio
