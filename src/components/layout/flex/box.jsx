import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../../config'
import {
  colorwayDefaultProps,
  colorwayPropTypes,
  flexOptionsX,
  flexOptionsY,
  handleProps,
  propTypeChildren,
} from '../../../utils'
import * as Styled from './styles'

const Box = ({ children, ...others }) => (
  <Styled.Box {...handleProps(others, 'box')}>{children}</Styled.Box>
)

Box.propTypes = {
  children: propTypeChildren(),
  ...colorwayPropTypes(),
  compact: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
  height: PropTypes.string,
  width: PropTypes.string,
  x: PropTypes.oneOf(flexOptionsX),
  y: PropTypes.oneOf(flexOptionsY),
}

Box.defaultProps = {
  children: null,
  ...colorwayDefaultProps(),
  compact: false,
  spacing: 'small',
  height: 'auto',
  width: 'auto',
  x: 'center',
  y: 'center',
}

export default Box
