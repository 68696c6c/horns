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

const abbr = 'MI'

const Michigan = ({
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
      d="M647.05,129.07L647.516,128.253L647.241,125.57L646.386,125.80399999999999L645.65,128.994L647.05,129.071ZM702.747,178.881L701.579,177.132L700.098,173.4L699.317,169.70600000000002L698.421,168.11200000000002L696.782,162.12400000000002L695.4970000000001,159.94700000000003L693.3560000000001,158.00400000000002L691.2940000000001,157.18900000000002L688.9620000000001,158.747L686.5130000000001,159.877L684.8040000000002,162.87300000000002L683.6400000000002,166.18L682.6680000000002,165.98600000000002L681.1150000000002,168.71L677.3800000000002,167.663L676.4460000000003,166.769L676.2100000000003,163.386L676.8700000000002,161.596L677.4910000000002,160.506L679.4740000000002,160.193L680.9510000000001,158.869L681.4910000000001,154.124L683.8230000000001,152.566L684.21,150.621L683.623,145.955L683.855,144.282L682.529,140.282L680.388,138.339L680.62,136.666L682.486,135.92499999999998L681.862,134.487L680.538,133.01L680.732,132.03799999999998L678.708,130.523L675.908,130.37L673.301,129.244L671.667,128.312L669.139,128.31400000000002L667.037,125.67100000000002L665.52,125.16700000000002L663.109,125.59700000000002L661.202,124.51000000000002L658.168,123.50000000000001L655.563,124.90200000000002L653.737,127.47000000000001L653.7389999999999,129.99800000000002L655.3349999999999,131.63000000000002L655.2579999999999,133.03000000000003L653.002,133.18800000000002L650.942,134.901L650.127,136.96300000000002L650.674,139.80200000000002L650.327,143.57500000000002L648.576,142.215L648.229,145.988L646.984,145.639L647.527,143.422L647.0590000000001,141.71099999999998L647.5250000000001,140.89399999999998L647.0570000000001,139.18299999999996L644.8420000000001,141.16799999999998L643.7160000000001,143.77499999999998L642.3540000000002,142.998L641.4220000000001,144.63199999999998L640.7220000000001,144.59399999999997L640.2200000000001,148.63899999999995L638.5090000000001,149.10699999999994L637.8880000000001,150.19699999999995L638.4730000000002,152.33599999999996L638.7880000000002,156.84699999999995L636.6920000000002,161.78799999999995L635.3320000000002,163.53899999999996L636.7340000000003,166.14399999999995L637.0870000000002,169.95499999999996L636.2720000000002,172.01699999999997L636.0400000000002,173.68999999999997L636.7810000000002,175.55599999999998L641.3390000000002,184.65599999999998L642.5860000000001,187.533L643.1350000000001,192.89999999999998L642.9840000000002,198.22799999999998L641.5880000000002,203.207L640.0350000000002,205.93099999999998L638.6780000000002,210.20999999999998L637.1250000000002,212.93399999999997L635.0650000000003,214.64699999999996L644.5150000000003,213.89999999999995L659.6450000000003,212.05899999999994L668.1230000000003,211.11799999999994L668.2020000000002,212.24599999999992L676.4070000000003,211.14999999999992L689.8620000000003,209.0769999999999L690.2490000000003,207.13199999999992L692.1510000000003,203.16299999999993L693.1610000000003,202.65699999999993L693.5840000000003,197.48399999999992L693.7780000000002,196.51199999999992L694.7100000000003,194.87799999999993L697.1970000000002,193.04799999999992L696.9610000000002,189.6649999999999L697.4650000000003,188.1479999999999L698.9800000000002,186.1239999999999L700.3420000000002,186.9009999999999L700.5000000000002,189.1569999999999L701.5100000000002,188.6509999999999L702.4420000000002,187.0169999999999L702.5950000000003,184.2169999999999L702.0890000000003,183.2069999999999L702.7460000000003,178.8889999999999ZM675.627,115.044L673.6819999999999,114.657L673.7609999999999,115.785L671.8179999999999,117.926L673.7629999999999,118.313L676.0189999999999,118.155L677.2229999999998,116.676L675.6269999999998,115.044ZM660.5269999999999,108.601L659.6329999999999,109.535L658.0369999999999,107.90299999999999L655.588,109.03299999999999L651.853,107.98599999999999L652.083,103.785L651.577,102.77499999999999L649.049,102.77699999999999L644.6949999999999,105.34799999999998L639.6389999999999,105.35199999999999L636.0619999999999,106.56099999999999L635.2449999999999,106.095L633.4579999999999,107.963L630.2699999999999,109.755L628.4439999999998,112.323L626.5369999999998,111.23599999999999L624.7879999999998,112.404L623.1919999999998,110.77199999999999L621.6369999999998,110.96799999999999L619.3429999999998,111.826L617.5149999999999,111.866L616.7739999999999,110L615.5289999999999,109.651L613.3099999999998,106.58L612.5309999999998,105.414L610.0799999999998,104.016L605.8789999999998,103.786L604.1679999999998,104.254L603.5059999999997,103.516L601.4079999999998,105.929L599.8529999999998,106.125L600.1609999999998,103.052L598.6419999999998,100.022L597.1249999999998,99.518L596.2289999999998,97.924L593.2759999999998,100.57100000000001L592.3059999999998,102.90500000000002L589.8949999999999,103.33500000000002L588.5349999999999,105.08600000000003L586.2029999999999,106.64400000000003L580.0979999999998,107.85500000000003L577.2619999999998,110.93000000000004L571.3529999999998,113.69600000000004L571.5869999999999,114.55100000000004L574.0769999999999,115.24900000000004L575.9859999999999,118.86400000000003L591.3899999999999,122.23400000000004L596.0589999999999,124.17500000000004L598.9759999999999,124.75600000000004L600.4139999999999,124.13200000000005L603.6039999999999,124.86800000000005L605.977,125.13800000000005L607.067,125.75900000000004L607.886,128.75300000000004L610.531,129.17800000000005L612.2819999999999,130.53800000000007L612.597,135.04900000000006L611.627,137.38300000000007L615.127,137.57400000000007L614.429,140.06400000000008L614.352,141.46400000000008L616.376,142.97900000000007L617.036,141.18900000000008L619.7149999999999,135.85900000000007L620.5679999999999,133.09700000000007L621.8489999999998,130.21800000000007L623.0149999999999,129.43900000000008L623.4409999999999,126.79400000000008L624.531,127.41500000000008L624.727,128.9710000000001L626.593,128.23000000000008L628.029,125.07900000000008L629.118,125.70000000000007L630.595,124.37600000000008L630.908,126.35900000000008L629.898,126.86500000000008L628.928,129.19900000000007L630.445,129.70300000000006L631.571,127.09600000000006L633.748,125.81100000000006L635.34,122.38700000000006L637.9060000000001,121.68500000000006L644.128,120.90200000000006L645.681,118.17800000000005L648.792,117.78600000000006L653.927,118.90900000000006L657.0020000000001,121.74500000000006L658.6750000000001,121.97700000000006L658.3620000000001,119.99400000000006L659.0600000000001,117.50400000000006L662.4050000000001,117.96800000000006L668.9780000000001,118.46800000000006L670.844,117.72700000000006L668.431,115.62900000000006L668.508,114.22900000000006L664.618,113.45500000000006L665.5120000000001,112.52100000000006L664.927,110.38200000000006L666.755,110.34200000000006L665.742,108.32200000000006L666.1289999999999,106.37700000000007L664.8839999999999,106.02800000000006L663.1349999999999,107.19600000000007L661.3069999999999,107.23600000000008L660.5299999999999,108.59800000000007ZM609.876,92.349L608.669,91.3L605.286,91.536L602.992,92.394L599.649,94.458L597.513,97.571L597.398,99.67099999999999L598.798,99.74799999999999L600.59,102.93599999999999L602.803,98.42299999999999L607.582,93.207L609.41,93.16699999999999L609.876,92.35ZM597.3779999999999,76.92L595.512,77.661L592.4409999999999,79.88L588.5149999999999,82.33399999999999L587.1939999999998,83.38499999999999L588.3619999999999,85.13399999999999L590.9669999999999,83.73199999999999L591.1609999999998,82.75999999999999L594.7759999999998,80.85099999999998L596.2529999999998,79.52699999999999L597.3789999999998,76.91999999999999Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="491.283"
        y="137.085"
        transform="matrix(0.741,0,0,0.741,127.2423,35.505)"
        textY="7.499062500000008"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Michigan.propTypes = {
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

Michigan.defaultProps = {
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

export default Michigan
