import React from 'react'

import { handleProps, fontPropTypes, fontDefaultProps } from '../../mixins'
import * as Styled from './styles'

const Pre = ({ children, ...others }) => (
  <Styled.Pre {...handleProps(others, 'pre')}>{children}</Styled.Pre>
)

Pre.propTypes = {
  ...fontPropTypes(),
}

Pre.defaultProps = {
  ...fontDefaultProps('code'),
}

export default Pre
