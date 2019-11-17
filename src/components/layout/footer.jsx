import React from 'react'

import { handleProps, layoutPropTypes, layoutDefaultProps } from '../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Footer = ({ children, ...others }) => (
  <Styled.Footer {...handleProps(others)}>{children}</Styled.Footer>
)

Footer.propTypes = layoutPropTypes()

Footer.defaultProps = layoutDefaultProps()

export default Footer
