/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import {
  getMapStateClassName,
  getMapLabelClassName,
} from '../utils'

const abbr = 'PA'

const Pennsylvania = ({
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
      d="M831.84,191.13L830.5160000000001,189.653L828.2600000000001,189.81099999999998L826.3530000000001,188.724L824.912,186.82L823.976,183.398L823.47,182.388L821.6800000000001,181.728L818.4110000000001,179.864L798.658,184.12L789.987,186.03300000000002L774.937,189.002L762.027,191.386L748.2620000000001,194.004L747.3230000000001,188.054L745.5740000000001,189.222L738.229,195.14000000000001L736.2090000000001,196.15300000000002L739.1800000000001,213.729L741.095,224.92800000000003L744.496,244.91500000000002L761.646,242.061L778.6759999999999,238.779L793.7259999999999,235.81L812.6239999999999,231.79L822.151,229.643L822.928,228.281L824.56,226.685L827.7879999999999,226.721L827.9819999999999,225.749L831.7529999999998,223.56799999999998L831.9849999999998,221.89499999999998L833.0339999999998,220.688L835.7149999999998,217.885L837.0749999999998,216.134L830.3039999999999,211.551L829.4459999999999,209.25699999999998L827.8899999999999,209.45299999999997L826.8369999999999,205.60399999999998L828.1579999999999,204.553L828.4279999999999,202.18L826.8319999999999,200.548L828.1919999999999,198.797L829.7839999999999,195.373L829.8989999999999,193.273L831.8419999999999,191.132Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="582.426"
        y="155.60999999999999"
        transform="matrix(0.741,0,0,0.741,150.8483,40.303)"
        textY="7.492812499999985"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Pennsylvania.propTypes = {
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

Pennsylvania.defaultProps = {
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

export default Pennsylvania
