import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { wrapperStyle } from './base'

const Styled = styled('div')`
  ${({ variant, theme }) => wrapperStyle(theme.colors[variant].default, theme)};
  z-index: 999;
  position: absolute;
  width: 100vw;
  background: lime;
  top: 0;
  left: 0;
`

const WrapperFluid = ({ variant, children }) => <Styled variant={variant} className="wrapper-fluid">{children}</Styled>

WrapperFluid.propTypes = {
  variant: PropTypes.string,
}

WrapperFluid.defaultProps = {
  variant: 'background',
}

export default WrapperFluid
