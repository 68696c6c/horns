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
} from './_map-state'

const abbr = 'AL'

const Alabama = ({
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
      d="M671.4,359.17L651.489,361.17L637.528,362.232L625.5500000000001,362.98100000000005L625.667,363.40900000000005L627.38,365.46900000000005L626.925,378.92600000000004L626.896,389.73800000000006L626.5179999999999,401.79800000000006L626.1399999999999,413.85800000000006L625.4549999999999,431.51500000000004L627.334,445.94200000000006L629.8389999999999,464.33600000000007L630.4219999999999,463.94700000000006L635.2839999999999,464.9150000000001L635.2819999999999,462.38700000000006L635.939,458.0690000000001L637.9219999999999,457.7560000000001L638.7799999999999,460.05000000000007L638.2759999999998,461.56700000000006L639.0549999999998,462.73300000000006L641.7399999999998,464.98600000000005L641.5079999999998,466.65900000000005L645.3569999999999,465.60600000000005L645.5509999999998,464.63400000000007L647.2999999999998,463.46600000000007L648.6599999999999,461.7150000000001L648.1539999999999,460.7050000000001L647.5299999999999,459.2670000000001L648.0729999999999,457.0500000000001L646.0489999999999,455.53500000000014L643.4019999999998,452.58200000000016L643.9829999999998,449.6650000000002L662.6109999999999,448.0150000000002L674.6309999999999,446.5660000000002L692.2859999999998,444.7230000000002L691.9729999999998,442.7400000000002L690.1049999999998,440.9530000000002L689.7919999999998,438.9700000000002L690.2539999999998,433.0970000000002L689.7859999999998,431.3860000000002L688.6179999999998,429.63700000000017L687.6429999999998,426.9150000000002L688.8449999999998,422.9050000000002L688.7259999999998,419.9490000000002L689.0749999999998,418.7040000000002L691.1349999999998,416.99100000000016L689.6559999999997,415.78700000000015L689.2259999999998,413.37600000000015L688.4849999999998,411.51000000000016L686.7719999999998,409.45000000000016L685.4079999999998,406.14500000000015L684.7459999999998,405.40700000000015L683.7709999999997,402.6850000000002L679.0509999999997,386.27700000000016L675.7739999999997,374.30100000000016L672.8099999999996,364.30800000000016L671.4049999999996,359.17600000000016Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="485.355"
        y="300.105"
        transform="matrix(0.741,0,0,0.741,125.7069,77.7272)"
        textY="7.503437500000018"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

Alabama.propTypes = {
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

Alabama.defaultProps = {
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

export default Alabama