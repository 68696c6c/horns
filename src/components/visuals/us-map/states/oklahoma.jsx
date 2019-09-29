/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import MapState, {
  getMapLabelClassName,
  getMapStateClassName,
  MapStateLabel,
} from './_map-state'

const abbr = 'OK'

const Oklahoma = ({ showLabel }) => (
  <>
    <MapState
      d="M510.33,335.9L510.359,325.08799999999997L497.99199999999996,325.25399999999996L486.05199999999996,325.30299999999994L465.98199999999997,325.04799999999994L449.99699999999996,324.59499999999997L434.01199999999994,324.142L425.8829999999999,323.838L409.7829999999999,322.95700000000005L393.6829999999999,322.0760000000001L381.0819999999999,321.38700000000006L364.5909999999999,319.92300000000006L363.7059999999999,330.97300000000007L384.5529999999999,332.39400000000006L403.0279999999999,333.5450000000001L416.0579999999999,334.1170000000001L415.7159999999999,342.9460000000001L414.9119999999999,357.6480000000001L414.03399999999993,376.2780000000001L416.13399999999996,376.3930000000001L419.55999999999995,380.5130000000001L421.97099999999995,380.0830000000001L424.73299999999995,380.9360000000001L424.965,379.2630000000001L427.14399999999995,380.5060000000001L428.31199999999995,382.2550000000001L428.19699999999995,384.35500000000013L431.38699999999994,385.0910000000001L432.51499999999993,385.0120000000001L433.87699999999995,385.7890000000001L436.63899999999995,386.6420000000001L439.32199999999995,386.36700000000013L440.7629999999999,388.27100000000013L442.3179999999999,388.0750000000001L443.52199999999993,386.5960000000001L446.01199999999994,387.2940000000001L447.99499999999995,386.9810000000001L447.99699999999996,389.5090000000001L450.604,390.6350000000001L450.37199999999996,392.3080000000001L451.734,393.0850000000001L453.17199999999997,392.46100000000007L455.38699999999994,390.47600000000006L457.05999999999995,390.7080000000001L457.52799999999996,392.4190000000001L459.20099999999996,392.6510000000001L459.55199999999996,393.93400000000014L460.95199999999994,394.01100000000014L463.9819999999999,392.49200000000013L464.6439999999999,393.23000000000013L463.98399999999987,395.02000000000015L464.76299999999986,396.18600000000015L465.89099999999985,396.10700000000014L466.39499999999987,394.59000000000015L469.2309999999999,391.51500000000016L470.3989999999999,393.2640000000002L473.31599999999986,393.8450000000002L474.09299999999985,392.4830000000002L475.41699999999986,393.96000000000015L476.89599999999984,395.16400000000016L478.2959999999998,395.24100000000016L479.7369999999998,397.14500000000015L480.5139999999998,395.78300000000013L482.34199999999976,395.7430000000001L483.11899999999974,394.3810000000001L485.10199999999975,394.0680000000001L487.12199999999973,393.0550000000001L488.48399999999975,393.8320000000001L490.03899999999976,393.6360000000001L493.22699999999975,391.8440000000001L494.27799999999974,393.16500000000013L497.62299999999976,393.62900000000013L499.21699999999976,392.7330000000001L499.99399999999974,391.3710000000001L503.26299999999975,393.23500000000007L504.50799999999975,393.58400000000006L506.49299999999977,395.79900000000004L508.70999999999975,396.34200000000004L512.6789999999997,398.244L513.3789999999998,398.28200000000004L513.4869999999997,388.598L513.8209999999997,369.65700000000004L513.7739999999997,360.24500000000006L512.4439999999996,351.18500000000006L510.3309999999996,335.90200000000004Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="340.86"
        y="266.76"
        transform="matrix(0.741,0,0,0.741,88.2827,69.0908)"
        textY="8.095937499999991"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </>
)

Oklahoma.propTypes = {
  showLabel: PropTypes.bool,
}

Oklahoma.defaultProps = {
  showLabel: true,
}

export default Oklahoma