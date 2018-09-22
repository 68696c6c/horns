import React from 'react'
import PropTypes from 'prop-types'
import StyledLink, { StyledLinkButton } from './base'

const LinkPhone = ({ phone, type, variant, children, ...others }) => {
  let Tag = StyledLink
  if (type === 'button') {
    Tag = StyledLinkButton
    if (variant === 'copy') {
      variant = 'neutral'
    }
  }
  return <Tag href={`tel:${phone}`} variant={variant} {...others}>{children}</Tag>
}

LinkPhone.propTypes = {
  children: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'link',
    'button',
  ]),
  variant: PropTypes.string,
}

LinkPhone.defaultProps = {
  type: 'link',
  variant: 'copy',
}

export default LinkPhone
