/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import baseButton from './base'

const Styled = styled('button')`
  ${({ theme, variant }) => baseButton(theme, variant)}
`

const Button = ({ variant, children, ...others }) => (
  <Styled variant={variant} {...others}>{children}</Styled>
)

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  variant: 'neutral',
}

export default Button
