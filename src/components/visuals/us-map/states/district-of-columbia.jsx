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

const abbr = 'DC'

const DistrictOfColumbia = ({ showLabel }) => (
  <>
    <MapState
      d="M805.95,253.62L807.62,251.324L804.896,249.77100000000002L803.692,251.25000000000003L804.937,251.59900000000002L805.871,252.49300000000002L805.9499999999999,253.621Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="632.544"
          y="231.628015625"
          transform="matrix(0.741,0,0,0.741,169.6564,63.7171)"
        />
        <MapStateLabel
          x="655.044"
          y="246.012"
          transform="matrix(0.741,0,0,0.741,169.6564,63.7171)"
          textY="7.5041875000000005"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </>
)

DistrictOfColumbia.propTypes = {
  showLabel: PropTypes.bool,
}

DistrictOfColumbia.defaultProps = {
  showLabel: true,
}

export default DistrictOfColumbia
