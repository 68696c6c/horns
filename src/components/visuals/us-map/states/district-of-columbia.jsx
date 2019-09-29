/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import {
  getMapLabelBGClassName,
  getMapStateClassName,
  getMapLabelClassName,
} from '../utils'

const abbr = 'DC'

const DistrictOfColumbia = ({
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
  <Styled.MapStateWrapper
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
    <Styled.MapState
      d="M805.95,253.62L807.62,251.324L804.896,249.77100000000002L803.692,251.25000000000003L804.937,251.59900000000002L805.871,252.49300000000002L805.9499999999999,253.621Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <Styled.MapStateLabelBackground
          x="632.544"
          y="231.628015625"
          transform="matrix(0.741,0,0,0.741,169.6564,63.7171)"
          className={getMapLabelBGClassName(abbr)}
        />
        <Styled.MapStateLabel
          x="655.044"
          y="246.012"
          transform="matrix(0.741,0,0,0.741,169.6564,63.7171)"
          textY="7.5041875000000005"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </Styled.MapStateLabel>
      </>
    )}
  </Styled.MapStateWrapper>
)

DistrictOfColumbia.propTypes = {
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

DistrictOfColumbia.defaultProps = {
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

export default DistrictOfColumbia
