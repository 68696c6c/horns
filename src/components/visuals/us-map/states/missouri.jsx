/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'MO'

const Missouri = ({
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
      d="M562.21,249.98L560.342,248.19299999999998L557.774,246.367L557.15,244.929L553.611,245.438L534.591,246.505L526.852,246.784L519.385,247.218L511.801,247.225L504.217,247.232L490.332,246.894L491.5,248.643L492.553,252.492L496.213,257.467L496.136,258.86699999999996L497.77000000000004,259.799L499.91100000000006,261.74199999999996L501.81800000000004,262.82899999999995L502.98400000000004,262.04999999999995L505.28000000000003,263.71999999999997L504.89300000000003,265.66499999999996L503.92100000000005,265.47099999999995L502.56100000000004,267.2219999999999L501.55100000000004,270.2559999999999L504.74300000000005,273.5199999999999L506.107,276.82499999999993L509.648,278.8449999999999L509.778,294.43999999999994L509.86600000000004,305.67999999999995L510.35,325.08699999999993L510.321,335.89899999999994L524.789,335.84799999999996L539.14,335.36899999999997L558.27,334.72999999999996L572.776,333.97799999999995L588.41,333.14799999999997L590.0849999999999,335.90799999999996L590.1249999999999,337.73599999999993L589.1929999999999,339.36999999999995L587.7549999999999,339.99399999999997L585.7739999999999,342.835L585.1139999999999,344.625L596.5469999999999,343.565L597.5169999999999,341.231L598.411,340.29699999999997L596.698,338.23699999999997L598.6809999999999,337.924L598.0569999999999,336.486L599.5339999999999,335.162L598.8319999999999,332.596L599.9599999999999,332.517L601.088,332.438L602.098,329.404L604.005,330.491L604.743,329.829L605.753,326.795L605.3230000000001,324.384L605.7490000000001,321.73900000000003L604.7770000000002,321.545L603.2980000000001,320.341L602.1320000000001,321.12L598.355,315.717L599.1700000000001,313.655L599.402,311.98199999999997L598,309.37699999999995L597.181,306.3829999999999L595.664,305.8789999999999L594.106,303.5469999999999L592.044,302.7319999999999L590.5649999999999,301.5279999999999L589.0479999999999,301.0239999999999L587.2579999999999,300.36399999999986L583.132,296.20599999999985L582.1189999999999,294.18599999999986L584.098,288.8169999999999L584.913,286.7549999999999L584.755,284.4989999999999L585.842,282.5919999999999L584.7909999999999,281.2709999999999L580.512,279.9139999999999L578.025,281.74399999999986L576.663,280.96699999999987L576.039,279.5289999999999L575.2959999999999,275.1349999999999L573.621,272.3749999999999L569.691,269.7729999999999L568.523,268.0239999999999L564.086,264.4109999999999L562.294,261.2229999999999L562.254,259.3949999999999L561.63,257.95699999999994L560.966,254.69099999999995L561.274,251.61799999999994L562.206,249.98399999999995Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="406.068"
        y="217.113"
        transform="matrix(0.741,0,0,0.741,105.1716,56.2323)"
        textY="8.097375"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Missouri.propTypes = {
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

Missouri.defaultProps = {
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

export default Missouri
