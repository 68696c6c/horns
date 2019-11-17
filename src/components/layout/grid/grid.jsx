import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, layoutPropTypes, layoutDefaultProps } from '../../../utils'
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
  ...layoutPropTypes(),
  variant: PropTypes.oneOf([VARIANT_HALVES, VARIANT_THIRDS]),
}

Grid.defaultProps = {
  ...layoutDefaultProps(),
  variant: VARIANT_HALVES,
}

export default Grid
