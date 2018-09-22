import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { wrapperStyle } from './base'

const Styled = styled('div')`
  ${({ variant, theme }) => wrapperStyle(theme.colors[variant].default, theme)};
`

const Wrapper = ({ variant, children }) => <Styled variant={variant}>{children}</Styled>

Wrapper.propTypes = {
  variant: PropTypes.string,
}

Wrapper.defaultProps = {
  variant: 'background',
}

export default Wrapper
