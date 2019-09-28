/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import MapState, {
  getMapLabelClassName,
  getMapStateClassName,
  MapStateLabel,
} from './_map-state'

const abbr = 'SD'

const SouthDakota = () => (
  <>
    <MapState
      d="M478.61,130.11L464.298,129.889L449.986,129.668L435.829,129.175L421.555,128.25400000000002L414.555,127.87100000000002L400.555,127.10500000000002L389.781,126.37500000000001L372.16200000000003,124.99000000000001L364.34400000000005,124.141L362.65100000000007,144.833L362.3790000000001,144.678L361.64700000000005,152.924L360.18300000000005,169.41500000000002L358.44900000000007,188.27900000000002L374.94000000000005,189.74300000000002L388.51400000000007,190.62600000000003L399.5640000000001,191.51100000000002L415.6640000000001,192.39200000000002L429.2380000000001,193.27500000000003L447.0510000000001,193.68700000000004L450.8260000000001,196.56200000000004L454.63900000000007,198.73700000000005L455.76700000000005,198.65800000000004L457.12700000000007,196.90700000000004L460.20000000000005,197.21500000000003L462.72800000000007,197.21300000000002L465.83900000000006,196.82100000000003L468.68000000000006,198.80200000000002L472.95900000000006,200.15900000000002L473.73800000000006,201.32500000000002L475.41100000000006,201.55700000000002L475.49000000000007,202.685L476.93100000000004,204.589L478.87600000000003,204.976L478.329,202.137L476.344,199.922L477.587,197.743L478.71299999999997,195.136L478.51699999999994,193.581L479.44899999999996,191.947L479.01899999999995,189.536L477.61899999999997,189.459L478.08299999999997,186.114L477.381,183.548L479.481,183.663L479.85699999999997,169.078L479.80999999999995,159.666L479.95199999999994,144.226L478.2389999999999,142.166L476.2939999999999,141.779L473.7229999999999,137.42499999999998L473.9169999999999,136.45299999999997L477.1429999999999,133.96099999999998L478.61799999999994,130.10899999999998Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    <MapStateLabel
      x="306.033"
      y="118.56"
      transform="matrix(0.741,0,0,0.741,79.2625,30.707)"
      textY="8.099062500000002"
      className={getMapLabelClassName(abbr)}
    >
      {abbr}
    </MapStateLabel>
  </>
)

export default SouthDakota
