/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
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
