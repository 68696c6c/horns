/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import { navItemStacked } from './items/base'

const Styled = styled('nav')`
  .nav-item, a {
    ${({ theme }) => navItemStacked(theme)};
  }
`

export const NavStacked = ({ className, children, ...others }) => (
  <Styled className={className} {...others}>{children}</Styled>
)

export default NavStacked
