/** generated using horns-cli */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../../utils'

import * as Styled from '../us-map.styles'
import {
  getMapStateClassName,
  getMapLabelClassName,
} from '../utils'

const abbr = 'NE'

const Nebraska = ({
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
      d="M478.87,204.98L476.925,204.593L475.48400000000004,202.689L475.40500000000003,201.561L473.732,201.329L472.95300000000003,200.163L468.67400000000004,198.806L465.833,196.82500000000002L462.72200000000004,197.217L460.194,197.21900000000002L457.12100000000004,196.91100000000003L455.761,198.66200000000003L454.63300000000004,198.74100000000004L450.82000000000005,196.56600000000003L447.0450000000001,193.69100000000003L429.2320000000001,193.27900000000002L415.6580000000001,192.39600000000002L399.55800000000005,191.51500000000001L388.50800000000004,190.63000000000002L374.934,189.747L358.44300000000004,188.28300000000002L356.55400000000003,207.423L355.39900000000006,220.842L354.2420000000001,231.733L366.5330000000001,232.967L378.27900000000005,233.89000000000001L387.10800000000006,234.23200000000003L385.4940000000001,256.052L396.5440000000001,256.937L407.0450000000001,257.511L427.7750000000001,258.504L445.4320000000001,259.189L455.8160000000001,259.336L469.97300000000007,259.829L480.3570000000001,259.976L497.7800000000001,259.805L496.1460000000001,258.873L496.22300000000007,257.473L492.56300000000005,252.49800000000002L491.51000000000005,248.64900000000003L490.34200000000004,246.90000000000003L490.41900000000004,245.50000000000003L488.66800000000006,244.14000000000001L489.1720000000001,242.62300000000002L488.9740000000001,238.54000000000002L488.5850000000001,237.95700000000002L488.5040000000001,234.30100000000002L487.8420000000001,233.56300000000002L488.5400000000001,231.073L487.2950000000001,230.72400000000002L487.72100000000006,228.079L485.1530000000001,226.25300000000001L484.99500000000006,223.997L485.45900000000006,220.65200000000002L484.4080000000001,219.33100000000002L484.1330000000001,216.64800000000002L482.5370000000001,215.01600000000002L482.1860000000001,213.73300000000003L481.0180000000001,211.98400000000004L481.1330000000001,209.88400000000004L480.2370000000001,208.29000000000005L480.3900000000001,205.49000000000004L478.8730000000001,204.98600000000005Z"
      transform="matrix(0.741,0,0,0.741,0,0)"
      className={getMapStateClassName(abbr)}
    />
    {showLabel && (
      <Styled.MapStateLabel
        x="311.21999999999997"
        y="166.725"
        transform="matrix(0.741,0,0,0.741,80.606,43.1818)"
        textY="7.498437499999994"
        className={getMapLabelClassName(abbr)}
      >
        {abbr}
      </Styled.MapStateLabel>
    )}
  </Styled.MapStateWrapper>
)

Nebraska.propTypes = {
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

Nebraska.defaultProps = {
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

export default Nebraska
