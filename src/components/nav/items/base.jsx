import { css } from 'emotion'
import { rgb } from '../../../themes/utils'

// @TODO need better configuration options.
const baseNavItem = variant => {
  const { hover, active } = variant
  return css`
    display: inline-block;
    color: ${rgb(variant.color)};
    padding: 1rem .5rem calc(1rem - 2px) .5rem;
    text-decoration: ${variant.decoration};
    border-bottom: 2px solid transparent;
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
      border-bottom-color: ${rgb(active.color)};
    }
  `
}

export default baseNavItem
