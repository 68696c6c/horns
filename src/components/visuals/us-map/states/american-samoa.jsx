/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'AS'

const AmericanSamoa = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M681,568C681,568,681,568,682,568C682,568,682,568,682,568C682,568,682,568,682,568C681,568,681,568,681,568ZM682,569C682,569,682,569,682,569C682,569,682,569,682,568C682,568,682,568,683,568C683,568,683,568,683,568C683,568,683,568,683,568C683,568,683,569,683,569C683,569,683,569,683,569C683,569,682,569,682,569ZM692,574C692,573,691,573,690,573C690,573,690,573,690,573C690,573,690,572,690,572C689,572,689,572,689,573C688,573,688,573,688,573C687,573,686,572,686,571C686,571,686,571,686,571C686,571,685,571,685,571C685,571,685,570,684,570C684,570,684,569,684,569C684,569,684,569,684,569C684,568,685,568,685,568C686,568,687,568,687,567C688,567,688,567,689,567C690,567,690,567,690,567C691,568,691,568,691,568C691,568,691,568,692,568C692,568,692,568,692,568C692,568,692,568,693,569C693,569,693,569,694,569C695,569,695,569,696,569C696,570,696,570,696,569C696,569,696,569,697,570C697,570,697,570,697,570C697,570,697,570,697,570C697,570,698,570,698,570C698,570,698,570,698,571C697,571,697,571,697,571C697,571,698,571,698,571C698,571,699,571,699,571C700,572,700,572,700,572C701,572,701,573,701,573C701,573,701,574,701,574L701,574L699,574C697,574,696,574,695,574C695,574,694,574,694,574C693,574,693,574,693,574C692,574,692,574,692,574L692,574ZM669,566C669,566,669,565,669,565C668,565,668,564,667,563C666,562,666,562,666,562C666,562,666,562,666,562C666,562,664,560,663,560C663,559,663,559,663,559C663,559,663,559,663,558C663,558,664,558,664,559C665,559,665,559,666,559C666,559,667,559,667,559C667,559,668,559,668,559C668,559,668,559,669,558C670,558,671,558,672,558C673,557,673,557,674,557C674,557,675,557,676,557C676,557,676,557,676,557C677,558,677,558,677,559C678,560,679,561,679,561C679,561,679,561,679,561C679,561,680,563,680,563L680,563L680,564C680,564,679,564,679,565C679,565,679,565,679,565C679,565,679,566,679,566C679,567,679,567,679,567C679,567,678,567,678,567C678,567,677,566,677,566C677,566,676,566,676,566C676,566,675,566,675,566C675,566,675,566,674,566C674,566,674,566,674,566C674,566,673,567,673,567C673,567,673,567,672,567C672,567,672,567,672,567C672,567,671,567,671,567L670,567L669,566Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="492.765"
        y="429.78"
        transform="matrix(0.741,0,0,0.741,127.6261,111.313)"
        textY="7.506562499999973"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

AmericanSamoa.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

AmericanSamoa.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default AmericanSamoa
