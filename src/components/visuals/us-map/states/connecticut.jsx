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

const abbr = 'CT'

const Connecticut = ({
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
      d="M874.09,165.78L873.9730000000001,165.352L858.883,169.02100000000002L847.6460000000001,171.63700000000003L850.5380000000001,188.08600000000004L852.0170000000002,189.29000000000005L848.5980000000002,192.75400000000005L850.4660000000002,194.54100000000005L851.6320000000003,193.76200000000006L857.2280000000003,189.01200000000006L862.9030000000002,185.39000000000004L864.4580000000002,185.19400000000005L865.3520000000002,184.26000000000005L867.0250000000002,184.49200000000005L868.1910000000003,183.71300000000005L870.3300000000003,183.12800000000004L871.8070000000002,181.80400000000003L873.2070000000002,181.88100000000003L876.3950000000002,180.08900000000003L877.2120000000002,180.55500000000004L877.4820000000002,178.18200000000004L876.8970000000002,176.04300000000003L874.0880000000002,165.77800000000002Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="668.112"
          y="165.67901562499998"
          transform="matrix(0.741,0,0,0.741,178.8685,46.6363)"
          className={getMapLabelBGClassName(abbr)}
        />
        <MapStateLabel
          x="690.612"
          y="180.063"
          transform="matrix(0.741,0,0,0.741,178.8685,46.6363)"
          textY="7.492687499999988"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </MapStateWrapper>
)

Connecticut.propTypes = {
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

Connecticut.defaultProps = {
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

export default Connecticut
