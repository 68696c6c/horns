import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import baseNavItem from './base'

const Styled = styled('a')`
  ${({ variant, theme }) => baseNavItem(theme.links[variant])}
`

const NavItem = ({ href, active, variant, className, children, ...others }) => {
  const activeClass = active ? 'active' : ''
  return <Styled href={href} variant={variant} className={cx(className, 'nav-item', activeClass)} {...others}>{children}</Styled>
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
}

NavItem.defaultProps = {
  active: false,
  variant: 'default',
}

export default NavItem
