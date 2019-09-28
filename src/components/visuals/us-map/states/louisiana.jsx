/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import MapState, {
  getMapLabelClassName,
  getMapStateClassName,
  MapStateLabel,
} from './_map-state'

const abbr = 'LA'

const Louisiana = () => (
  <>
    <MapState
      d="M566.19,487.95L567.705,485.926L563.695,484.724L561.8290000000001,485.465L561.908,486.59299999999996L565.332,488.18499999999995L566.187,487.95099999999996ZM608.7220000000001,470.334L607.6320000000001,469.713L606.464,467.964L605.528,464.542L603.115,462.44399999999996L601.985,459.99499999999995L603.73,453.77099999999996L603.6510000000001,452.643L585.3340000000001,453.748L567.445,454.736L568.922,453.412L567.909,451.392L568.258,450.147L567.634,448.709L569.345,448.241L570.198,445.479L569.457,443.613L571.0889999999999,442.017L571.4359999999999,438.24399999999997L572.5619999999999,435.63699999999994L573.9999999999999,435.0129999999999L575.6699999999998,432.7169999999999L576.8359999999999,431.93799999999993L577.3399999999999,430.42099999999994L579.9019999999999,424.66299999999995L576.516,422.371L576.358,420.115L575.034,418.63800000000003L574.955,417.51000000000005L576.159,416.03100000000006L575.069,415.4100000000001L575.4559999999999,413.4650000000001L576.233,412.10300000000007L574.52,410.04300000000006L561.1419999999999,410.71600000000007L551.1469999999999,411.15200000000004L538.1969999999999,411.708L521.7459999999999,412.072L522.0759999999999,434.282L524.7609999999999,436.53499999999997L526.5149999999999,440.42299999999994L526.3619999999999,443.22299999999996L529.6329999999998,447.61499999999995L529.2839999999998,448.85999999999996L532.3229999999998,454.91999999999996L531.1569999999997,455.69899999999996L532.2079999999997,457.02L531.3549999999998,459.782L529.2589999999998,464.72299999999996L528.5209999999997,465.38499999999993L529.2229999999997,467.9509999999999L528.4459999999997,469.31299999999993L529.0309999999997,471.45199999999994L529.1909999999997,476.23599999999993L527.6759999999997,478.25999999999993L528.3379999999997,478.99799999999993L527.7949999999997,481.2149999999999L526.0459999999997,482.3829999999999L527.0589999999997,484.4029999999999L528.9249999999997,483.6619999999999L534.4469999999998,482.8399999999999L539.2309999999998,482.6799999999999L542.4209999999998,483.4159999999999L549.1519999999998,486.1709999999999L551.7969999999998,486.5959999999999L557.0869999999998,487.4469999999999L559.6919999999998,486.0449999999999L560.1579999999998,485.2279999999999L559.2619999999998,483.6339999999999L559.6109999999999,482.3889999999999L562.0599999999998,481.2589999999999L562.3709999999999,480.7139999999999L565.0539999999999,480.4389999999999L564.3939999999999,482.2289999999999L568.0499999999998,482.1479999999999L569.2949999999998,482.4969999999999L568.9079999999999,484.4419999999999L570.4639999999999,484.24599999999987L571.1659999999999,486.81199999999984L575.4839999999999,487.4689999999998L576.222,486.80699999999985L577.352,489.25599999999986L575.526,491.82399999999984L577.433,492.91099999999983L580.467,493.9209999999998L583.112,494.3469999999998L585.0949999999999,494.0339999999998L587.7019999999999,495.1599999999998L590.0319999999999,491.0739999999998L593.415,490.8379999999998L596.1769999999999,491.6909999999998L595.79,493.6359999999998L596.958,495.3849999999998L599.601,493.28299999999984L599.171,490.87199999999984L600.258,488.96499999999986L599.0490000000001,485.38799999999986L601.2280000000001,486.63099999999986L602.5110000000001,486.27999999999986L605.0790000000001,488.1059999999999L605.585,489.1159999999999L608.192,490.24199999999985L608.581,490.8249999999999L610.9540000000001,491.09499999999986L613.1740000000001,494.1659999999999L614.5360000000001,494.94299999999987L616.9090000000001,495.21299999999985L619.8620000000001,492.56599999999986L617.8770000000001,490.3509999999999L616.1640000000001,488.2909999999999L613.4810000000001,488.56599999999986L611.5740000000001,487.47899999999987L610.0190000000001,487.6749999999999L609.5510000000002,485.9639999999999L607.0610000000001,485.2659999999999L605.8930000000001,483.5169999999999L607.3310000000001,482.89299999999986L610.5550000000002,477.8729999999999L611.4890000000001,478.7669999999999L613.0040000000001,476.7429999999999L610.9420000000001,475.9279999999999L610.8230000000001,472.97199999999987L608.0630000000001,474.6469999999999L607.3650000000001,477.1369999999999L606.2370000000001,477.2159999999999L603.124,475.07999999999987L603.822,472.58999999999986L601.915,471.5029999999999L601.1379999999999,472.8649999999999L599.2339999999999,474.30599999999987L596.823,474.7359999999999L593.361,473.8439999999999L591.61,472.48399999999987L591.997,470.5389999999999L595.299,466.6469999999999L598.372,466.95499999999987L600.357,469.16999999999985L604.13,469.5169999999998L605.181,470.83799999999985L608.72,470.32899999999984Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    <MapStateLabel
      x="407.55"
      y="322.335"
      transform="matrix(0.741,0,0,0.741,105.5555,83.4848)"
      textY="7.4990624999999795"
      className={getMapLabelClassName(abbr)}
    >
      {abbr}
    </MapStateLabel>
  </>
)

export default Louisiana
