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

const abbr = 'OR'

const Oregon = ({
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
      d="M80.26,62.12L79.25,62.626L77.188,61.811L76.058,59.362L74.19200000000001,60.103L70.302,59.329L68.97800000000001,57.852000000000004L68.825,60.652L68.282,62.869L66.999,63.22L67.039,65.048L65.796,67.227L66.22600000000001,69.638L65.02200000000002,71.117L64.05200000000002,73.45100000000001L64.55800000000002,74.46100000000001L63.081000000000024,75.78500000000001L63.160000000000025,76.91300000000001L62.15000000000003,79.94700000000002L59.19900000000003,85.12200000000001L58.578000000000024,86.21200000000002L57.065000000000026,90.76400000000001L50.77700000000003,105.58700000000002L49.53400000000003,107.76600000000002L45.806000000000026,114.30300000000003L45.029000000000025,115.66500000000002L43.629000000000026,115.58800000000002L40.48400000000002,121.73600000000002L37.92000000000002,124.96600000000002L37.65000000000002,127.33900000000003L38.66300000000002,129.35900000000004L38.12000000000002,131.57600000000005L37.34300000000002,132.93800000000005L36.179000000000016,136.24500000000003L36.18100000000002,138.77300000000002L35.63800000000002,140.99000000000004L37.15700000000002,144.02000000000004L49.56700000000002,148.21000000000004L61.86000000000002,151.97200000000004L69.87000000000002,154.37600000000003L82.16300000000001,158.13800000000003L90.33200000000001,160.27000000000004L102.50800000000001,163.60400000000004L111.22200000000001,166.04700000000005L123.126,169.22600000000006L134.757,172.24600000000007L149.306,175.85000000000008L154.03400000000002,156.1670000000001L158.25700000000003,137.99700000000007L161.05300000000003,133.09400000000008L160.70200000000003,131.8110000000001L162.217,129.7870000000001L161.204,127.7670000000001L158.32500000000002,126.48600000000009L159.25500000000002,122.32400000000008L161.15900000000002,120.88300000000008L163.45100000000002,117.49700000000009L165.04500000000002,116.60100000000008L166.98800000000003,114.46000000000008L167.68600000000004,111.97000000000008L169.90100000000004,109.98500000000008L171.80300000000003,106.01600000000009L175.68800000000002,101.73500000000008L176.192,100.21800000000009L175.762,97.80700000000009L173.777,95.59200000000008L172.68699999999998,94.97100000000009L171.791,93.3770000000001L171.906,91.2770000000001L156.385,87.4790000000001L140.315,83.3700000000001L138.721,84.2660000000001L134.986,83.21900000000011L131.213,82.87200000000011L130.047,83.65100000000011L125.729,82.99400000000011L122.618,83.38600000000011L120.752,84.12700000000011L116.979,83.78000000000011L115.072,82.69300000000011L114.217,82.9270000000001L110.406,83.2800000000001L108.34400000000001,82.4650000000001L106.789,82.6610000000001L105.231,80.32900000000011L101.107,78.69900000000011L97.645,77.8080000000001L94.651,78.62700000000011L89.71199999999999,79.05900000000011L86.05399999999999,76.61200000000011L84.26399999999998,75.95200000000011L83.48499999999999,74.78600000000012L84.41299999999998,68.09600000000012L83.74899999999998,64.83000000000011L81.49099999999999,62.460000000000115L80.24599999999998,62.11100000000012Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="74.1"
        y="88.92"
        transform="matrix(0.741,0,0,0.741,19.1919,23.0303)"
        textY="7.505937500000002"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Oregon.propTypes = {
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

Oregon.defaultProps = {
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

export default Oregon
