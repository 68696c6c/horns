/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'AZ'

const Arizona = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M260.19,308.03L246.537,306.02L235.957,304.318L222.45999999999998,302.03499999999997L209.11799999999997,299.47999999999996L201.18299999999996,298.203L185.35099999999997,294.95L174.65399999999997,292.82L171.20699999999997,309.62399999999997L168.91499999999996,313.01L167.08699999999996,313.05L165.41199999999995,310.29L164.01199999999994,310.213L162.10499999999993,309.12600000000003L158.83899999999994,309.79L157.86899999999994,312.124L158.84399999999994,314.846L157.94999999999993,315.78000000000003L157.83499999999992,317.88000000000005L158.1479999999999,319.86300000000006L157.1779999999999,322.19700000000006L157.80399999999992,326.16300000000007L157.33999999999992,329.5080000000001L156.01899999999992,330.5590000000001L155.43799999999993,333.47600000000006L155.01199999999994,336.12100000000004L155.98699999999994,338.843L156.80399999999995,339.309L157.93599999999995,344.286L157.70399999999995,345.959L161.28499999999994,349.806L161.09099999999995,350.77799999999996L158.48599999999996,352.17999999999995L155.76399999999995,353.155L154.98699999999997,354.517L152.49999999999997,356.347L152.26999999999998,360.54699999999997L150.64,364.671L148.26999999999998,366.929L146.71499999999997,367.125L146.17199999999997,369.342L146.60199999999998,371.753L145.63199999999998,374.087L146.68299999999996,375.408L148.19999999999996,375.91200000000003L149.25099999999995,377.23300000000006L148.98099999999994,379.60600000000005L147.50399999999993,380.93000000000006L146.88299999999992,382.02000000000004L144.39299999999992,381.32200000000006L143.38299999999992,381.82800000000003L141.2849999999999,384.24100000000004L140.8979999999999,386.18600000000004L155.0279999999999,394.963L168.88099999999991,403.58500000000004L182.8909999999999,411.93500000000006L197.0549999999999,420.01500000000004L204.5259999999999,424.63700000000006L205.4979999999999,424.8310000000001L224.9849999999999,428.0030000000001L241.82699999999988,430.7500000000001L243.10399999999987,422.8150000000001L245.34599999999986,407.4900000000001L246.96899999999985,395.7820000000001L248.70899999999986,384.5020000000001L250.60499999999985,372.9500000000001L252.07299999999984,361.5150000000001L254.31499999999983,346.1900000000001L256.05499999999984,334.91000000000014L257.95099999999985,323.3580000000001L260.19299999999987,308.03300000000013Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="151.905"
        y="266.76"
        transform="matrix(0.741,0,0,0.741,39.3434,69.0908)"
        textY="8.095937499999991"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Arizona.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

Arizona.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default Arizona
