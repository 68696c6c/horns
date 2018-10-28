import React from 'react'
import styled from 'react-emotion'
import { navItemStacked } from './items/base'

const Styled = styled('nav')`
  .nav-item, a {
    ${navItemStacked()};
  }
`

export const NavStacked = ({ className, children, ...others }) => (
  <Styled className={className} {...others}>{children}</Styled>
)

export default NavStacked
