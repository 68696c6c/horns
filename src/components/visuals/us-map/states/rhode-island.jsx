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

const abbr = 'RI'

const RhodeIsland = ({
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
      d="M887.59,173.12L886.7710000000001,170.126L885.3710000000001,170.049L886.4240000000001,173.898L887.5900000000001,173.119ZM884.553,169.584L882.374,168.341L881.089,166.16400000000002L880.6590000000001,163.75300000000001L874.0880000000001,165.781L876.897,176.046L877.4820000000001,178.185L877.2120000000001,180.558L880.9830000000001,178.37699999999998L882.6940000000001,177.909L882.964,175.536L882.1060000000001,173.242L882.4530000000001,169.469L884.5530000000001,169.584Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <MapStateLabelBackground
          x="668.112"
          y="187.909015625"
          transform="matrix(0.741,0,0,0.741,178.8685,52.3939)"
          className={getMapLabelBGClassName(abbr)}
        />
        <MapStateLabel
          x="690.612"
          y="202.293"
          transform="matrix(0.741,0,0,0.741,178.8685,52.3939)"
          textY="7.503937500000006"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </MapStateLabel>
      </>
    )}
  </MapStateWrapper>
)

RhodeIsland.propTypes = {
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

RhodeIsland.defaultProps = {
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

export default RhodeIsland
