import React from 'react'

import { handleProps } from '../../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Footer = ({ children, ...others }) => (
  <Styled.Footer {...handleProps(others)}>{children}</Styled.Footer>
)

Footer.propTypes = Styled.layoutPropTypes()

Footer.defaultProps = Styled.layoutDefaultProps()

export default Footer
