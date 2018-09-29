import { css } from 'emotion'
import { rgb } from '../../../themes/utils'
import { ERROR_CLASS } from '../utils'

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
    &.${ERROR_CLASS} {
      border: 2px solid ${rgb(theme.colors.danger.default)};
      &::placeholder {
        color: ${rgb(theme.colors.danger.default)};
      }
    }
    &[disabled] {
      background: ${rgb(theme.colors.neutral.light)};
      cursor: not-allowed;
    }
  `
}
