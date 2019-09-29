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

const abbr = 'RI'

const RhodeIsland = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M887.59,173.12L886.7710000000001,170.126L885.3710000000001,170.049L886.4240000000001,173.898L887.5900000000001,173.119ZM884.553,169.584L882.374,168.341L881.089,166.16400000000002L880.6590000000001,163.75300000000001L874.0880000000001,165.781L876.897,176.046L877.4820000000001,178.185L877.2120000000001,180.558L880.9830000000001,178.37699999999998L882.6940000000001,177.909L882.964,175.536L882.1060000000001,173.242L882.4530000000001,169.469L884.5530000000001,169.584Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <>
        <Styled.MapStateLabelBackground
          x="668.112"
          y="187.909015625"
          transform="matrix(0.741,0,0,0.741,178.8685,52.3939)"
          className={getMapLabelBGClassName(abbr)}
        />
        <Styled.MapStateLabel
          x="690.612"
          y="202.293"
          transform="matrix(0.741,0,0,0.741,178.8685,52.3939)"
          textY="7.503937500000006"
          className={getMapLabelClassName(abbr)}
        >
          {abbr}
        </Styled.MapStateLabel>
      </>
    )}
  </Styled.MapStateWrapper>
)

RhodeIsland.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

RhodeIsland.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default RhodeIsland
