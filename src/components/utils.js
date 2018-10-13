import React from 'react'
import { css } from 'react-emotion'
import { rgb, valueToInt } from '../themes/utils'

export const COLOR_VARIANT_NONE = 'none'

// @TODO this can't be used with component prop types because it breaks the PropsTable Docz component.
export const COLOR_VARIANTS = [
  'primary',
  'secondary',
  'tertiary',
  'light',
  'neutral',
  'dark',
  'success',
  'info',
  'warning',
  'danger',
  'background',
  COLOR_VARIANT_NONE,
]

export const colorVariantCSS = (theme, variant) => {
  let color = theme.colors.copy.default
  if (variant !== COLOR_VARIANT_NONE) {
    color = theme.colors[variant].default.isLight() ? theme.colors.copy.dark : theme.colors.copy.light
  }
  return css`
    background: ${variant === COLOR_VARIANT_NONE ? 'none' : rgb(theme.colors[variant].default)};
    color: ${rgb(color)};
  `
}

export const containerStyle = (breakpoints, fluid = false, padded = true) => {
  const min = fluid ? 0 : 20
  const max = fluid ? 0 : 50
  const vMin = padded ? 20 : 0
  const vMax = padded ? 50 : 0
  const start = valueToInt(breakpoints.small)
  const end = valueToInt(breakpoints.large)
  const multiplier = (max - min) / (end - start) * 100
  const adder = (min * end - max * start) / (end - start)
  const vAdder = (vMin * end - vMax * start) / (end - start)
  const scaledGutters = fluid ? '0px' : `calc(${multiplier}vw + ${adder}px)`
  const maxGutters = fluid ? '0px' : `calc((100% - ${breakpoints.max}) / 2)`
  return css`
    padding: ${vMin}px ${min}px;
    @media(min-width: ${breakpoints.medium}) {
      padding: calc(${multiplier}vw + ${vAdder}px) ${scaledGutters};
    }
    @media(min-width: ${breakpoints.large}) {
      padding: ${vMax}px ${max}px;
    }
    @media (min-width: ${breakpoints.max}) {
      padding: ${vMax}px ${maxGutters};
    }
  `
}

export const containerStyleHorizontal = (breakpoints, fluid = false) => {
  const min = fluid ? 0 : 20
  const max = fluid ? 0 : 50
  const start = valueToInt(breakpoints.small)
  const end = valueToInt(breakpoints.large)
  const multiplier = (max - min) / (end - start) * 100
  const adder = (min * end - max * start) / (end - start)
  const scaledGutters = fluid ? '0px' : `calc(${multiplier}vw + ${adder}px)`
  const maxGutters = fluid ? '0px' : `calc((100% - ${breakpoints.max}) / 2)`
  return css`
    padding-left: ${min}px;
    padding-right: ${min}px;
    @media(min-width: ${breakpoints.medium}) {
      padding-left: ${scaledGutters};
      padding-right: ${scaledGutters};
    }
    @media(min-width: ${breakpoints.large}) {
      padding-left: ${min}px;
      padding-right: ${min}px;
    }
    @media (min-width: ${breakpoints.max}) {
      padding-left: ${maxGutters};
      padding-right: ${maxGutters};
    }
  `
}

export const diagonalLinesCSS = color => {
  return css`linear-gradient(-45deg, transparent 25%, ${rgb(color)} 33%, ${rgb(color)} 66%, transparent 66%)`
}

export const gradientHorizontalCSS = (color1, color2) => {
  return css`linear-gradient(to right, ${rgb(color1)} 0%, ${rgb(color2)} 100%)`
}

export const gradientVerticalCSS = (color1, color2) => {
  return css`linear-gradient(to bottom, ${rgb(color1)} 0%, ${rgb(color2)} 100%)`
}
