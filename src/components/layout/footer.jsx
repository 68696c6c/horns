import React from 'react'
// import PropTypes from 'prop-types'
import { handleProps } from '../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Footer = ({ heck, darn, children, ...others }) => (
  <Styled.Footer {...handleProps(others)}>{children}</Styled.Footer>
)

export default Footer

Footer.propTypes = Styled.layoutPropTypes()
Footer.defaultProps = Styled.layoutDefaultProps()
