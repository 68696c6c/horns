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

const abbr = 'AK'

const Alaska = ({
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
      d="M7.246,581.34L7.247000000000001,580.772L7.027000000000001,580.856L7.237000000000001,581.34ZM13.149000000000001,581.046L13.461,580.702L13.202,580.523L13.15,581.046ZM17.631,582.082L17.895,581.955L17.808,581.9100000000001L17.63,582.0820000000001ZM13.951,580.098L13.915000000000001,579.617L13.653,579.6129999999999L13.951,580.0989999999999ZM21.704,581.495L21.571,581.58L21.614,581.624L21.703,581.494ZM15.654,579.908L15.796,579.255L15.664,579.296L15.663,579.907ZM25.259999999999998,577.5790000000001L23.25,577.8950000000001L19.039,581.4940000000001L20.613000000000003,581.3890000000001L25.543000000000003,579.2000000000002L25.264000000000003,577.5790000000002ZM35.054,577.0880000000001L35.102000000000004,576.8270000000001L34.929,576.7370000000001L35.054,577.089ZM32.143,576.1220000000001L29.907,576.609L30.124,579.321L28.099999999999998,580.2040000000001L33.711999999999996,579.0310000000001L34.318999999999996,576.7260000000001L32.559999999999995,577.3950000000001L32.144999999999996,576.1210000000001ZM39.376,577.248L38.592999999999996,577.0160000000001L39.11,577.4620000000001L39.376,577.248ZM40.948,577.2750000000001L39.686,576.9920000000001L39.508,577.1640000000001L40.948,577.2760000000001ZM36.65,575.6740000000001L35.381,575.7840000000001L37.513,576.3000000000001L36.65,575.6740000000001ZM41.961,576.7680000000001L41.833,576.5910000000001L41.35,576.7140000000002L41.961,576.7680000000001ZM38.533,575.3560000000001L38.056000000000004,575.1300000000001L38.077000000000005,576.4850000000001L38.53300000000001,575.3570000000001ZM53.119,578.2660000000001L53.033,578.177L52.858000000000004,578.174L53.11900000000001,578.266ZM53.427,578.1400000000001L53.429,578.0090000000001L53.214,577.8310000000001L53.427,578.1400000000001ZM51.474,577.3650000000001L51.727999999999994,577.8500000000001L51.687,577.7180000000002L51.474,577.3650000000002ZM52.522,577.3830000000002L51.479,577.0600000000002L52.73,577.9980000000002L52.522,577.3830000000002ZM54.073,576.0980000000002L53.984,576.1840000000002L53.9839,576.2710000000002L54.0739,576.0980000000002ZM67.626,578.1180000000002L67.548,577.5490000000002L67.372,577.6330000000002L67.626,578.1180000000002ZM192.056,585.1880000000002L191.88600000000002,584.8790000000002L191.92600000000002,585.0980000000003L192.056,585.1870000000004ZM52.196,573.4480000000002L52.153,573.4040000000002L52.109,573.4470000000002L52.196000000000005,573.4490000000002ZM195.666,583.7190000000002L196.006,584.2930000000001L196.224,584.2960000000002L195.666,583.7190000000002ZM69.086,576.8770000000002L68.996,577.0500000000002L68.946,577.4420000000002L69.087,576.8760000000002ZM54.882999999999996,574.5420000000001L55.206999999999994,573.4550000000002L55.032999999999994,573.4080000000001L54.882999999999996,574.5410000000002ZM202.76299999999998,582.5280000000001L201.66499999999996,582.9030000000001L202.44099999999997,583.5280000000001L202.76399999999998,582.5290000000001ZM57.03299999999999,573.8790000000001L56.90699999999999,573.5710000000001L56.98899999999999,573.8780000000002L57.03299999999999,573.8781000000001ZM48.42899999999999,571.1570000000002L45.48999999999999,571.8500000000001L42.71299999999999,573.3320000000001L42.85199999999999,575.4750000000001L45.755999999999986,574.2570000000002L49.38299999999999,571.5660000000001L48.42899999999999,571.1570000000002ZM68.92399999999999,576.0010000000002L68.258,576.6450000000002L68.872,576.5240000000002L68.924,576.0010000000002ZM202.94400000000002,581.9200000000002L202.822,581.3940000000002L202.644,581.5660000000003L202.94400000000002,581.9210000000003ZM58.01400000000001,572.6290000000001L57.18600000000001,572.4840000000002L57.95900000000001,573.2830000000001L58.01400000000001,572.6290000000001ZM195.214,581.6590000000001L194.862,581.7840000000001L194.932,582.8340000000001L195.214,581.6590000000001ZM59.894000000000005,572.5290000000001L59.456,572.6090000000002L59.887,572.9660000000001L59.894,572.5290000000001ZM68.23700000000001,575.2030000000001L67.93100000000001,575.1970000000001L67.71600000000001,574.9750000000001L68.236,575.2020000000001ZM58.891000000000005,572.4250000000001L58.37200000000001,572.11L58.541000000000004,572.462L58.891000000000005,572.424ZM66.554,573.9520000000001L65.587,574.2850000000001L64.723,576.2800000000001L66.553,573.9520000000001ZM192.784,580.6570000000002L192.551,581.5270000000002L193.171,581.0130000000001L192.784,580.6570000000002ZM63.123999999999995,572.4960000000002L63.712999999999994,573.8600000000002L63.958999999999996,572.2040000000003L63.123999999999995,572.4960000000003ZM53.074,569.8370000000002L53.995999999999995,569.5470000000003L53.90899999999999,569.5020000000003L53.07299999999999,569.8370000000003ZM51.951,569.0750000000003L51.78,568.8540000000003L51.735,568.9410000000003L51.951,569.0760000000002ZM192.921,579.8280000000003L192.75,579.6070000000003L192.569,579.9530000000003L192.921,579.8280000000003ZM65.49099999999999,571.7880000000004L65.18699999999998,571.6520000000004L64.91999999999999,571.9530000000004L65.49099999999999,571.7880000000005ZM191.70099999999996,579.8080000000003L191.92999999999998,579.2000000000004L191.71399999999997,579.0650000000004L191.70199999999997,579.8070000000004ZM190.88599999999997,578.9210000000004L190.44199999999998,579.3500000000004L191.00499999999997,579.6650000000004L190.88599999999997,578.9200000000004ZM70.41599999999997,570.0840000000004L70.11499999999997,569.7730000000004L70.11489999999996,569.8610000000003L70.41689999999997,570.0840000000003ZM190.96599999999995,576.6500000000004L191.83099999999996,577.1890000000004L192.31799999999996,576.8040000000004L190.96599999999995,576.6500000000004ZM192.46099999999996,576.0630000000004L192.10699999999994,576.3190000000004L192.57899999999995,576.8070000000005L192.45999999999995,576.0620000000005ZM189.74899999999997,576.2800000000004L189.62799999999996,575.6660000000004L189.27399999999994,575.9220000000004L189.74899999999994,576.2790000000003ZM202.01199999999997,574.4330000000004L199.57999999999998,578.7610000000004L202.398,580.0750000000004L203.639,579.0040000000004L203.447,577.4280000000003L202.012,574.4330000000003ZM63.39199999999997,566.4230000000005L63.261999999999965,566.3770000000004L63.173999999999964,566.4190000000004L63.39199999999997,566.4220000000005ZM191.62199999999996,573.6420000000005L190.33999999999995,574.5380000000005L190.35999999999996,575.9360000000005L191.62199999999996,573.6420000000005ZM82.61199999999995,569.0600000000005L82.62099999999995,568.4920000000005L82.48599999999995,568.7520000000005L82.61199999999995,569.0600000000005ZM195.82199999999995,572.9690000000005L195.41299999999995,573.9230000000005L197.43299999999996,573.2580000000005L195.82099999999997,572.9690000000005ZM190.59399999999994,572.0950000000005L192.02499999999995,577.9290000000004L192.93499999999995,578.3810000000004L196.02499999999995,581.7090000000004L198.15499999999994,584.9340000000004L199.32899999999995,585.2600000000004L198.10299999999995,582.7930000000005L198.40299999999996,580.5260000000004L197.90399999999997,579.0320000000004L194.83099999999996,574.7430000000004L192.64499999999995,572.2600000000004L190.59499999999994,572.0950000000005ZM78.01399999999994,566.8420000000004L77.93399999999994,566.4470000000005L77.71399999999994,566.5310000000004L78.01499999999994,566.8420000000004ZM194.89399999999995,570.9880000000004L193.99099999999996,572.7200000000004L195.00299999999996,572.3000000000004L194.89399999999995,570.9880000000004ZM81.92399999999995,565.2920000000004L81.26999999999995,565.1940000000004L80.60999999999996,565.4890000000004L81.92399999999995,565.2930000000003ZM93.82099999999996,567.0210000000004L93.28299999999996,567.8420000000004L93.55799999999996,567.1040000000004L93.82199999999996,567.0210000000004ZM95.56399999999995,567.2690000000005L94.51499999999994,567.2950000000004L94.98399999999994,568.0020000000004L95.56399999999994,567.2690000000005ZM24.933999999999955,550.7930000000005L26.059999999999956,551.3800000000005L25.889999999999954,551.1150000000005L24.933999999999955,550.7930000000005ZM71.30399999999995,562.5370000000005L71.39399999999995,562.4070000000005L71.26099999999995,562.4920000000005L71.30399999999996,562.5360000000005ZM71.65599999999995,562.4120000000005L71.83199999999995,562.3270000000005L71.83209999999995,562.2830000000005L71.65509999999995,562.4110000000005ZM193.48599999999993,568.0820000000004L193.57499999999993,570.5740000000004L194.89499999999992,570.0280000000004L193.48599999999993,568.0820000000003ZM74.90599999999993,561.0220000000005L75.03899999999993,560.9370000000005L74.99499999999993,560.9369000000005L74.90599999999993,561.0229000000005ZM188.37599999999992,567.9500000000005L186.44899999999993,568.2230000000005L187.81799999999993,569.9500000000005L187.88399999999993,573.7960000000005L189.29799999999992,572.8150000000005L189.16699999999992,570.2350000000005L188.37499999999991,567.9500000000005ZM189.2369999999999,566.0860000000005L188.9439999999999,567.9160000000005L191.16699999999992,570.7930000000005L191.3009999999999,567.9990000000005L193.3349999999999,569.1250000000005L192.5909999999999,566.6220000000004L191.7529999999999,567.0880000000004L189.2359999999999,566.0880000000004ZM180.90599999999992,565.2910000000005L179.77699999999993,567.5000000000005L181.06599999999992,566.1670000000005L180.90599999999992,565.2910000000005ZM86.55599999999993,559.4700000000005L86.47199999999992,559.2940000000004L86.51399999999992,559.4690000000004L86.55799999999992,559.4691000000004ZM97.72499999999992,560.3560000000004L97.51299999999992,559.9590000000004L97.63499999999992,560.4850000000004L97.72499999999992,560.3550000000004ZM181.50499999999994,563.5090000000005L182.02899999999994,568.7170000000004L184.62499999999994,572.8230000000004L184.89699999999993,567.0170000000004L183.11899999999994,563.6230000000004L181.50499999999994,563.5090000000004ZM104.59599999999993,556.8890000000005L104.19899999999993,557.1440000000005L104.84799999999993,557.5040000000005L104.59599999999993,556.8880000000005ZM103.06599999999993,556.9510000000005L103.24699999999993,556.5610000000005L102.80999999999993,556.5530000000005L103.06499999999993,556.9500000000005ZM101.93199999999993,556.8450000000005L101.56999999999994,557.5820000000004L98.52699999999993,556.6570000000005L98.13799999999993,561.6310000000005L96.92299999999993,558.5090000000006L94.68099999999993,559.3450000000006L93.60899999999992,560.7250000000006L94.51599999999992,563.9730000000006L95.90899999999992,564.2580000000006L97.46199999999992,562.8420000000006L95.57899999999992,565.7370000000005L96.18299999999992,566.1840000000005L98.21899999999992,564.6020000000005L97.57699999999993,563.8050000000005L99.43099999999993,562.6570000000005L101.44099999999993,562.5160000000005L104.43099999999993,561.3870000000005L105.46099999999993,559.8750000000006L103.98299999999993,559.4570000000006L104.74499999999993,558.2900000000005L101.92999999999994,556.8450000000005ZM177.04199999999992,558.9790000000005L176.2669999999999,558.3110000000005L176.2529999999999,559.0970000000004L177.0409999999999,558.9790000000004ZM101.26199999999992,555.3050000000005L101.33999999999992,555.8740000000005L102.11799999999992,556.3680000000005L101.26199999999993,555.3050000000005ZM179.69199999999992,556.9710000000006L177.14399999999992,557.8020000000006L177.85199999999992,559.8670000000006L177.18199999999993,560.7300000000007L179.71299999999994,563.4810000000007L179.71099999999993,560.9910000000007L183.08099999999993,563.2320000000007L179.26399999999992,559.0180000000006L182.25199999999992,560.5970000000005L182.47199999999992,557.8920000000005L179.69099999999992,556.9720000000005ZM178.16699999999992,556.7270000000005L177.9089999999999,556.4610000000006L177.7759999999999,556.5900000000006L178.1669999999999,556.7280000000006ZM185.64599999999993,556.1970000000006L184.78099999999992,555.6580000000006L184.4639999999999,556.3520000000005L185.6459999999999,556.1970000000006ZM180.40699999999993,556.0220000000006L179.62499999999991,555.7900000000006L179.62199999999993,555.9650000000006L180.40699999999993,556.0220000000006ZM183.21199999999993,555.5010000000007L185.73199999999994,564.1500000000007L186.41399999999993,559.9670000000007L188.15899999999993,560.1270000000006L186.59499999999994,556.9990000000006L184.31999999999994,557.1790000000005L183.21199999999993,555.5000000000006ZM104.31999999999994,552.5170000000006L101.27099999999993,554.5630000000007L102.42399999999994,556.1550000000007L106.15099999999994,555.3440000000006L106.44699999999995,553.3440000000006L104.31999999999995,552.5220000000006ZM72.18999999999994,545.9930000000006L72.10499999999995,545.8600000000006L72.10199999999995,546.0350000000005L72.18999999999994,545.9930000000005ZM70.93299999999994,545.4040000000006L70.85599999999994,544.7910000000005L70.80899999999994,544.9650000000005L70.93299999999994,545.4040000000005ZM107.44199999999994,548.7690000000006L107.17799999999994,548.8960000000005L107.17599999999995,549.0270000000005L107.44199999999995,548.7690000000005ZM106.30999999999993,548.5320000000006L106.18099999999993,548.3990000000006L105.86799999999992,548.8310000000006L106.30999999999992,548.5330000000006ZM109.20899999999993,547.6200000000006L108.90599999999993,547.4400000000006L108.90399999999994,547.5710000000006L109.20899999999995,547.6200000000006ZM110.17099999999994,547.5930000000005L109.86799999999994,547.4130000000006L109.82299999999994,547.5000000000006L110.17099999999994,547.5930000000005ZM108.64999999999993,547.1310000000005L108.21499999999993,547.0360000000005L108.16899999999993,547.1660000000005L108.64999999999992,547.1300000000006ZM132.63699999999994,546.9660000000006L132.81699999999995,546.6630000000006L132.55099999999996,546.8770000000006L132.63699999999997,546.9660000000007ZM140.46599999999995,543.8210000000006L142.10899999999995,542.2320000000005L141.53799999999995,542.4410000000005L140.46599999999995,543.8210000000005ZM125.82099999999996,541.7840000000006L126.35199999999996,541.4000000000005L126.57799999999996,540.9230000000006L125.82099999999996,541.7840000000006ZM126.06399999999995,540.3460000000006L125.48999999999995,540.7300000000006L126.36599999999996,540.5700000000006L126.06399999999995,540.3460000000006ZM106.30399999999995,538.5730000000005L106.22599999999994,538.0040000000006L106.00799999999994,538.0010000000005L106.30399999999995,538.5740000000005ZM125.49399999999994,540.2490000000006L125.00699999999995,540.6340000000006L124.64899999999994,541.1520000000006L125.49399999999994,540.2490000000006ZM138.94899999999996,540.2560000000005L139.03499999999997,540.3450000000006L139.16699999999997,540.3040000000005L138.94899999999998,540.2570000000005ZM139.60299999999995,540.3110000000005L139.29899999999995,540.2180000000005L139.34099999999995,540.3060000000005L139.60299999999995,540.3100000000005ZM138.07799999999995,540.0670000000005L138.20699999999994,540.2000000000005L138.20899999999995,540.0690000000005L138.07799999999995,540.0670000000006ZM128.16799999999995,539.6390000000005L128.65799999999996,539.0790000000005L128.08099999999996,539.6370000000005L128.16799999999995,539.6390000000005ZM135.69299999999996,538.9790000000005L135.64899999999994,538.9789000000005L135.64899999999994,538.9789000000005L135.69299999999996,538.9790000000005ZM129.80099999999996,538.6180000000005L126.31399999999996,543.3210000000005L130.57899999999995,539.1110000000004L129.80099999999996,538.6170000000004ZM125.90999999999995,538.7710000000005L125.69999999999996,538.2430000000005L125.43399999999995,538.5010000000005L125.90999999999995,538.7710000000005ZM135.17299999999994,538.7080000000005L134.99999999999994,538.6180000000005L135.08599999999996,538.7070000000006L135.17299999999994,538.7090000000005ZM138.30699999999993,539.3720000000005L138.45099999999994,538.5880000000005L138.09699999999992,538.8440000000005L138.30699999999993,539.3720000000005ZM49.786999999999935,524.6490000000006L43.93399999999993,524.5940000000006L46.231999999999935,528.2150000000006L47.923999999999936,528.9420000000006L50.88999999999994,529.2100000000006L49.786999999999935,524.6480000000006ZM132.30699999999993,537.8290000000005L132.46599999999992,538.7490000000005L133.09299999999993,537.8420000000004L132.30699999999993,537.8280000000004ZM127.42499999999993,537.1790000000005L126.76799999999993,539.8770000000005L127.62599999999993,538.1880000000006L127.42399999999994,537.1780000000006ZM22.18499999999993,513.6130000000005L22.27999999999993,513.1780000000006L22.28199999999993,513.0910000000006L22.18599999999993,513.6140000000006ZM126.49499999999993,535.1540000000006L126.53199999999994,535.5480000000006L126.79399999999994,535.5520000000006L126.49499999999993,535.1540000000006ZM125.74399999999993,535.6660000000005L125.58399999999993,534.7900000000005L125.27399999999993,535.0470000000005L125.74399999999993,535.6670000000005ZM131.65699999999993,534.7600000000006L131.6659999999999,534.2800000000005L131.3129999999999,534.4930000000005L131.6579999999999,534.7610000000005ZM126.21899999999992,533.4020000000006L126.15599999999992,534.5800000000006L126.60599999999992,533.8010000000006L126.21999999999993,533.4010000000006ZM117.12899999999992,530.8900000000007L117.26699999999992,530.4990000000007L117.17899999999993,530.4970000000008L117.12899999999993,530.8890000000008ZM53.788999999999916,512.3090000000007L54.063999999999915,511.57100000000065L53.93099999999991,511.65600000000063L53.78899999999991,512.3090000000007ZM54.289999999999914,511.0940000000007L54.03099999999991,510.9150000000007L54.02899999999991,511.0460000000007L54.289999999999914,511.0940000000007ZM59.71799999999991,507.82100000000065L59.72099999999991,507.64600000000064L59.67799999999991,507.60200000000066L59.71799999999991,507.82100000000065ZM59.77099999999991,507.25400000000064L59.68799999999991,506.99000000000063L59.64399999999991,507.03300000000064L59.770999999999916,507.25400000000064ZM62.05599999999991,503.84100000000063L62.100999999999914,503.75400000000064L61.88199999999991,503.79400000000066L62.05599999999991,503.8410000000007ZM62.795999999999914,504.02800000000065L62.231999999999914,503.80000000000064L62.27299999999991,503.93200000000064L62.795999999999914,504.02800000000065ZM62.01899999999991,503.49100000000067L62.02199999999991,503.27300000000065L61.843999999999916,503.4880000000006L62.01899999999991,503.4910000000006ZM41.88899999999991,497.9540000000007L41.76799999999991,497.3400000000007L41.59899999999991,496.98800000000074L41.88899999999991,497.95400000000075ZM43.85199999999991,495.4970000000007L43.89399999999991,495.5850000000007L44.066999999999915,495.6750000000007L43.85199999999991,495.4970000000007ZM40.32099999999991,495.0450000000007L39.37999999999991,493.8500000000007L40.15199999999991,494.7370000000007L40.32199999999991,495.04600000000073ZM38.25799999999991,493.0450000000007L38.12599999999991,493.0860000000007L38.47399999999991,493.1790000000007L38.25799999999991,493.0440000000007ZM38.58799999999991,491.6090000000007L38.54499999999991,491.56500000000074L38.58799999999991,491.6090000000007L38.58799999999991,491.6090000000007ZM38.32899999999991,491.43000000000075L38.28599999999991,491.42990000000077L38.54599999999991,491.56490000000076L38.329999999999906,491.42990000000077ZM71.76399999999991,500.9910000000007L70.3639999999999,501.09900000000073L71.18599999999991,501.55000000000075L71.7629999999999,500.99200000000076ZM36.88099999999991,489.2220000000007L35.35299999999991,491.77400000000074L35.98399999999991,493.22600000000074L39.12599999999991,493.4530000000007L42.07199999999991,497.52200000000073L46.43899999999991,497.63900000000075L45.84699999999991,496.49300000000073L42.00299999999991,493.85100000000074L41.12499999999991,491.52100000000075L39.018999999999906,492.05400000000077L36.881999999999906,489.2220000000008ZM59.15099999999991,489.8140000000007L59.19799999999991,489.5960000000007L59.10999999999991,489.63800000000066L59.15199999999991,489.81300000000067ZM52.61499999999991,475.8140000000007L52.44199999999991,475.6800000000007L52.52599999999991,475.8560000000007L52.61399999999991,475.8140000000007ZM56.43899999999991,477.05800000000073L56.835999999999906,476.84600000000074L56.704999999999906,476.84400000000073L56.43899999999991,477.05800000000073ZM59.11899999999991,476.1860000000007L59.470999999999904,476.0610000000007L60.65899999999991,475.5570000000007L59.11899999999991,476.1860000000007ZM63.77699999999991,474.56000000000074L63.99899999999991,474.34500000000077L63.68999999999991,474.5150000000008L63.776999999999916,474.5600000000008ZM64.4349999999999,474.39600000000075L65.1409999999999,473.97100000000074L64.4819999999999,474.17800000000074L64.4349999999999,474.39600000000075ZM66.3269999999999,473.59800000000075L65.6699999999999,473.71800000000076L65.7119999999999,473.8060000000008L66.3269999999999,473.59800000000075ZM67.1599999999999,473.43700000000075L67.1599999999999,473.43700000000075L67.0729999999999,473.43500000000074L67.1599999999999,473.43700000000075ZM154.4199999999999,454.36700000000076L153.9919999999999,453.83600000000075L153.0849999999999,453.20900000000074L154.4199999999999,454.36700000000076ZM82.5319999999999,445.3370000000008L83.8279999999999,443.6110000000008L83.11799999999991,444.25400000000076L82.53199999999991,445.33600000000075ZM84.2699999999999,443.3130000000008L84.8949999999999,442.5370000000008L84.5859999999999,442.7070000000008L84.2699999999999,443.3130000000008ZM85.2059999999999,442.1930000000008L86.0499999999999,441.33300000000077L85.5199999999999,441.6740000000008L85.2049999999999,442.1930000000008ZM128.9329999999999,444.98000000000076L129.61999999999992,445.69100000000077L129.92599999999993,445.69700000000074L128.93299999999994,444.98100000000073ZM106.97499999999991,433.60200000000077L102.75899999999992,437.50700000000074L101.04199999999992,438.30800000000073L97.68299999999992,437.99000000000075L97.56599999999992,437.15800000000075L94.12899999999992,438.89200000000073L94.38499999999992,441.86700000000076L93.46999999999991,441.72100000000074L94.51299999999992,439.42300000000074L89.36299999999991,441.69600000000077L87.76299999999992,440.70800000000077L83.01499999999992,445.08400000000074L81.06699999999992,449.20200000000074L77.18099999999993,451.67100000000073L74.08099999999993,451.5750000000007L70.68999999999993,450.55700000000076L67.38199999999992,455.04500000000075L70.21099999999991,458.2820000000008L74.09199999999991,463.93900000000076L74.31899999999992,468.61700000000076L81.38899999999992,471.35700000000077L80.07599999999992,474.13100000000077L81.26899999999992,475.94200000000075L82.45999999999992,475.2630000000008L85.57999999999993,476.7570000000008L82.68799999999993,477.2760000000008L79.69999999999993,475.6970000000008L80.91899999999993,478.5570000000008L78.53399999999992,480.0900000000008L70.63899999999992,476.7250000000008L72.72799999999992,474.6190000000008L71.26999999999992,472.9780000000008L65.30999999999993,474.0580000000008L56.387999999999934,477.2280000000008L57.07499999999993,480.4730000000008L61.30899999999993,483.2960000000008L58.85499999999993,483.7350000000008L59.11199999999993,486.6660000000008L62.10899999999993,490.2990000000008L63.49099999999993,491.24000000000075L66.42699999999994,490.72100000000074L70.19599999999994,492.61900000000077L71.76199999999994,492.99500000000074L71.65299999999995,494.26000000000073L73.20799999999996,492.7130000000007L75.84299999999996,491.8830000000007L76.42599999999996,490.9750000000007L77.89999999999996,491.6550000000007L78.87999999999997,490.5360000000007L79.83599999999997,493.4350000000007L78.68399999999997,494.4200000000007L77.51399999999997,493.8760000000007L76.62099999999997,495.04100000000074L77.92999999999996,495.1070000000007L78.41699999999996,499.92100000000073L77.64299999999996,501.7870000000007L71.87699999999995,501.7340000000007L71.91199999999995,502.2590000000007L68.85699999999994,504.6980000000007L65.00999999999995,504.8520000000007L64.74199999999995,502.6190000000007L62.99499999999995,502.5900000000007L62.968999999999944,504.1190000000007L61.22099999999995,504.1330000000007L60.26599999999995,508.96600000000075L59.45499999999995,507.86000000000075L54.98199999999995,511.4550000000008L55.30799999999995,512.8580000000007L53.69499999999995,512.6560000000007L53.58399999999995,519.2510000000008L55.839999999999954,520.2060000000008L54.869999999999955,520.7580000000008L57.155999999999956,522.5000000000008L61.281999999999954,523.9240000000008L60.02999999999995,525.6500000000008L59.970999999999954,523.9890000000008L58.21899999999995,524.2650000000008L56.73099999999995,521.7940000000008L52.93499999999995,524.0890000000007L54.76099999999995,524.6000000000007L54.03999999999996,525.8990000000007L57.73699999999996,532.0770000000007L61.18299999999996,532.3970000000007L63.594999999999956,531.8700000000007L64.85599999999995,529.6190000000007L65.80499999999995,530.3340000000007L65.70099999999995,533.9150000000008L66.26399999999995,536.8080000000008L64.46899999999995,539.6180000000007L65.02499999999995,542.9040000000007L62.65599999999995,543.4760000000007L64.51499999999994,544.6430000000007L71.37699999999994,541.8310000000007L73.30199999999994,544.2660000000006L74.65099999999994,544.5940000000006L75.85599999999994,548.2840000000007L77.29999999999994,548.1330000000007L77.03899999999994,545.4640000000007L80.10799999999995,547.4380000000008L85.19999999999995,545.9940000000008L86.89399999999995,543.9690000000008L84.86899999999994,547.4740000000008L82.69899999999994,549.2290000000008L83.05799999999994,551.2490000000008L81.68599999999994,552.2740000000008L80.56599999999993,556.5370000000008L77.34899999999993,558.1870000000008L75.21699999999993,560.2920000000008L71.02399999999993,562.8430000000009L69.66699999999993,562.9950000000009L65.69099999999993,565.637000000001L65.85099999999993,569.135000000001L61.132999999999925,566.522000000001L56.70099999999992,567.7150000000009L52.22999999999992,571.179000000001L50.42399999999992,572.0660000000009L49.742999999999924,573.584000000001L53.72299999999992,573.3450000000009L54.41699999999992,571.041000000001L54.86599999999992,572.9270000000009L59.07499999999992,569.415000000001L60.33899999999992,569.611000000001L59.39499999999992,571.212000000001L63.95599999999992,570.153000000001L64.41999999999992,571.1660000000011L67.29499999999992,569.0300000000011L70.39199999999991,569.3000000000011L75.96699999999991,565.1120000000011L81.19699999999992,563.2780000000012L85.99899999999991,560.9120000000012L88.0189999999999,557.8000000000012L90.4019999999999,556.3980000000012L91.2219999999999,557.0230000000012L95.2009999999999,554.2060000000012L96.02799999999989,554.3950000000011L100.9539999999999,549.8030000000011L101.3379999999999,547.7560000000011L98.7819999999999,546.4460000000012L99.5259999999999,543.7940000000011L102.36399999999989,541.2640000000011L105.4809999999999,537.7340000000012L104.8779999999999,537.2430000000012L107.3809999999999,536.4990000000012L111.4009999999999,531.4110000000012L115.3229999999999,529.3800000000012L118.28399999999989,529.9540000000012L117.8349999999999,530.6890000000012L119.59899999999989,532.2910000000012L117.75599999999989,532.7840000000012L116.42299999999989,531.4950000000013L111.75199999999988,533.9070000000013L111.97099999999988,536.4880000000013L109.86599999999987,539.5540000000013L108.98999999999987,542.2920000000014L110.48299999999986,544.4140000000014L109.56699999999987,544.3550000000014L108.86599999999987,547.0520000000014L111.44499999999987,546.9640000000014L118.42399999999986,542.4070000000014L119.80199999999986,540.9880000000014L123.64299999999986,541.1840000000014L124.97299999999986,540.0270000000014L126.28999999999985,537.0350000000014L124.28999999999985,536.6520000000014L125.31099999999985,535.6640000000014L124.94599999999986,533.9980000000013L125.72099999999986,532.0890000000013L127.74599999999987,533.7830000000013L128.02599999999987,532.6960000000013L131.25199999999987,533.1000000000013L133.73499999999987,536.1100000000013L134.96199999999988,535.8680000000013L135.7559999999999,538.0220000000013L137.6609999999999,539.0590000000013L139.77199999999988,538.2210000000014L139.0959999999999,539.4770000000013L142.89699999999988,542.0750000000013L148.23599999999988,541.5090000000013L152.80099999999987,542.8520000000012L154.35599999999988,541.3050000000012L156.56999999999988,544.7500000000013L160.9939999999999,544.0380000000013L161.8759999999999,546.1500000000012L160.9979999999999,546.3970000000012L163.7699999999999,547.8420000000012L169.6389999999999,552.1780000000012L171.1769999999999,554.2570000000012L173.3769999999999,555.9100000000012L175.8929999999999,556.9570000000012L178.06499999999988,555.0710000000013L174.14799999999988,551.5980000000013L177.68099999999987,551.9190000000013L178.75299999999987,555.7380000000013L180.15799999999987,555.3250000000013L182.63399999999987,556.1970000000013L180.47899999999987,549.2150000000013L181.08499999999987,549.5310000000013L180.61399999999986,546.3780000000013L181.97599999999986,551.1190000000013L183.41099999999986,554.1140000000013L186.33899999999986,556.6530000000013L187.04799999999986,556.0530000000012L188.48099999999985,559.1790000000012L191.49099999999984,559.3170000000013L191.58299999999986,561.6340000000013L190.28299999999984,561.0010000000012L190.57799999999983,564.2390000000013L191.95099999999982,565.7470000000013L198.01699999999983,571.3100000000013L197.9429999999998,575.7210000000013L198.8579999999998,578.4890000000013L199.3499999999998,575.2210000000013L201.9939999999998,573.8670000000012L203.6549999999998,576.4290000000012L204.4049999999998,583.7810000000012L206.0249999999998,583.5900000000012L208.1909999999998,579.4760000000011L207.4639999999998,573.3480000000011L207.1259999999998,572.6870000000011L200.1059999999998,569.4670000000011L198.6659999999998,569.3550000000012L196.9979999999998,567.2300000000012L196.5879999999998,565.6500000000011L191.60899999999978,557.7470000000011L187.6409999999998,552.0880000000011L185.5209999999998,550.8290000000011L181.7899999999998,546.6600000000011L181.1279999999998,544.465000000001L180.00699999999978,543.572000000001L175.80499999999978,546.6470000000011L174.27299999999977,549.417000000001L171.53999999999976,550.856000000001L170.87599999999978,548.792000000001L166.40499999999977,544.4790000000011L165.90099999999978,543.2470000000011L163.78799999999978,541.595000000001L160.2179999999998,540.880000000001L158.44199999999978,539.976000000001L155.95499999999979,539.760000000001L155.7189999999998,454.870000000001L154.2779999999998,454.80200000000104L149.5399999999998,450.74700000000104L148.3679999999998,450.29000000000104L141.4939999999998,451.22300000000104L139.7759999999998,449.49000000000103L135.5429999999998,449.24400000000105L133.4179999999998,448.33500000000106L128.1829999999998,445.32500000000107L122.41099999999979,445.62100000000106L119.9299999999998,445.0550000000011L120.77699999999979,444.0210000000011L118.24499999999979,443.8910000000011L118.6059999999998,440.5770000000011L114.3359999999998,439.8940000000011L111.8839999999998,440.2020000000011L111.7099999999998,437.5340000000011L110.7589999999998,436.95000000000107L107.4709999999998,440.21500000000106L109.1779999999998,437.4040000000011L106.9699999999998,433.6100000000011Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="83.733"
        y="366.795"
        transform="matrix(0.741,0,0,0.741,21.6868,94.9999)"
        textY="7.505937500000016"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

Alaska.propTypes = {
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

Alaska.defaultProps = {
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

export default Alaska
