/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

import MapState, {
  MapStateLabelBackground,
  MapStateLabel,
  getMapStateClassName,
  getMapLabelClassName,
} from './_map-state'

const abbr = 'MD'

const Maryland = ({ showLabel }) => (
  <>
    <MapState
      d="M822.15,229.65L812.6229999999999,231.797L793.7249999999999,235.817L778.675,238.786L761.645,242.068L763.443,252.839L767.911,248.168L769.309,245.717L771.0989999999999,246.377L772.1859999999999,244.47L773.4669999999999,241.591L774.2459999999999,242.757L777.1629999999999,243.338L778.8739999999999,242.87L779.2609999999999,240.925L781.5549999999998,240.067L782.4869999999999,238.43300000000002L783.7699999999999,238.08200000000002L786.7659999999998,239.79100000000003L788.2039999999998,239.16700000000003L789.2169999999999,241.18700000000004L790.3069999999999,241.80800000000005L791.6309999999999,243.28500000000005L791.8269999999999,244.84000000000006L795.0549999999998,244.87600000000006L796.6889999999999,245.80800000000005L796.6909999999998,248.33600000000004L798.3249999999998,249.26800000000003L800.8529999999998,249.26600000000002L801.6319999999998,250.43200000000002L803.6939999999998,251.247L804.8979999999998,249.768L807.6219999999998,251.321L805.9519999999999,253.617L806.1099999999999,255.873L805.2949999999998,257.935L804.2849999999999,258.441L803.4319999999999,261.203L804.0169999999999,263.342L804.9889999999999,263.536L807.5149999999999,261.00600000000003L808.7999999999998,263.18300000000005L810.0069999999998,264.232L813.1969999999999,264.968L815.6079999999998,264.538L818.7589999999998,265.974L820.6659999999998,267.061L820.6259999999999,265.233L819.3019999999999,263.75600000000003L818.2889999999999,261.73600000000005L818.3659999999999,260.33600000000007L815.8359999999999,257.81000000000006L814.6659999999999,253.53300000000007L814.16,252.52300000000008L814.896,249.33300000000008L814.2719999999999,247.8950000000001L815.438,247.1160000000001L813.684,243.2280000000001L814.3439999999999,241.4380000000001L813.41,240.5440000000001L816.87,238.9080000000001L818.851,236.0670000000001L819.747,237.6610000000001L817.804,239.80200000000008L816.757,243.5370000000001L819.4019999999999,243.96300000000008L819.56,246.21900000000008L818.356,247.6980000000001L819.99,248.63000000000008L819.447,250.8470000000001L817.774,250.6150000000001L817.659,252.7150000000001L819.487,252.6750000000001L821.121,253.60700000000008L819.995,256.2140000000001L820.191,257.7690000000001L819.181,258.2750000000001L821.4390000000001,260.6450000000001L825.291,262.1200000000001L827.0400000000001,260.9520000000001L828.2470000000001,262.0010000000001L827.0430000000001,263.4800000000001L829.1430000000001,263.5950000000001L828.6790000000001,266.9400000000001L832.9180000000001,266.4700000000001L832.9560000000001,265.7700000000001L836.9560000000001,264.4440000000001L837.4990000000001,262.2270000000001L837.9270000000001,262.11000000000007L838.3520000000001,259.4650000000001L839.7900000000001,258.84100000000007L840.177,256.8960000000001L839.515,256.1580000000001L839.9019999999999,254.21300000000008L829.675,256.32200000000006L826.632,245.20200000000006L822.612,231.36000000000004L822.144,229.64900000000003Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="668.112"
          y="210.13901562499998"
          transform="matrix(0.741,0,0,0.741,178.8685,58.1515)"
        />
        <MapStateLabel
          x="690.612"
          y="224.523"
          transform="matrix(0.741,0,0,0.741,178.8685,58.1515)"
          textY="7.499562499999996"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </>
)

Maryland.propTypes = {
  showLabel: PropTypes.bool,
}

Maryland.defaultProps = {
  showLabel: true,
}

export default Maryland