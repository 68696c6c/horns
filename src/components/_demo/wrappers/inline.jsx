/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
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
