import { css } from 'emotion'
import { rgb } from '../../../themes/utils'

// @TODO need better configuration options.
const baseNavItem = variant => {
  const { hover, active } = variant
  return css`
    display: inline-block;
    color: ${rgb(variant.color)};
    text-decoration: ${variant.decoration};
    &:focus { 
      outline: none; 
    }
    &:hover {
      color: ${rgb(hover.color)};
      text-decoration: ${hover.decoration};
    }
    &:active {
      color: ${rgb(active.color)};
      text-decoration: ${active.decoration};
    }
    &.active {
      border-color: ${rgb(active.color)};
    }
  `
}

export const navItemInline = () => {
  return css`
    display: inline-block;
    border-bottom: 2px solid transparent;
    padding: 1em .5em calc(1em - 2px) .5em;
  `
}

export const navItemStacked = () => {
  return css`
    display: block;
    border-left: 2px solid transparent;
    padding: .5em 1em .5em calc(1em - 2px);
  `
}

export const navMenuItem = () => {
  return css`
    display: block;
    border: none;
    padding: .5em 1em;
    white-space: nowrap;
  `
}

export default baseNavItem
