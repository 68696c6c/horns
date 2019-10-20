/* eslint-disable import/prefer-default-export */
import React from 'react'
import { css } from '@emotion/core'

export const MODE_LIGHT = 'light'
export const MODE_DARK = 'dark'
export const MODE_DEFAULT = MODE_DARK

export const modeCSS = theme => {
  return css`
    background: ${theme.colors.background.primary};
    color: ${theme.colors.copy.base};
  `
}
