import React from 'react'

import {
  handleProps,
  elementDefaultProps,
  elementPropTypes,
  paddedDefaultProps,
  paddedPropTypes,
  flexPropTypes,
  flexDefaultProps,
  sizableDefaultProps,
  sizeablePropTypes,
} from '../../../utils'
import * as Styled from './styles'

const Box = ({ children, ...others }) => (
  <Styled.Box {...handleProps(others, 'box')}>{children}</Styled.Box>
)

Box.propTypes = {
  ...elementPropTypes(),
  ...paddedPropTypes(),
  ...flexPropTypes(),
  ...sizeablePropTypes(),
}

Box.defaultProps = {
  ...elementDefaultProps(),
  ...paddedDefaultProps('small'),
  ...flexDefaultProps(),
  ...sizableDefaultProps(),
}

export default Box
