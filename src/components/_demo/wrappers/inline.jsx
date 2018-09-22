import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { wrapperStyle } from './base'

const Styled = styled('div')`
  ${({ variant, theme }) => wrapperStyle(theme.colors[variant].default, theme)};
  display: inline-block;
  padding: 1rem;
`

const WrapperInline = ({ variant, children }) => <Styled variant={variant} className="wrapper-inline">{children}</Styled>

WrapperInline.propTypes = {
  variant: PropTypes.string,
}

WrapperInline.defaultProps = {
  variant: 'background',
}

export default WrapperInline
