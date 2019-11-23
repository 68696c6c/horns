import React from 'react'

import {
  handleProps,
  elementDefaultProps,
  elementPropTypes,
  paddedDefaultProps,
  paddedPropTypes,
} from '../../utils'
import * as Styled from './styles'

// Typography is a wrapper component for blocks of text
const Typography = ({ children, ...others }) => (
  <Styled.Button {...handleProps(others, 'button')}>{children}</Styled.Button>
)

Typography.propTypes = {
  ...elementPropTypes(),
  ...paddedPropTypes(),
}

Typography.defaultProps = {
  ...elementDefaultProps('prominent'),
  ...paddedDefaultProps('small'),
}

export default Typography
