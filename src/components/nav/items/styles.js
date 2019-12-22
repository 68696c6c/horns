import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  Padded,
  Clickable,
  Colorway,
  ColorwayTextInteractive,
  Decoratable,
  Font,
} from '../../../mixins'

const NavItem = styled.a(
  ColorwayTextInteractive,
  Clickable,
  Decoratable,
  Font,
)

export const NavItemInline = styled(NavItem)(({ theme, current }) => {
  const { inline: itemConfig } = theme.navItems
  const currentStyle = itemConfig.current.border
  return css`
    display: inline-block;
    padding: ${itemConfig.padding};
    ${current &&
      css`
        border-bottom: ${currentStyle};
      `}
  `
})

export const NavItemStacked = styled(NavItem)(({ theme, current }) => {
  const { stacked: itemConfig } = theme.navItems
  const currentStyle = itemConfig.current.border
  return css`
    display: block;
    padding: ${itemConfig.padding};
    ${current &&
      css`
        border-left: ${currentStyle};
      `}
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
