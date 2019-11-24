import React from 'react'

import { handleProps, layoutPropTypes, layoutDefaultProps } from '../../mixins'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Header = ({ children, ...others }) => (
  <Styled.Header {...handleProps(others)}>{children}</Styled.Header>
)

Header.propTypes = layoutPropTypes()

Header.defaultProps = layoutDefaultProps()

export default Header
