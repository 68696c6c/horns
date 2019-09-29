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

const abbr = 'IA'

const Iowa = ({
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
      d="M572.79,202.95L572.828,202.25L571.698,199.801L567.38,199.14399999999998L566.018,198.367L564.537,194.635L563.5600000000001,189.385L564.841,186.506L564.49,185.223L562.973,184.71900000000002L561.9979999999999,181.997L551.7309999999999,182.27800000000002L536.2529999999999,182.836L520.775,183.394L505.17999999999995,183.524L490.01199999999994,183.537L479.4719999999999,183.663L477.3719999999999,183.548L478.0739999999999,186.114L477.6099999999999,189.459L479.0099999999999,189.536L479.4399999999999,191.947L478.50799999999987,193.581L478.7039999999999,195.136L477.5779999999999,197.743L476.3349999999999,199.922L478.31999999999994,202.137L478.86699999999996,204.976L480.38399999999996,205.48L480.23099999999994,208.28L481.12699999999995,209.874L481.01199999999994,211.974L482.17999999999995,213.72299999999998L482.53099999999995,215.00599999999997L484.12699999999995,216.63799999999998L484.40199999999993,219.32099999999997L485.4529999999999,220.64199999999997L484.9889999999999,223.98699999999997L485.14699999999993,226.24299999999997L487.7149999999999,228.06899999999996L487.28899999999993,230.71399999999997L488.53399999999993,231.06299999999996L487.83599999999996,233.55299999999997L488.49799999999993,234.29099999999997L488.57899999999995,237.94699999999997L488.96799999999996,238.52999999999997L489.16599999999994,242.61299999999997L488.6619999999999,244.12999999999997L490.4129999999999,245.48999999999998L490.3359999999999,246.89L504.2209999999999,247.22799999999998L511.8049999999999,247.22099999999998L519.3889999999999,247.21399999999997L526.8559999999999,246.77999999999997L534.5949999999999,246.50099999999998L553.6149999999999,245.43399999999997L557.1539999999999,244.92499999999998L557.7779999999999,246.36299999999997L560.3459999999999,248.18899999999996L562.2139999999999,249.97599999999997L563.069,249.74199999999996L562.7539999999999,245.23099999999997L566.0589999999999,243.86699999999996L566.9529999999999,242.93299999999996L567.2609999999999,239.85999999999996L569.3589999999998,237.44699999999995L569.2399999999998,234.49099999999996L568.6159999999998,233.05299999999997L566.9819999999997,232.12099999999998L566.7859999999997,230.56599999999997L567.2119999999998,227.92099999999996L568.2609999999997,226.71399999999997L572.9269999999998,226.12699999999998L574.5589999999997,224.53099999999998L577.1249999999998,223.82899999999998L578.6019999999997,222.50499999999997L579.0659999999998,219.15999999999997L580.6979999999998,217.56399999999996L581.5109999999997,212.97399999999996L580.7699999999998,211.10799999999995L576.8399999999998,208.50599999999994L575.8649999999998,205.78399999999993L572.4789999999998,203.49199999999993L572.7899999999998,202.94699999999995Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="389.025"
        y="155.60999999999999"
        transform="matrix(0.741,0,0,0.741,100.7575,40.303)"
        textY="8.094374999999985"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

Iowa.propTypes = {
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

Iowa.defaultProps = {
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

export default Iowa
