import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../../config'
import { flexOptionsX, flexOptionsY, handleProps } from '../../../utils'
import { elementDefaultProps, elementPropTypes } from '../../../utils/component'
import * as Styled from './styles'

const Box = ({ children, ...others }) => (
  <Styled.Box {...handleProps(others, 'box')}>{children}</Styled.Box>
)

Box.propTypes = {
  ...elementPropTypes(),
  compact: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
  height: PropTypes.string,
  width: PropTypes.string,
  x: PropTypes.oneOf(flexOptionsX),
  y: PropTypes.oneOf(flexOptionsY),
}

Box.defaultProps = {
  ...elementDefaultProps(),
  compact: false,
  spacing: 'small',
  height: 'auto',
  width: 'auto',
  x: 'center',
  y: 'center',
}

export default Box
