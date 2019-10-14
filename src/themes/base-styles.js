/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core'
import { modeCSS } from './mode'
import { rgb, hoverStates } from './utils'

export const getBaseStyles = theme => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.fonts.default.family};
    margin: 0;
    padding: 0;
    ${modeCSS(theme)};
    min-width: ${theme.breakpoints.min};
    #___gatsby {
      ${modeCSS(theme)};
    }
  }

  a {
    ${hoverStates(theme.links.copy)};
    &.primary {
      ${hoverStates(theme.links.primary)};
    }
    &.secondary {
      ${hoverStates(theme.links.secondary)};
    }
    &.tertiary {
      ${hoverStates(theme.links.tertiary)};
    }
    &.success {
      ${hoverStates(theme.links.success)};
    }
    &.danger {
      ${hoverStates(theme.links.danger)};
    }
    &.info {
      ${hoverStates(theme.links.info)};
    }
    &.warning {
      ${hoverStates(theme.links.warning)};
    }
    &.light {
      ${hoverStates(theme.links.light)};
    }
    &.dark {
      ${hoverStates(theme.links.dark)};
    }
  }

  .Toastify__toast {
    &.Toastify__toast--success {
      background-color: ${rgb(theme.colors.success.default)};
    }
    &.Toastify__toast--error {
      background-color: ${rgb(theme.colors.danger.default)};
    }
    &.Toastify__toast--info {
      background-color: ${rgb(theme.colors.info.default)};
    }
    &.Toastify__toast--warning {
      background-color: ${rgb(theme.colors.warning.default)};
    }
    &.Toastify__toast--default {
      color: ${rgb(theme.colors.copy.default)};
    }
  }
`
