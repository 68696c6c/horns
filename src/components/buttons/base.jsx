import { css } from 'emotion'
import { rgb } from '../../themes/utils'

const baseButton = (variant, weight) => {
  return css`
    display: inline-block;
    padding: .6em 2em;
    font-weight: ${weight};
    text-align: center;
    cursor: pointer;
    background: ${rgb(variant.background)};
    color: ${rgb(variant.color)};
    border-radius: ${variant.radius};
    border: ${variant.border};
    &:hover {
      background: ${rgb(variant.hover.background)};
      color: ${rgb(variant.hover.color)};
      border: ${variant.hover.border};
    }
    &:active {
      background: ${ rgb(variant.hover.background)};
      color: ${ rgb(variant.hover.color)};
      border: ${variant.hover.border};
    }
  `
}

export default baseButton
