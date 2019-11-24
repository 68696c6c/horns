import React from 'react'

import {
  handleProps,
  elementDefaultProps,
  elementPropTypes,
  paddedDefaultProps,
  paddedPropTypes,
  fontDefaultProps,
  fontPropTypes,
} from '../../mixins'
import * as Styled from './styles'

const Button = ({ children, ...others }) => (
  <Styled.Button {...handleProps(others, 'button')}>{children}</Styled.Button>
)

Button.propTypes = {
  ...elementPropTypes(),
  ...paddedPropTypes(),
  ...fontPropTypes(),
}

Button.defaultProps = {
  ...elementDefaultProps('prominent'),
  ...paddedDefaultProps('small'),
  ...fontDefaultProps('button'),
}

export default Button
