/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'NV'

const Nevada = ({
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
      d="M174.65,292.82L176.741,282.823L180.032,266.291L184.215,246.297L187.662,229.493L190.217,216.15099999999998L194.4,196.15699999999998L196.491,186.15999999999997L178.714,182.51999999999998L169.962,180.777L149.30599999999998,175.856L134.75699999999998,172.25199999999998L123.12599999999998,169.23199999999997L111.22199999999998,166.05299999999997L102.50799999999998,163.60999999999996L99.48799999999999,175.24099999999996L95.26199999999999,190.87899999999996L93.16799999999999,198.34799999999996L88.66999999999999,213.83099999999996L85.29799999999999,226.70699999999997L93.82699999999998,240.23399999999995L99.94099999999999,249.13499999999996L108.898,262.54499999999996L118.20599999999999,277.23799999999994L127.942,291.81399999999996L134.56199999999998,301.72599999999994L142.819,315.09799999999996L147.492,322.09399999999994L155.43599999999998,333.4819999999999L156.01699999999997,330.56499999999994L157.33799999999997,329.51399999999995L157.80199999999996,326.1689999999999L157.17599999999996,322.2029999999999L158.14599999999996,319.8689999999999L157.83299999999997,317.8859999999999L157.94799999999998,315.7859999999999L158.84199999999998,314.85199999999986L157.867,312.1299999999999L158.837,309.7959999999999L162.10299999999998,309.1319999999999L164.01,310.2189999999999L165.41,310.2959999999999L167.085,313.05599999999987L168.913,313.01599999999985L171.205,309.6299999999998L174.65200000000002,292.82599999999985Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="103.74"
        y="174.135"
        transform="matrix(0.741,0,0,0.741,26.8687,45.101)"
        textY="8.095937499999991"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Nevada.propTypes = {
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

Nevada.defaultProps = {
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

export default Nevada
