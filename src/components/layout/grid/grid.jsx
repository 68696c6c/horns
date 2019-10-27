import React from 'react'
import PropTypes from 'prop-types'

import { breakpoints, palletColorShades } from '../../../config'
import { propTypeChildren } from '../../../utils'
import * as Styled from './styles'

const VARIANT_EQUAL = 'equal'
const VARIANT_THIRDS = 'thirds'

const Grid = ({ contained, variant, children, ...others }) => {
  console.log('contained', contained)
  let Tag = contained ? Styled.EqualCentered : Styled.Equal
  if (variant === VARIANT_THIRDS) {
    Tag = contained ? Styled.ThirdsCentered : Styled.Thirds
  }
  console.log('Tag', Tag.__filemeta.name)
  return <Tag {...others}>{children}</Tag>
}

Grid.propTypes = {
  children: propTypeChildren(),
  colorway: PropTypes.oneOf(palletColorShades),
  breakpoint: PropTypes.oneOf(breakpoints),
  contained: PropTypes.bool,
  fluid: PropTypes.bool,
  gap: PropTypes.bool,
  variant: PropTypes.oneOf([VARIANT_EQUAL, VARIANT_THIRDS]),
  side: PropTypes.string,
}

Grid.defaultProps = {
  children: null,
  colorway: '',
  breakpoint: '',
  contained: false,
  fluid: false,
  gap: true,
  variant: VARIANT_EQUAL,
  side: 'left',
}

export default Grid
