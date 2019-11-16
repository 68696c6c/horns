import React from 'react'

import { handleProps } from '../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Header = ({ children, ...others }) => (
  <Styled.Header {...handleProps(others)}>{children}</Styled.Header>
)

Header.propTypes = Styled.layoutPropTypes()

Header.defaultProps = Styled.layoutDefaultProps()

export default Header
