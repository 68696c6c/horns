import { css } from 'emotion'
import { rgb } from '../../../themes/utils'

export const baseInput = (theme) => {
  return css`
    display: block;
    background: ${rgb(theme.colors.copy.light)};
    color: ${rgb(theme.colors.copy.dark)};
    border: 2px solid ${rgb(theme.colors.neutral.dark)};
    border-radius: ${theme.config.radius};
    margin: 0 0 1em 0;
    padding: .5rem;
    font-size: 1em;
    &.error {
      border: 2px solid ${rgb(theme.colors.danger.default)};
      &::placeholder {
        color: ${rgb(theme.colors.danger.default)};
      }
    }
  `
}
