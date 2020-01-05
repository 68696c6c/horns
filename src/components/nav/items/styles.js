import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  Clickable,
  Colorway,
  ColorwayInteractive,
  ColorwayTextInteractive,
  Font,
} from '../../../mixins'

export const PaginationNav = styled.nav(
  Colorway,
  () =>
    css`
      display: inline-block;
    `
)

const NavItem = styled.a(ColorwayInteractive, Clickable, Font)

const inlineStyles = ({ theme, current, colorway }) => {
  const { inline: itemConfig } = theme.navItems
  const { padding, lineSize } = itemConfig
  const cw = theme.colors.getShade(colorway)
  return css`
    display: inline-block;
    padding: ${padding} ${padding} calc(${padding} - ${lineSize});
    border-bottom: ${lineSize} solid transparent;
    ${current &&
      css`
        border-color: ${cw.border};
      `}
  `
}

export const NavItemInline = styled(NavItem)(inlineStyles)

export const Page = styled.a(
  ColorwayTextInteractive,
  Clickable,
  Font,
  inlineStyles
)

export const NavItemStacked = styled(NavItem)(
  ({ theme, current, colorway }) => {
    const { stacked: itemConfig } = theme.navItems
    const { padding, lineSize } = itemConfig
    const cw = theme.colors.getShade(colorway)
    return css`
      display: block;
      padding: ${padding} ${padding} ${padding} calc(${padding} - ${lineSize});
      border-left: ${lineSize} solid transparent;
      ${current &&
        css`
          border-color: ${cw.border};
        `}
    `
  }
)

export const NavItemMenu = styled.span(
  () =>
    css`
      display: inline-block;
    `
)

export const MenuContainer = styled.span(
  () => css`
    display: block;
    position: relative;
  `
)

export const Menu = styled.nav(Colorway, ({ theme, open, level }) => {
  const { stacked: itemConfig } = theme.navItems
  const { padding } = itemConfig
  return css`
    display: ${open ? 'flex' : 'none'};
    flex-direction: column;
    > a,
    > .nav-item-menu > a {
      white-space: nowrap;
      padding-left: calc(${padding} + ${level}em);
    }
  `
})
