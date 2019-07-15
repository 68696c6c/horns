/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { wrapperStyle } from './base'

const Styled = styled('div')`
  ${({ variant, theme }) => wrapperStyle(theme.colors[variant].default, theme)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
`

const WrapperBlock = ({ variant, children }) => <Styled variant={variant} className="wrapper-columns">{children}</Styled>

WrapperBlock.propTypes = {
  variant: PropTypes.string,
}

WrapperBlock.defaultProps = {
  variant: 'background',
}

export default WrapperBlock
