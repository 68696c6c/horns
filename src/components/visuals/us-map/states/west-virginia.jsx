/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'WV'

const WestVirginia = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M761.64,242.07L744.49,244.924L741.089,224.937L738.6020000000001,226.76700000000002L740.5870000000001,228.98200000000003L740.0830000000001,230.49900000000002L740.979,232.09300000000002L740.3190000000001,233.883L739.662,238.20100000000002L739.7810000000001,241.157L738.7710000000001,244.191L738.8520000000001,247.847L736.3260000000001,250.377L735.2390000000001,252.28400000000002L733.7620000000002,253.60800000000003L731.1570000000002,255.01000000000002L729.6400000000001,254.50600000000003L728.5910000000001,255.71300000000002L728.5140000000001,257.113L726.8030000000001,257.581L725.988,259.64300000000003L726.109,265.127L725.099,265.633L722.1030000000001,263.924L721.365,264.58599999999996L719.697,269.40999999999997L720.323,273.376L719.04,273.727L718.5759999999999,277.072L715.699,278.319L714.299,278.242L715.0799999999999,281.93600000000004L714.5369999999999,284.153L717.535,288.39000000000004L718.742,289.439L719.366,290.877L720.845,292.081L721.624,293.247L723.5310000000001,294.334L725.0100000000001,295.538L727.8100000000001,295.69100000000003L727.5780000000001,297.36400000000003L728.7460000000001,299.11300000000006L731.0420000000001,300.7830000000001L731.7420000000002,300.8210000000001L734.3490000000002,301.94700000000006L735.9050000000002,301.75100000000003L738.8970000000002,298.40400000000005L741.1930000000002,300.07400000000007L742.7870000000003,299.17800000000005L745.9360000000003,298.08600000000007L746.9850000000002,296.8790000000001L747.2170000000002,295.2060000000001L749.1620000000003,295.5930000000001L752.2330000000003,293.3740000000001L753.7500000000003,293.8780000000001L756.3930000000004,291.7760000000001L756.0420000000004,290.4930000000001L757.0910000000003,289.2860000000001L755.7670000000004,287.80900000000014L756.6200000000003,285.04700000000014L759.4160000000004,280.1440000000001L760.1900000000004,276.25400000000013L762.0160000000004,273.68600000000015L761.9760000000005,271.8580000000002L763.0630000000004,269.9510000000002L763.2540000000005,266.4510000000002L764.7710000000005,266.9550000000002L765.9390000000005,268.70400000000024L769.7120000000006,269.0510000000002L770.9550000000006,266.87200000000024L771.3810000000007,264.22700000000026L773.2040000000006,259.13100000000026L775.2660000000006,259.94600000000025L776.8580000000006,256.5220000000003L778.1410000000006,256.1710000000003L781.4030000000006,250.45100000000028L780.9730000000006,248.04000000000028L781.5940000000006,246.95000000000027L781.7470000000006,244.15000000000026L791.1630000000007,249.16000000000025L791.8200000000007,244.84200000000024L791.6240000000007,243.28700000000023L790.3000000000008,241.81000000000023L789.2100000000007,241.18900000000022L788.1970000000007,239.1690000000002L786.7590000000007,239.7930000000002L783.7630000000007,238.0840000000002L782.4800000000007,238.4350000000002L781.5480000000007,240.0690000000002L779.2540000000007,240.9270000000002L778.8670000000008,242.87200000000018L777.1560000000007,243.34000000000017L774.2390000000007,242.75900000000019L773.4600000000007,241.5930000000002L772.1790000000008,244.47200000000018L771.0920000000008,246.3790000000002L769.3020000000008,245.7190000000002L767.9040000000008,248.1700000000002L763.4360000000008,252.84100000000018L761.6380000000008,242.07000000000016Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="551.304"
        y="200.07"
        transform="matrix(0.741,0,0,0.741,142.7877,51.8181)"
        textY="7.499687499999993"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

WestVirginia.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

WestVirginia.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default WestVirginia
