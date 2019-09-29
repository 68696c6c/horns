/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'MP'

const NorthernMarianaIslands = ({ variant, showLabel }) => (
  <Styled.MapStateWrapper variant={variant}>
    <Styled.MapState
      d="M572,525C572,525,574,523,574,523C574,523,576,522,576,522C576,522,572,525,572,525ZM572,535C572,535,576,539,576,539C576,539,575,535,575,535C575,535,572,535,572,535ZM581,546C581,546,583,552,583,552C583,552,583,552,583,552C583,552,586,546,586,546C586,546,581,546,581,546ZM590,558C590,558,590,564,590,564C590,564,594,566,594,566C594,566,595,560,595,560C595,560,590,558,590,558ZM607,574C607,574,603,580,603,580C603,580,604,583,604,583C604,583,610,586,610,586C610,586,612,582,612,582C612,582,612,576,612,576C612,576,607,574,607,574Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="422.37"
        y="426.075"
        transform="matrix(0.741,0,0,0.741,109.3938,110.3534)"
        textY="7.504687499999989"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

NorthernMarianaIslands.propTypes = {
  showLabel: PropTypes.bool,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

NorthernMarianaIslands.defaultProps = {
  showLabel: true,
  variant: 'custom',
}

export default NorthernMarianaIslands
