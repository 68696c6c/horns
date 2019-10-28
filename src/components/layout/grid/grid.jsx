import React from 'react'
import PropTypes from 'prop-types'

import { breakpoints, palletColorShades } from '../../../config'
import { handleProps, propTypeChildren } from '../../../utils'
import * as Styled from './styles'

const VARIANT_HALVES = 'halves'
const VARIANT_THIRDS = 'thirds'

const Grid = ({ variant, children, ...others }) => {
  let Tag = Styled.Halves
  if (variant === VARIANT_THIRDS) {
    Tag = Styled.Thirds
  }
  return <Tag {...handleProps(others, 'grid')}>{children}</Tag>
}

Grid.propTypes = {
  children: propTypeChildren(),
  colorway: PropTypes.oneOf(palletColorShades),
  breakpoint: PropTypes.oneOf(breakpoints),
  contained: PropTypes.bool,
  variant: PropTypes.oneOf([VARIANT_HALVES, VARIANT_THIRDS]),
}

Grid.defaultProps = {
  children: null,
  colorway: '',
  breakpoint: '',
  contained: false,
  variant: VARIANT_HALVES,
}

export default Grid
