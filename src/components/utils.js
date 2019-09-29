import { css } from '@emotion/core'
import React from 'react'
import { isUndefined } from '..'
import { rgb, valueToInt } from '../themes/utils'

/**
 * Functions in this file are only intended to be used internally and should not be included in the project exports.
 */

export const COLOR_VARIANT_NONE = 'none'

export const getColorVariants = () => [
  'primary',
  'primary-dark',
  'primary-light',
  'primary-alpha',
  'secondary',
  'secondary-dark',
  'secondary-light',
  'secondary-alpha',
  'tertiary',
  'tertiary-dark',
  'tertiary-light',
  'tertiary-alpha',
  'light',
  'light-dark',
  'light-light',
  'light-alpha',
  'neutral',
  'neutral-dark',
  'neutral-light',
  'neutral-alpha',
  'dark',
  'dark-dark',
  'dark-light',
  'dark-alpha',
  'success',
  'success-dark',
  'success-light',
  'success-alpha',
  'info',
  'info-dark',
  'info-light',
  'info-alpha',
  'warning',
  'warning-dark',
  'warning-light',
  'warning-alpha',
  'danger',
  'danger-dark',
  'danger-light',
  'danger-alpha',
  'background',
  'background-dark',
  'background-light',
  'background-alpha',
  'copy',
  'copy-dark',
  'copy-light',
  'copy-alpha',
  COLOR_VARIANT_NONE,
]

export const colorVariantCSS = (theme, variant, swatch = 'default') => {
  let color = 'inherit'
  if (variant !== COLOR_VARIANT_NONE) {
    color = theme.colors[variant][swatch].isLight() ? rgb(theme.colors.copy.dark) : rgb(theme.colors.copy.light)
  }
  return css`
    background: ${variant === COLOR_VARIANT_NONE ? 'none' : rgb(theme.colors[variant][swatch])};
    color: ${color};
  `
}

export const colorVariantSwatchValue = (theme, variant, swatch = 'default') => {
  return variant === COLOR_VARIANT_NONE ? 'none' : rgb(theme.colors[variant][swatch])
}

export const colorVariantValue = (theme, variant) => {
  const [v, s] = variant.split('-')
  const swatch = isUndefined(s) ? 'default' : s
  return v === COLOR_VARIANT_NONE ? 'none' : rgb(theme.colors[v][swatch])
}

export const colorVariantReadableSwatchValue = (theme, variant, swatch = 'default') => {
  let color = 'inherit'
  if (variant !== COLOR_VARIANT_NONE) {
    color = theme.colors[variant][swatch].isLight() ? rgb(theme.colors.copy.dark) : rgb(theme.colors.copy.light)
  }
  return color
}

/**
 * Return an Emotion CSS snippet that applies a CSS color property based on the provided theme variant.
 * @returns SerializedStyles
 */
export const typographyColor = (theme, variant) => {
  let color
  if (variant === 'copy-dark') {
    color = rgb(theme.colors.copy.dark)
  } else if (variant === 'copy-light') {
    color = rgb(theme.colors.copy.light)
  } else if (variant === 'inherit') {
    color = 'inherit'
  } else {
    color = rgb(theme.colors[variant].default)
  }
  return css`
    color: ${color};
  `
}

export const font = (theme, size = 'default', fontFace = 'default') => {
  return css`
    font-size: ${theme.typography.sizes[size]};
    line-height: ${theme.typography.lineHeight};
    font-family: ${theme.typography.fonts[fontFace].family};
    font-weight: ${theme.typography.fonts[fontFace].weight};
  `
}

export const textShadow = (theme, bgColor, swatch = 'default') => {
  let color = rgb(theme.colors.copy.light)
  let shadow = rgb(theme.colors.copy.dark)
  if (theme.colors[bgColor][swatch].isLight()) {
    color = rgb(theme.colors.copy.dark)
    shadow = rgb(theme.colors.copy.light)
  }
  return css`
    color: ${color};
    text-shadow: -1px -1px 0 ${shadow}, 1px -1px 0 ${shadow}, -1px 1px 0 ${shadow}, 1px 1px 0 ${shadow};
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
  return css`repeating-linear-gradient(45deg, transparent, transparent 10px, ${rgb(color)} 10px, ${rgb(color)} 20px)`
}

export const gradientHorizontalCSS = (color1, color2) => {
  return css`linear-gradient(to right, ${rgb(color1)} 0%, ${rgb(color2)} 100%)`
}

export const gradientVerticalCSS = (color1, color2) => {
  return css`linear-gradient(to bottom, ${rgb(color1)} 0%, ${rgb(color2)} 100%)`
}

export const gradientRadialCSS = (color1, color2) => {
  return css`radial-gradient(${rgb(color1)}, ${rgb(color2)})`
}

export const toClassNames = (...values) => values.join(' ').trim()

export const isReactFragment = v =>
  v.type ? v.type === React.Fragment : v === React.Fragment
