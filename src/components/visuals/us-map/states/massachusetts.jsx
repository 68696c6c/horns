/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import MapState, {
  MapStateWrapper,
  MapStateLabel,
  MapStateLabelBackground,
  getMapLabelBGClassName,
  getMapStateClassName,
  getMapLabelClassName,
} from '../map-state'

const abbr = 'MA'

const Massachusetts = ({
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
      d="M896.22,171.9L895.21,172.406L893.657,175.13L898.089,173.68699999999998L896.221,171.89999999999998ZM884.45,143.169L882.739,143.637L877.8050000000001,149.125L859.605,153.186L847.0840000000001,156.15300000000002L846.825,171.163L847.642,171.62900000000002L858.879,169.013L873.969,165.344L874.086,165.772L880.657,163.744L881.087,166.155L882.372,168.332L884.5509999999999,169.575L885.3679999999999,170.041L886.7679999999999,170.118L887.5869999999999,173.112L888.7149999999999,173.033L890.6189999999999,171.59199999999998L890.2679999999999,170.309L892.1719999999999,168.868L893.6869999999999,166.844L894.8569999999999,171.12099999999998L896.9169999999998,169.408L897.8489999999998,167.774L900.7259999999998,166.527L904.3409999999998,164.618L905.0409999999998,164.656L903.9879999999998,160.80700000000002L902.5899999999998,163.258L899.6749999999998,165.205L896.8749999999999,165.05200000000002L895.0849999999999,164.39200000000002L893.838,161.51500000000001L892.283,161.711L891.736,158.872L888.661,156.036L885.55,156.428L884.305,156.079L884.5749999999999,153.70600000000002L886.2449999999999,151.41000000000003L885.7389999999999,150.40000000000003L888.382,148.29800000000003L887.914,146.58700000000002L886.593,147.638L885.386,146.589L884.4499999999999,143.167Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="668.112"
          y="143.449015625"
          transform="matrix(0.741,0,0,0.741,178.8685,40.8787)"
          className={getMapLabelBGClassName(abbr)}
        />
        <MapStateLabel
          x="690.612"
          y="157.833"
          transform="matrix(0.741,0,0,0.741,178.8685,40.8787)"
          textY="7.497062499999998"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </MapStateWrapper>
)

Massachusetts.propTypes = {
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

Massachusetts.defaultProps = {
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

export default Massachusetts
