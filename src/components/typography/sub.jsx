import React from 'react'

import { handleProps, fontPropTypes, fontDefaultProps } from '../../mixins'
import * as Styled from './styles'

const Sub = ({ children, ...others }) => (
  <Styled.Sub {...handleProps(others, 'sup')}>{children}</Styled.Sub>
)

Sub.propTypes = {
  ...fontPropTypes(),
}

Sub.defaultProps = {
  ...fontDefaultProps(),
}

export default Sub
