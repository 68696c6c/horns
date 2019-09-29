/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import MapState, {
  getMapLabelClassName,
  getMapStateClassName,
  MapStateLabel,
} from './_map-state'

const abbr = 'TX'

const Texas = ({ showLabel }) => (
  <>
    <MapState
      d="M462.08,530.01L461.38,529.972L458.35,536.547L459.478,536.4680000000001L462.07800000000003,530.0100000000001ZM465.14799999999997,525.263L468.76099999999997,520.826L467.671,520.205L466.545,522.812L465.147,525.263ZM477.50699999999995,514.985L475.4069999999999,514.87L471.5979999999999,517.751L469.6149999999999,518.064L470.2389999999999,519.502L471.7159999999999,518.178L477.50799999999987,514.984ZM508.36699999999996,492.51800000000003L505.95799999999997,495.47600000000006L509.88399999999996,493.02200000000005L508.36699999999996,492.51800000000003ZM513.377,398.278L512.6769999999999,398.24L508.7079999999999,396.338L506.49099999999993,395.795L504.5059999999999,393.58000000000004L503.2609999999999,393.23100000000005L499.9919999999999,391.3670000000001L499.2149999999999,392.7290000000001L497.6209999999999,393.6250000000001L494.2759999999999,393.1610000000001L493.2249999999999,391.8400000000001L490.0369999999999,393.63200000000006L488.4819999999999,393.8280000000001L487.1199999999999,393.0510000000001L485.0999999999999,394.0640000000001L483.1169999999999,394.37700000000007L482.3399999999999,395.7390000000001L480.51199999999994,395.7790000000001L479.73499999999996,397.14100000000013L478.294,395.23700000000014L476.894,395.16000000000014L475.415,393.95600000000013L474.091,392.47900000000016L473.314,393.8410000000002L470.39700000000005,393.26000000000016L469.22900000000004,391.51100000000014L466.39300000000003,394.5860000000001L465.889,396.1030000000001L464.761,396.18200000000013L463.982,395.01600000000013L464.64200000000005,393.2260000000001L463.9800000000001,392.4880000000001L460.9500000000001,394.0070000000001L459.5500000000001,393.9300000000001L459.1990000000001,392.6470000000001L457.5260000000001,392.4150000000001L457.0580000000001,390.70400000000006L455.3850000000001,390.47200000000004L453.17000000000013,392.45700000000005L451.73200000000014,393.0810000000001L450.3700000000001,392.3040000000001L450.60200000000015,390.6310000000001L447.9950000000001,389.5050000000001L447.9930000000001,386.9770000000001L446.0100000000001,387.2900000000001L443.5200000000001,386.5920000000001L442.3160000000001,388.0710000000001L440.7610000000001,388.2670000000001L439.3200000000001,386.3630000000001L436.6370000000001,386.6380000000001L433.8750000000001,385.7850000000001L432.5130000000001,385.0080000000001L431.3850000000001,385.0870000000001L428.1950000000001,384.3510000000001L428.3100000000001,382.2510000000001L427.1420000000001,380.50200000000007L424.96300000000014,379.25900000000007L424.7310000000001,380.9320000000001L421.9690000000001,380.07900000000006L419.5580000000001,380.50900000000007L416.1320000000001,376.38900000000007L414.0320000000001,376.27400000000006L414.9100000000001,357.64400000000006L415.71400000000006,342.94200000000006L416.05600000000004,334.11300000000006L403.02600000000007,333.54100000000005L384.55100000000004,332.39000000000004L363.70400000000006,330.96900000000005L363.0040000000001,330.93100000000004L362.3490000000001,337.77700000000004L360.9260000000001,356.09600000000006L359.8470000000001,368.11600000000004L358.1520000000001,386.27600000000007L356.4200000000001,407.66800000000006L354.5710000000001,428.63200000000006L338.0800000000001,427.16800000000006L321.5890000000001,425.70400000000006L301.2080000000001,423.46600000000007L287.9450000000001,422.03900000000004L288.9980000000001,425.88800000000003L290.3220000000001,427.365L292.77300000000014,428.76300000000003L293.8650000000001,431.91200000000003L295.6570000000001,435.1L298.8080000000001,436.536L300.9100000000001,439.179L302.5850000000001,441.93899999999996L305.3880000000001,444.61999999999995L306.0120000000001,446.05799999999994L309.32100000000014,449.74999999999994L311.77200000000016,451.14799999999997L314.03000000000014,453.518L315.66400000000016,454.45L317.61100000000016,457.365L318.04100000000017,459.776L319.6390000000002,463.93600000000004L320.5350000000002,465.53000000000003L319.91600000000017,469.14700000000005L320.22900000000016,471.13000000000005L321.8650000000002,474.59000000000003L322.4120000000002,477.42900000000003L323.8530000000002,479.333L325.60400000000016,480.69300000000004L327.27700000000016,480.92500000000007L330.82000000000016,485.4720000000001L332.99900000000014,486.7150000000001L335.6440000000001,487.1410000000001L335.7230000000001,488.26900000000006L337.7470000000001,489.78400000000005L340.23700000000014,490.482L341.40500000000014,492.23100000000005L343.1560000000001,493.59100000000007L344.5560000000001,493.66800000000006L347.5900000000001,494.67800000000005L348.3670000000001,493.31600000000003L350.8930000000001,490.78600000000006L352.75900000000007,490.0450000000001L353.18500000000006,487.4000000000001L355.59200000000004,481.9140000000001L357.72800000000007,478.8010000000001L360.9940000000001,478.1370000000001L362.9390000000001,478.5240000000001L363.8710000000001,476.8900000000001L365.3090000000001,476.2660000000001L368.8500000000001,478.28600000000006L371.3780000000001,478.28400000000005L377.9130000000001,479.48400000000004L379.46800000000013,479.288L382.23000000000013,480.141L382.9710000000001,482.007L383.90500000000014,482.901L385.3050000000001,482.978L386.98000000000013,485.738L388.7310000000001,487.098L389.1990000000001,488.809L392.9740000000001,491.684L393.8320000000001,493.978L395.3110000000001,495.182L396.0540000000001,499.576L398.15600000000006,502.219L398.3140000000001,504.47499999999997L400.14400000000006,506.962L402.01700000000005,513.805L403.458,515.709L405.90900000000005,517.107L407.15600000000006,519.9839999999999L409.53100000000006,522.7819999999999L409.6890000000001,525.0379999999999L410.77900000000005,525.6589999999999L412.60900000000004,528.1459999999998L414.826,528.6889999999999L416.422,530.3209999999998L416.19,531.9939999999998L417.086,533.5879999999999L416.271,535.6499999999999L417.51800000000003,538.5269999999998L416.78200000000004,541.7169999999999L418.689,542.8039999999999L418.88500000000005,544.3589999999998L420.636,545.7189999999998L421.415,546.8849999999999L421.45500000000004,548.7129999999999L423.05100000000004,550.3449999999998L422.19800000000004,553.1069999999997L423.13200000000006,554.0009999999997L423.83400000000006,556.5669999999998L426.20700000000005,556.8369999999998L427.5690000000001,557.6139999999998L429.39700000000005,557.5739999999998L430.56500000000005,559.3229999999999L432.31600000000003,560.6829999999999L433.59900000000005,560.3319999999999L437.72300000000007,561.9619999999999L439.16400000000004,563.8659999999999L440.79800000000006,564.7979999999999L446.39900000000006,565.1039999999999L449.19900000000007,565.257L451.41600000000005,565.8L456.6700000000001,569.8789999999999L460.16800000000006,567.5419999999999L462.42400000000004,567.3839999999999L462.384,565.5559999999999L460.48,566.997L460.44,565.169L458.961,563.965L459.19300000000004,562.292L458.18000000000006,560.272L458.25700000000006,558.8720000000001L456.23300000000006,557.3570000000001L456.93100000000004,554.8670000000001L455.682,549.4620000000001L454.475,548.4130000000001L454.70500000000004,544.2120000000001L455.98800000000006,543.8610000000001L455.67500000000007,541.8780000000002L456.68500000000006,541.3720000000002L456.99300000000005,538.2990000000002L455.39900000000006,539.1950000000002L453.02600000000007,538.9250000000002L453.10300000000007,537.5250000000002L455.12300000000005,536.5120000000002L457.34000000000003,537.0550000000002L460.56100000000004,529.5070000000002L458.81000000000006,528.1470000000002L458.2250000000001,526.0080000000002L456.12500000000006,525.8930000000001L455.6190000000001,524.8830000000002L460.67500000000007,524.8790000000001L462.3090000000001,525.8110000000001L465.4940000000001,521.4910000000001L463.70400000000006,520.8310000000001L463.3550000000001,522.0760000000001L461.6040000000001,520.7160000000001L462.8080000000001,519.2370000000001L468.2920000000001,519.1160000000001L470.23500000000007,516.9750000000001L470.19500000000005,515.1470000000002L469.1820000000001,513.1270000000002L470.4650000000001,512.7760000000002L472.56700000000006,515.4190000000002L477.6170000000001,512.8870000000002L475.5150000000001,510.2440000000002L474.1530000000001,509.4670000000002L474.6570000000001,507.9500000000002L476.8740000000001,508.4930000000002L477.92300000000006,507.28600000000023L478.70200000000006,508.4520000000002L480.4510000000001,507.2840000000002L481.3090000000001,509.5780000000002L488.9290000000001,506.3430000000002L491.4570000000001,506.3410000000002L493.3230000000001,505.6000000000002L496.8210000000001,503.2630000000002L497.6760000000001,503.0290000000002L501.9510000000001,499.33100000000024L501.79300000000006,497.0750000000003L503.5420000000001,495.90700000000027L506.8440000000001,492.01500000000027L505.9100000000001,491.12100000000027L504.23500000000007,488.3610000000003L504.3090000000001,484.4330000000003L507.1880000000001,485.7140000000003L508.15800000000013,483.3800000000003L509.44100000000014,483.0290000000003L510.60900000000015,484.7780000000003L509.40700000000015,488.7880000000003L512.2460000000002,488.24100000000027L511.4310000000002,490.3030000000003L522.6660000000002,485.1600000000003L526.3220000000001,485.0790000000003L525.0370000000001,482.90200000000027L525.4240000000001,480.9570000000003L526.5500000000001,478.35000000000025L527.6780000000001,478.27100000000024L529.1930000000001,476.24700000000024L529.0330000000001,471.46300000000025L528.4480000000001,469.32400000000024L529.2250000000001,467.9620000000002L528.5230000000001,465.39600000000024L529.2610000000002,464.73400000000026L531.3570000000002,459.7930000000003L532.2100000000002,457.0310000000003L531.1590000000001,455.71000000000026L532.3250000000002,454.93100000000027L529.2860000000002,448.87100000000027L529.6350000000002,447.62600000000026L526.3640000000003,443.23400000000026L526.5170000000003,440.43400000000025L524.7630000000003,436.5460000000003L522.0780000000003,434.2930000000003L521.7480000000003,412.0830000000003L521.4260000000003,399.9830000000003L520.6090000000003,399.5170000000003L516.8360000000002,399.1700000000003L515.2420000000002,400.0660000000003L513.3740000000001,398.27900000000034Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="314.925"
        y="322.335"
        transform="matrix(0.741,0,0,0.741,81.5656,83.4848)"
        textY="8.10062499999998"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </>
)

Texas.propTypes = {
  showLabel: PropTypes.bool,
}

Texas.defaultProps = {
  showLabel: true,
}

export default Texas
