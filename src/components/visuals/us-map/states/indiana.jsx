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

const abbr = 'IN'

const Indiana = ({
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
      d="M668.2,212.24L668.1210000000001,211.11200000000002L659.6430000000001,212.05300000000003L644.5130000000001,213.89400000000003L635.0630000000001,214.64100000000005L632.4200000000001,216.74300000000005L628.2600000000001,218.34100000000007L626.0430000000001,217.79800000000006L624.2920000000001,216.43800000000005L626.1780000000001,238.44800000000004L627.3170000000001,251.00900000000004L628.6540000000001,267.653L627.4500000000002,269.132L627.7630000000001,271.115L626.7140000000002,272.322L628.5060000000002,275.51L629.1680000000002,276.248L629.2080000000002,278.07599999999996L630.3380000000002,280.525L629.6780000000002,282.315L628.7840000000002,283.249L627.9690000000002,285.31100000000004L628.3580000000002,285.89400000000006L626.7260000000002,287.49000000000007L626.9600000000003,288.3450000000001L625.5620000000002,290.7960000000001L623.8510000000002,291.2640000000001L623.0360000000002,293.32600000000014L624.2430000000002,294.3750000000001L622.7660000000002,295.6990000000001L622.4170000000001,296.94400000000013L622.9660000000001,302.31100000000015L624.6390000000001,302.5430000000002L625.2600000000001,301.4540000000002L625.3750000000001,299.35400000000016L627.0090000000001,300.2860000000002L629.1480000000001,299.7010000000002L630.5100000000001,300.4780000000002L631.2870000000001,299.11600000000016L633.3070000000001,298.1030000000002L639.3370000000001,300.82000000000016L639.8800000000001,298.6030000000002L643.5340000000001,295.9940000000002L644.9750000000001,297.8980000000002L648.6690000000001,297.1170000000002L648.3560000000001,295.1340000000002L650.0260000000001,292.8380000000002L652.32,291.9800000000002L652.5160000000001,293.5350000000002L654.1500000000001,294.4670000000002L656.7950000000001,294.8930000000002L658.2330000000001,294.2690000000002L658.854,293.1800000000002L658.89,289.95200000000017L659.977,288.0450000000002L660.794,288.5110000000002L662.543,287.3430000000002L662.969,284.6980000000002L664.2900000000001,283.6470000000002L666.1160000000001,281.07900000000024L665.1410000000001,278.35700000000026L665.1790000000001,277.65700000000027L668.2900000000001,277.26500000000027L669.652,278.04200000000026L672.567,276.09500000000025L675.561,275.27600000000024L675.831,272.90300000000025L674.158,272.6710000000002L674.818,270.8810000000002L674.039,269.7150000000002L674.66,268.6250000000002L672.621,249.41400000000021L670.818,233.58700000000022L669.252,221.14300000000023L668.194,212.23800000000023Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="481.65"
        y="185.25"
        transform="matrix(0.741,0,0,0.741,124.7473,47.9797)"
        textY="7.5"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

Indiana.propTypes = {
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

Indiana.defaultProps = {
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

export default Indiana
