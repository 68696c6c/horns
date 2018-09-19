import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import baseButton from '../buttons/base'

// @TODO use link text-decoration settings.
const Styled = styled('a')`
  ${({ variant, theme }) => baseButton(theme.buttons[variant], theme.config.fontWeights.bold)}
`

const LinkButton = ({ href, variant, className, children, ...others }) => {
  return <Styled href={href} variant={variant} className={cx(className, 'button')} {...others}>{children}</Styled>
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
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

LinkButton.defaultProps = {
  variant: 'neutral',
}

export default LinkButton
