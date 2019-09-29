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

const abbr = 'VT'

const Vermont = ({
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
      d="M859.61,153.19L857.508,150.547L857.9340000000001,147.902L857.4230000000001,141.83499999999998L857.6170000000001,140.86299999999997L856.3290000000001,136.15799999999996L857.027,133.66799999999995L856.714,131.68499999999995L857.6460000000001,130.05099999999996L857.488,127.79499999999996L858.3770000000001,121.80499999999996L857.5580000000001,118.81099999999996L858.0620000000001,117.29399999999997L860.0820000000001,116.28099999999996L862.1800000000001,113.86799999999997L863.2270000000001,110.13299999999997L861.1250000000001,107.48999999999997L862.1720000000001,103.75499999999997L861.4700000000001,101.18899999999996L849.4940000000001,104.46599999999997L833.8240000000002,108.52399999999997L834.3330000000002,112.06299999999997L835.2670000000002,112.95699999999998L835.2310000000002,116.18499999999997L836.1270000000002,117.77899999999997L837.5680000000002,119.68299999999996L837.5700000000002,122.21099999999997L838.2720000000002,124.77699999999997L837.8060000000002,125.59399999999997L837.6150000000001,129.09399999999997L838.2770000000002,129.83199999999997L840.2260000000001,135.27499999999998L839.9560000000001,137.64799999999997L842.0560000000002,137.76299999999998L843.1070000000002,139.08399999999997L847.0890000000002,156.15399999999997L859.6100000000001,153.18699999999995Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="631.803"
          y="165.67901562499998"
          transform="matrix(0.741,0,0,0.741,169.4645,46.6363)"
          className={getMapLabelBGClassName(abbr)}
        />
        <MapStateLabel
          x="654.303"
          y="180.063"
          transform="matrix(0.741,0,0,0.741,169.4645,46.6363)"
          textY="7.492687499999988"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </MapStateWrapper>
)

Vermont.propTypes = {
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

Vermont.defaultProps = {
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

export default Vermont
