import React from 'react'
import PropTypes from 'prop-types'

import { palletColorShades } from '../../../config'
import {
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
  colorway: PropTypes.oneOf(palletColorShades),
  height: PropTypes.string,
  width: PropTypes.string,
  x: PropTypes.oneOf(flexOptionsX),
  y: PropTypes.oneOf(flexOptionsY),
}

Box.defaultProps = {
  children: null,
  colorway: '',
  height: 'auto',
  width: 'auto',
  x: 'center',
  y: 'center',
}

export default Box
