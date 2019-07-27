import { css } from '@emotion/core'
import { rgb } from '../../themes/utils'
import { font } from '../utils'

const baseButton = (theme, variant) => {
  const config = theme.buttons[variant]
  return css`
    display: inline-block;
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
    ${font(theme, 'default', config.font)};
    text-align: center;
    cursor: pointer;
    background: ${rgb(config.background)};
    color: ${rgb(config.color)};
    border-radius: ${config.radius};
    border: ${config.border};
    text-decoration: ${config.decoration};
    &:hover {
      background: ${rgb(config.hover.background)};
      color: ${rgb(config.hover.color)};
      border: ${config.hover.border};
      text-decoration: ${config.hover.decoration};
    }
    &:active {
      background: ${rgb(config.hover.background)};
      color: ${rgb(config.hover.color)};
      border: ${config.hover.border};
      text-decoration: ${config.active.decoration};
    }
  `
}

export default baseButton
