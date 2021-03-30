import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'react-emotion'
import { StyledLinkButton } from './base'

const LinkButton = ({ href, variant, className, children, ...others }) => (
  <StyledLinkButton href={href} variant={variant} className={cx(className, 'button')} {...others}>
    {children}
  </StyledLinkButton>
)

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