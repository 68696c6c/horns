import { css } from 'emotion'
import { rgb } from '../../../themes/utils'

export const baseHeading = (size, margin, theme) => {
  return css`
    font-size: ${size};
    margin: ${margin};
    color: ${rgb(theme.colors.copy.default)};
    &.primary {
      color: ${rgb(theme.colors.primary.default)};
    }
    &.secondary {
      color: ${rgb(theme.colors.secondary.default)};
    }
    &.tertiary {
      color: ${rgb(theme.colors.tertiary.default)};
    }
  `
}
