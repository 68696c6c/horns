/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import { getMapStateClassName, getMapLabelClassName } from '../utils'

const abbr = 'GU'

const Guam = ({
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
  <Styled.MapStateWrapper
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
    <Styled.MapState
      d="M531,516C531,516,531,516,531,516C532,516,532,517,532,517C533,517,533,517,534,518C534,518,535,518,535,519C535,519,535,519,535,519C536,520,534,520,536,520C536,520,538,520,538,521C539,521,539,521,540,521C540,521,539,522,539,522C539,523,539,523,539,524C539,525,539,525,538,525C538,526,538,526,538,527C537,527,537,527,536,527C535,527,535,528,534,528C534,528,534,529,534,529C533,530,532,529,532,530C532,531,532,531,531,531C531,531,530,532,530,532C529,532,529,532,528,532C528,532,527,533,527,534C526,534,526,534,526,535C526,535,525,534,524,535C524,535,524,536,524,536C524,537,523,537,523,537C523,537,523,538,523,539C523,539,523,540,523,540C523,541,523,542,522,542C522,542,523,543,523,543C523,543,523,544,523,544C523,545,523,545,523,546C523,546,522,546,522,546C521,547,521,547,520,547C520,548,520,548,519,548C519,549,518,549,518,549C517,549,516,549,516,549C515,549,515,548,514,548C514,548,514,548,513,547C513,547,513,546,513,546C512,545,513,545,512,545C512,544,512,544,512,543C512,543,512,542,511,542C511,541,510,541,510,540C510,540,511,540,511,539C511,539,511,538,512,538C512,537,512,537,512,536C512,536,512,536,512,536L509,533C509,532,510,532,511,533C511,533,512,533,512,533C513,533,513,532,513,533C513,534,513,533,513,533C515,532,514,532,513,533C513,533,515,533,514,532C514,532,513,532,513,531C513,531,515,531,516,531C516,532,517,531,517,531C518,531,519,531,519,531C520,531,521,530,521,530C522,530,522,530,523,530C523,529,523,528,523,528C523,527,525,528,525,528C526,528,526,527,526,527C526,526,526,526,527,526C528,525,528,525,528,524C528,523,529,523,529,522C529,521,529,521,529,520C530,519,530,519,531,519C531,518,531,518,531,517C531,516,531,516,530,516"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="407.55"
        y="400.14"
        transform="matrix(0.741,0,0,0.741,105.5555,103.6363)"
        textY="7.507187499999986"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Guam.propTypes = {
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

Guam.defaultProps = {
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

export default Guam
