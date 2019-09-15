/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { font } from '../utils'

const Styled = styled('span')`
  ${({ theme, size, weight }) => font(theme, size, weight)};
`

const InlineText = ({ children, ...others }) => (
  <Styled {...others}>{children}</Styled>
)

InlineText.propTypes = {
  children: PropTypes.string,
  weight: PropTypes.oneOf(['default', 'light', 'lighter', 'semiBold', 'bold']),
  size: PropTypes.oneOf(['min', 'default', 'large', 'max']),
}

InlineText.defaultProps = {
  children: '',
  weight: 'default',
  size: 'default',
}

export default InlineText
