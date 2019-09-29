/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import MapState, {
  getMapLabelClassName,
  getMapStateClassName,
  MapStateLabel,
} from './_map-state'

const abbr = 'UT'

const Utah = ({ showLabel }) => (
  <>
    <MapState
      d="M244.03,195.22L223.03,191.544L208.443,188.64000000000001L196.501,186.161L194.41,196.15800000000002L190.227,216.15200000000002L187.672,229.49400000000003L184.225,246.29800000000003L180.042,266.29200000000003L176.751,282.824L174.66,292.821L185.357,294.951L201.189,298.204L209.124,299.481L222.466,302.036L235.96300000000002,304.319L246.54300000000003,306.021L260.196,308.031L261.62600000000003,297.296L264.48800000000006,278.353L266.3430000000001,264.973L269.0510000000001,248.83300000000003L270.9060000000001,235.45300000000003L272.9160000000001,221.80000000000004L262.6080000000001,220.25300000000004L246.31000000000012,217.81700000000004L240.4750000000001,216.65500000000003L244.0340000000001,195.22300000000004Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="165.243"
        y="192.66"
        transform="matrix(0.741,0,0,0.741,42.7979,49.8989)"
        textY="8.097499999999997"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </>
)

Utah.propTypes = {
  showLabel: PropTypes.bool,
}

Utah.defaultProps = {
  showLabel: true,
}

export default Utah
