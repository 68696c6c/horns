/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import MapState, {
  MapStateWrapper,
  MapStateLabel,
  getMapStateClassName,
  getMapLabelClassName,
} from '../map-state'

const abbr = 'TN'

const Tennessee = ({
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
      d="M701.35,319.94L700.184,320.719L684.6669999999999,321.977L675.9169999999999,322.762L670.8229999999999,323.466L659.5449999999998,324.254L652.5049999999999,324.571L641.7719999999999,325.66900000000004L628.7829999999999,326.925L627.9659999999999,326.459L624.7379999999999,326.423L625.3639999999999,330.389L616.1859999999999,331.291L601.0959999999999,332.432L599.9679999999998,332.511L598.8399999999998,332.59000000000003L599.5419999999998,335.156L598.0649999999998,336.48L598.6889999999999,337.918L596.7059999999999,338.231L598.4189999999999,340.291L597.5249999999999,341.225L596.5549999999998,343.559L597.7229999999998,345.30800000000005L596.1679999999999,345.5040000000001L597.0639999999999,347.09800000000007L596.0149999999999,348.30500000000006L593.1379999999999,349.5520000000001L593.8789999999999,351.41800000000006L593.2579999999999,352.50800000000004L594.0369999999999,353.67400000000004L592.1709999999999,354.415L592.0939999999999,355.815L590.89,357.294L590.62,359.667L591.361,361.53299999999996L591.129,363.20599999999996L589.884,362.85699999999997L589.069,364.919L587.7479999999999,365.96999999999997L606.4929999999999,364.748L625.6629999999999,363.409L625.5459999999999,362.981L637.5239999999999,362.23199999999997L651.4849999999999,361.16999999999996L671.396,359.16999999999996L684.54,357.64199999999994L694.3009999999999,356.34999999999997L694.141,351.566L694.762,350.476L697.4449999999999,350.201L698.222,348.839L698.648,346.194L700.591,344.053L703.196,342.651L707.162,342.02500000000003L711.162,338.17100000000005L714.077,336.22400000000005L715.632,336.028L716.834,332.01800000000003L718.079,332.367L718.583,330.85L720.915,329.29200000000003L722.083,331.04100000000005L723.521,330.41700000000003L724.919,327.966L728.107,326.17400000000004L730.169,326.98900000000003L731.063,326.055L732.382,322.476L735.218,319.401L735.216,316.873L736.0310000000001,314.811L731.792,315.281L731.054,315.943L715.771,318.056L701.3439999999999,319.935Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="485.355"
        y="251.94"
        transform="matrix(0.741,0,0,0.741,125.7069,65.2525)"
        textY="7.494687499999998"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

Tennessee.propTypes = {
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

Tennessee.defaultProps = {
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

export default Tennessee
