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

const abbr = 'KY'

const Kentucky = ({
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
      d="M714.3,278.24L711.887,276.142L709.8249999999999,275.327L708.189,271.867L705.74,272.997L704.497,275.176L701.5029999999999,275.995L700.2959999999999,274.946L697.3789999999999,274.365L695.5919999999999,276.233L694.6199999999999,276.039L691.7789999999999,274.058L689.8339999999998,273.671L687.8509999999999,273.984L685.9059999999998,273.597L683.3349999999998,269.243L680.8839999999998,267.84499999999997L677.8899999999998,268.664L676.4109999999997,267.46L674.6619999999997,268.628L674.0409999999997,269.71799999999996L674.8199999999997,270.88399999999996L674.1599999999997,272.674L675.8329999999997,272.906L675.5629999999998,275.279L672.5689999999997,276.098L669.6539999999998,278.045L668.2919999999998,277.26800000000003L665.1809999999998,277.66L665.1429999999998,278.36L666.1179999999998,281.082L664.2919999999998,283.65L662.9709999999998,284.70099999999996L662.5449999999997,287.34599999999995L660.7959999999997,288.51399999999995L659.9789999999997,288.04799999999994L658.8919999999997,289.9549999999999L658.8559999999998,293.18299999999994L658.2349999999998,294.27199999999993L656.7969999999998,294.89599999999996L654.1519999999998,294.46999999999997L652.5179999999998,293.53799999999995L652.3219999999998,291.98299999999995L650.0279999999998,292.84099999999995L648.3579999999998,295.13699999999994L648.6709999999998,297.11999999999995L644.9769999999999,297.90099999999995L643.5359999999998,295.99699999999996L639.8819999999998,298.60599999999994L639.3389999999998,300.8229999999999L633.3089999999999,298.10599999999994L631.2889999999999,299.1189999999999L630.5119999999998,300.48099999999994L629.1499999999999,299.70399999999995L627.0109999999999,300.28899999999993L625.3769999999998,299.3569999999999L625.2619999999998,301.45699999999994L624.6409999999998,302.54599999999994L622.9679999999998,302.3139999999999L622.7739999999999,303.2859999999999L621.2209999999999,306.0099999999999L622.7789999999999,308.34199999999987L622.1579999999999,309.43199999999985L619.1639999999999,310.25099999999986L616.4419999999999,311.2259999999999L615.7819999999999,313.0159999999999L615.978,314.5709999999999L617.419,316.4749999999999L616.6039999999999,318.5369999999999L613.959,318.11099999999993L609.0179999999999,316.01499999999993L606.607,316.44499999999994L604.7429999999999,319.71399999999994L605.756,321.7339999999999L605.3299999999999,324.3789999999999L605.7599999999999,326.7899999999999L604.7499999999999,329.8239999999999L604.0119999999998,330.4859999999999L602.1049999999998,329.3989999999999L601.0949999999998,332.4329999999999L616.1849999999998,331.29199999999986L625.3629999999998,330.3899999999999L624.7369999999999,326.42399999999986L627.9649999999998,326.45999999999987L628.7819999999998,326.9259999999999L641.7709999999998,325.6699999999999L652.5039999999998,324.5719999999999L659.5439999999998,324.2549999999999L670.8219999999998,323.46699999999987L675.9159999999998,322.76299999999986L684.6659999999998,321.97799999999984L700.1829999999999,320.71999999999986L701.3489999999999,319.94099999999986L703.8359999999999,318.1109999999999L705.3909999999998,317.91499999999985L708.1509999999998,316.23999999999984L710.0169999999998,315.49899999999985L710.6769999999998,313.70899999999983L713.8649999999998,311.91699999999986L714.0969999999998,310.24399999999986L716.1569999999997,308.53099999999984L716.3889999999997,306.85799999999983L717.4379999999996,305.65099999999984L721.8299999999997,302.3799999999998L727.8129999999996,295.68499999999983L725.0129999999997,295.5319999999998L723.5339999999997,294.3279999999998L721.6269999999996,293.2409999999998L720.8479999999996,292.0749999999998L719.3689999999996,290.8709999999998L718.7449999999995,289.4329999999998L717.5379999999996,288.38399999999984L714.5399999999995,284.1469999999998L715.0829999999995,281.92999999999984L714.3019999999996,278.2359999999998Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="503.88"
        y="222.3"
        transform="matrix(0.741,0,0,0.741,130.5049,57.5757)"
        textY="7.495312500000011"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Kentucky.propTypes = {
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

Kentucky.defaultProps = {
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

export default Kentucky
