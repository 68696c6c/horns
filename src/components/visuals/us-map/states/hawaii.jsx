/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import MapState, {
  getMapLabelClassName,
  getMapStateClassName,
  MapStateLabel,
} from './_map-state'

const abbr = 'HI'

const Hawaii = () => (
  <>
    <MapState
      d="M250.64,510.99L247.509,511.16200000000003L243.10299999999998,513.794L242.44299999999998,515.73L245.404,517.904L249.444,518.984L252.539,513.13L250.637,510.99ZM233.63,520.573L236.03199999999998,518.135L232.93499999999997,518.512L233.62999999999997,520.573ZM281.413,525.372L278.918,523.05L276.676,525.602L274.31899999999996,526.6279999999999L277.21299999999997,532.184L279.376,529.997L283.11199999999997,533.0269999999999L285.54799999999994,531.2159999999999L284.97799999999995,528.6429999999999L282.4839999999999,528.4279999999999L281.4119999999999,525.3769999999998ZM294.819,533.737L293.966,536.6179999999999L298.57800000000003,536.4799999999999L302.814,537.4579999999999L305.844,535.8289999999998L306.06,535.0199999999999L300.548,533.9739999999998L300.298,534.5779999999999L294.82,533.7369999999999ZM308.656,537.957L306.846,538.891L308.077,542.901L310.924,543.1279999999999L311.84799999999996,546.555L314.80899999999997,547.886L318.42999999999995,546.86L321.43999999999994,544.673L315.11799999999994,539.623L308.66099999999994,537.9630000000001ZM301.974,544.621L304.126,543.208L302.349,540.555L300.265,540.271L299.07,541.524L300.289,542.093L300.928,544.655L301.976,544.621ZM309.947,549.048L308.398,547.7620000000001L306.964,549.687L309.947,549.048ZM346.884,571.319L343.296,567.9159999999999L343.341,566.925L340.95,566.482L340.86899999999997,563.472L333.64799999999997,558.4979999999999L330.638,557.736L326.26399999999995,555.096L323.45199999999994,555.917L325.0249999999999,559.868L320.3019999999999,566.908L322.02199999999993,569.64L323.8569999999999,574.741L324.9189999999999,582.781L328.9389999999999,585.41L331.4199999999999,581.3439999999999L335.7799999999999,578.0169999999999L341.1429999999999,576.4889999999999L345.6969999999999,573.4789999999999L346.8799999999999,571.3149999999999Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    <MapStateLabel
      x="226.005"
      y="418.665"
      transform="matrix(0.741,0,0,0.741,58.5353,108.4342)"
      textyY="7.5009375000000205"
      className={getMapLabelClassName(abbr)}
    >
      {abbr}
    </MapStateLabel>
  </>
)

export default Hawaii
