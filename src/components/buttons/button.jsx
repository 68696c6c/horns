import React from 'react'

import {
  handleProps,
  elementDefaultProps,
  elementPropTypes,
  paddedDefaultProps,
  paddedPropTypes,
} from '../../utils'
import * as Styled from './styles'

const Button = ({ children, ...others }) => (
  <Styled.Button {...handleProps(others, 'button')}>{children}</Styled.Button>
)

Button.propTypes = {
  ...elementPropTypes(),
  ...paddedPropTypes(),
}

Button.defaultProps = {
  ...elementDefaultProps(),
  ...paddedDefaultProps('small'),
}

export default Button
