import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './base'

const Link = ({ href, variant, className, children, ...others }) => (
  <StyledLink href={href} variant={variant} className={className} {...others}>{children}</StyledLink>
)

Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Link
