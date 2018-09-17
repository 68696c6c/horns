import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './base'

const LinkTel = ({ phone, className, children, ...others}) => (
  <StyledLink href={`tel:${phone}`} className={className} {...others}>{children}</StyledLink>
)

LinkTel.propTypes = {
  children: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}

export default LinkTel
