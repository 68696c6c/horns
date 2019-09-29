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

const abbr = 'NJ'

const NewJersey = ({ showLabel }) => (
  <>
    <MapState
      d="M833.03,220.69L831.866,223.99699999999999L829.261,225.39899999999997L827.4739999999999,227.26699999999997L826.8929999999999,230.18399999999997L827.5189999999999,234.14999999999998L831.06,236.17L832.8499999999999,236.82999999999998L835.146,238.49999999999997L837.012,237.75899999999996L839.7739999999999,238.61199999999997L839.5059999999999,243.51299999999998L840.9439999999998,242.88899999999998L842.4969999999998,240.165L843.1159999999999,236.548L844.0479999999999,234.91400000000002L844.9009999999998,232.15200000000002L846.2579999999998,227.87300000000002L847.8899999999998,226.27700000000002L848.7049999999998,224.215L848.1989999999998,223.205L848.4689999999998,220.83200000000002L848.1159999999999,217.02100000000002L848.8159999999999,217.05900000000003L848.4989999999999,210.01900000000003L847.3309999999999,208.27000000000004L844.3749999999999,208.38900000000004L842.7409999999999,207.45700000000005L843.3219999999999,204.54000000000005L844.2159999999999,203.60600000000005L844.9159999999999,203.64400000000006L845.848,202.01000000000008L846.544,196.99000000000007L846.193,195.70700000000008L831.838,191.13000000000008L829.895,193.27100000000007L829.78,195.37100000000007L828.188,198.79500000000007L826.828,200.54600000000008L828.424,202.17800000000008L828.154,204.55100000000007L826.833,205.60200000000006L827.886,209.45100000000005L829.442,209.25500000000005L830.3,211.54900000000006L837.0709999999999,216.13200000000006L835.7109999999999,217.88300000000007L833.0299999999999,220.68600000000006Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="631.803"
          y="187.909015625"
          transform="matrix(0.741,0,0,0.741,169.4645,52.3939)"
        />
        <MapStateLabel
          x="654.303"
          y="202.293"
          transform="matrix(0.741,0,0,0.741,169.4645,52.3939)"
          textY="7.503937500000006"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </>
)

NewJersey.propTypes = {
  showLabel: PropTypes.bool,
}

NewJersey.defaultProps = {
  showLabel: true,
}

export default NewJersey