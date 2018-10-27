import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import baseButton from './base'

const Styled = styled('button')`
  ${({ variant, theme }) => baseButton(theme.buttons[variant], theme.config.fontWeights.bold)}
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
