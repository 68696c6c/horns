import { css } from '@emotion/core'

import { colorVariantCSS } from '../../utils'

const baseNavItem = (theme, variant) => {
  return css`
    ${colorVariantCSS(theme, variant)};
    text-decoration: ${theme.config.linkDecorations.default};
    &:focus {
      outline: none;
    }
    &:hover {
      text-decoration: ${theme.config.linkDecorations.hover};
    }
    &:active {
      text-decoration: ${theme.config.linkDecorations.active};
    }
  `
}

export const navItemInline = theme => {
  return css`
    display: inline-block;
    ${theme.navItems.inline.border};
    padding: ${theme.navItems.inline.padding};
    &.active {
      ${theme.navItems.inline.active.border};
    }
  `
}

export const navItemStacked = theme => {
  return css`
    display: block;
    ${theme.navItems.stacked.border};
    padding: ${theme.navItems.stacked.padding};
    &.active {
      ${theme.navItems.stacked.active.border};
    }
  `
}

export const navMenuItem = theme => {
  return css`
    display: block;
    border: none;
    padding: ${theme.navItems.stacked.padding};
    white-space: nowrap;
  `
}

export default baseNavItem
