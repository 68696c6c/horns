import React from 'react'
import PropTypes from 'prop-types'

import { palletColorShades } from '../../../config/utils'
import {
  flexOptionsX,
  flexOptionsY,
  propTypeChildren,
  toClassNames,
} from '../../../utils'
import * as Styled from './styles'

const Box = ({ className, children, ...others }) => (
  <Styled.Box className={toClassNames(className, 'box')} {...others}>
    {children}
  </Styled.Box>
)

Box.propTypes = {
  children: propTypeChildren(),
  className: PropTypes.string,
  colorway: PropTypes.oneOf(palletColorShades),
  height: PropTypes.string,
  width: PropTypes.string,
  x: PropTypes.oneOf(flexOptionsX),
  y: PropTypes.oneOf(flexOptionsY),
}

Box.defaultProps = {
  children: null,
  className: '',
  colorway: '',
  height: 'auto',
  width: 'auto',
  x: 'center',
  y: 'center',
}

export default Box
