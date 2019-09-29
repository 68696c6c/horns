/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'VI'

const VirginIslands = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M678,500C678,500,676,502,676,502C676,502,674,503,674,503C674,503,674,505,674,505C674,505,677,506,677,506C677,506,680,506,680,506C680,506,682,508,682,508C682,508,684,508,684,508C684,508,686,507,686,507C686,507,691,506,691,506C691,506,694,505,694,505C694,505,696,504,696,504C696,504,695,502,695,502C695,502,692,502,692,502C692,502,685,500,685,500C685,500,678,500,678,500ZM698,502C698,502,698,503,698,503C698,503,699,504,699,504C699,504,702,504,702,504C702,504,703,505,703,505C703,505,705,504,705,504C705,504,705,503,705,503C705,503,705,503,705,503C705,503,707,501,707,501C707,501,708,500,708,500C708,500,706,499,706,499C706,499,704,500,704,500C704,500,701,499,701,499C701,499,700,500,700,500C700,500,700,501,700,501C700,501,698,502,698,502ZM691,530C691,530,694,529,694,529C694,529,697,530,697,530C697,530,700,528,700,528C700,528,701,528,701,528C701,528,702,530,702,530C702,530,703,532,703,532C703,532,706,530,706,530C706,530,707,531,707,531C707,531,713,530,713,530C713,530,714,534,714,534C714,534,711,535,711,535C711,535,707,535,707,535C707,535,699,537,699,537C699,537,696,537,696,537C696,537,691,538,691,538C691,538,689,537,689,537C689,537,688,538,688,538C688,538,684,538,684,538C684,538,682,537,684,536C686,534,685,531,685,531C685,531,691,530,691,530Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="503.88"
        y="384.579"
        transform="matrix(0.741,0,0,0.741,130.5049,99.606)"
        textY="7.493062500000008"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

VirginIslands.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

VirginIslands.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default VirginIslands
