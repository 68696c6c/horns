/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import {
  getMapLabelBGClassName,
  getMapStateClassName,
  getMapLabelClassName,
} from '../utils'

const abbr = 'DE'

const Delaware = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M827.78,226.72L824.552,226.684L822.9200000000001,228.28L822.143,229.642L822.611,231.353L826.631,245.19500000000002L829.674,256.315L839.901,254.206L840.329,254.089L840.4839999999999,253.817L839.7429999999999,251.951L838.6529999999999,251.32999999999998L839.1959999999999,249.11299999999997L838.338,246.81899999999996L836.783,247.01499999999996L833.67,244.87899999999996L833.591,243.75099999999998L831.84,242.39099999999996L830.904,238.96899999999997L829.891,236.94899999999996L826.661,234.38499999999996L826.8929999999999,232.71199999999996L825.569,231.23499999999996L827.7819999999999,226.72199999999995Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <Styled.MapStateLabelBackground
          x="631.803"
          y="210.13901562499998"
          transform="matrix(0.741,0,0,0.741,169.4645,58.1515)"
          className={getMapLabelBGClassName(abbr)}
        />
        <Styled.MapStateLabel
          x="654.303"
          y="224.523"
          transform="matrix(0.741,0,0,0.741,169.4645,58.1515)"
          textY="7.499562499999996"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </Styled.MapStateLabel>
      </>
    )}
  </Styled.MapStateWrapper>
)

Delaware.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

Delaware.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default Delaware
