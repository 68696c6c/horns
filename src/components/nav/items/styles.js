import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Padded } from '../../../utils'

const NavItem = styled.a(Colorway, ({ theme }) => {
  return css`
    text-decoration: ${theme.navItems.inline.decoration};
    &:focus {
      outline: none;
    }
    &:hover {
      text-decoration: ${theme.navItems.inline.hover.decoration};
    }
    &:active {
      text-decoration: ${theme.navItems.inline.active.decoration};
    }
  `
})

export const NavItemInline = styled(NavItem)(({ theme }) => {
  return css`
    display: inline-block;
    ${theme.navItems.inline.border};
    &.active {
      ${theme.navItems.inline.current.border};
    }
  `
})

export const NavItemStacked = styled(NavItem)(({ theme }) => {
  return css`
    display: block;
    ${theme.navItems.stacked.border};
    &.active {
      ${theme.navItems.stacked.current.border};
    }
  `
})

export const MenuContainer = styled.span(
  () =>
    css`
      position: relative;
    `
)

export const Menu = styled.nav(Colorway, ({ open }) => {
  return css`
    display: ${open ? 'block' : 'none'};
  `
})

export const NavMenuItem = styled.a(Padded, () => {
  return css`
    display: block;
    border: none;
    white-space: nowrap;
  `
})
