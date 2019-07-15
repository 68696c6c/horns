/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import baseNavItem from './base'

const Styled = styled('a')`
  ${({ variant, theme }) => baseNavItem(theme, variant)}
`

const NavItem = ({ href, active, variant, className, children, ...others }) => {
  const activeClass = active ? 'active' : ''
  return <Styled href={href} variant={variant} className={(className, 'nav-item', activeClass)} {...others}>{children}</Styled>
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
  variant: PropTypes.string,
}

NavItem.defaultProps = {
  active: false,
  variant: 'none',
}

export default NavItem
