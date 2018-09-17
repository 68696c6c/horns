import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './base'

const LinkMailTo = ({ email, subject, body, className, children, ...others }) => {
  let href = `mailto:${email}?`
  href += subject ? `subject=${subject}&` : ''
  href += body ? `body=${body}` : ''
  return <StyledLink href={href} className={className} {...others}>{children}</StyledLink>
}

LinkMailTo.propTypes = {
  children: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
}

export default LinkMailTo
