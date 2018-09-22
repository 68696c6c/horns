import React from 'react'
import PropTypes from 'prop-types'
import StyledLink, { StyledLinkButton } from './base'

const LinkEmail = ({ email, subject, body, type, variant, children, ...others }) => {
  let href = `mailto:${email}?`
  href += subject ? `subject=${subject}&` : ''
  href += body ? `body=${body}` : ''
  let Tag = StyledLink
  if (type === 'button') {
    Tag = StyledLinkButton
    if (variant === 'copy') {
      variant = 'neutral'
    }
  }
  return <Tag href={href} variant={variant} {...others}>{children}</Tag>
}

LinkEmail.propTypes = {
  children: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
  type: PropTypes.oneOf([
    'link',
    'button',
  ]),
  variant: PropTypes.string,
}

LinkEmail.defaultProps = {
  type: 'link',
  variant: 'copy',
}

export default LinkEmail
