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

const abbr = 'PR'

const PuertoRico = ({
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
      d="M591,514C591,514,592,512,592,512C592,512,594,512,594,512C594,512,596,514,596,514C596,514,605,515,605,515C605,515,614,514,614,514C614,514,617,514,617,514C617,514,620,515,620,515C620,515,622,514,622,514C622,514,625,514,625,514C625,514,631,514,631,514C631,514,637,516,637,516C637,516,639,518,639,518C639,518,642,518,642,518C642,518,643,521,643,521C643,521,642,523,642,523C642,523,638,524,638,524C638,524,636,525,636,525C636,525,635,527,635,527C635,527,633,530,633,530C633,530,630,531,630,531C630,531,624,531,624,531C624,531,619,531,619,531C619,531,617,530,617,530C617,530,617,530,617,530C617,530,612,530,612,530C612,530,609,529,609,529C609,529,605,530,605,530C605,530,600,530,600,530C600,530,597,528,597,528C597,528,594,529,594,529C594,529,590,530,590,530C590,530,590,527,590,527C590,527,591,526,591,526C591,526,592,523,592,523C592,523,591,520,591,520C591,520,587,517,587,517C587,517,588,516,588,516C588,516,591,514,591,514ZM646,528C646,528,644,529,644,529C644,529,649,530,649,530C649,530,654,529,654,529C654,529,656,527,656,527C656,527,652,527,652,527C652,527,646,528,646,528ZM657,523C657,523,655,522,655,522C655,522,657,520,657,520C657,520,658,522,658,522C658,522,657,523,657,523Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <MapStateLabel
        x="459.42"
        y="403.84499999999997"
        transform="matrix(0.741,0,0,0.741,118.9898,104.5959)"
        textY="7.49343749999997"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </MapStateLabel>
    )}
  </MapStateWrapper>
)

PuertoRico.propTypes = {
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

PuertoRico.defaultProps = {
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

export default PuertoRico
