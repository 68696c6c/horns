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

const abbr = 'NH'

const NewHampshire = ({
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
      d="M884.14,138.66L882.389,137.29999999999998L882.193,135.74499999999998L878.963,133.18099999999998L878.182,129.487L875.764,122.333L870.578,106.742L865.977,93.289L865.473,94.806L863.0999999999999,94.536L861.896,96.015L861.473,101.188L862.175,103.754L861.1279999999999,107.489L863.2299999999999,110.132L862.1829999999999,113.867L860.0849999999999,116.28L858.0649999999999,117.293L857.5609999999999,118.81L858.3799999999999,121.804L857.4909999999999,127.794L857.6489999999999,130.04999999999998L856.7169999999999,131.68399999999997L857.0299999999999,133.66699999999997L856.3319999999999,136.15699999999998L857.6199999999999,140.862L857.4259999999999,141.834L857.9369999999999,147.901L857.5109999999999,150.54600000000002L859.6129999999998,153.18900000000002L877.8129999999999,149.12800000000001L882.7469999999998,143.64000000000001L884.4579999999999,143.17200000000003L884.7659999999998,140.09900000000002L884.1419999999998,138.66100000000003Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <Styled.MapStateLabelBackground
          x="668.112"
          y="121.21901562500001"
          transform="matrix(0.741,0,0,0.741,178.8685,35.1212)"
          className={getMapLabelBGClassName(abbr)}
        />
        <Styled.MapStateLabel
          x="690.612"
          y="135.603"
          transform="matrix(0.741,0,0,0.741,178.8685,35.1212)"
          textY="7.501437500000009"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </Styled.MapStateLabel>
      </>
    )}
  </Styled.MapStateWrapper>
)

NewHampshire.propTypes = {
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

NewHampshire.defaultProps = {
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

export default NewHampshire
