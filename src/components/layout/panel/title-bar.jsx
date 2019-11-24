import React from 'react'

import {
  handleProps,
  layoutDefaultProps,
  layoutPropTypes,
} from '../../../mixins'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const TitleBar = ({ children, ...others }) => (
  <Styled.TitleBar {...handleProps(others)}>{children}</Styled.TitleBar>
)

TitleBar.propTypes = layoutPropTypes()

TitleBar.defaultProps = layoutDefaultProps()

export default TitleBar
