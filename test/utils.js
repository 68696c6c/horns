import { Theme } from '../src/models/theme'
import { ThemeConfig } from '../src/models/config'

export const randomString = (length = 5) => {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

const configKeys = [
  'headingMargin',
  'gap',
  'radius',
  'breakpoints',
  'colors',
  'colorFactors',
  'fontFamilies',
  'fontWeights',
  'fontSizes',
  'linkDecorations',
]
const breakpointKeys = [
  'min',
  'small',
  'medium',
  'large',
  'max',
]
const colorKeys = [
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
  'copy',
]
const colorFactorKeys = [
  'light',
  'dark',
]
const fontFamilyKeys = [
  'default',
  'fallback',
]
const fontWeightKeys = [
  'default',
  'lighter',
  'light',
  'semiBold',
  'bold',
]
const fontSizeKeys = [
  'default',
  'min',
  'max',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]
const linkDecorationsKeys = [
  'default',
  'hover',
  'active',
]

export const expectValidThemeConfig = (result) => {
  expect(result instanceof ThemeConfig).toEqual(true)
  expect(Object.keys(result).sort()).toEqual(configKeys.sort())
  expect(Object.keys(result.breakpoints).sort()).toEqual(breakpointKeys.sort())
  expect(Object.keys(result.colors).sort()).toEqual(colorKeys.sort())
  expect(Object.keys(result.colorFactors).sort()).toEqual(colorFactorKeys.sort())
  expect(Object.keys(result.fontFamilies).sort()).toEqual(fontFamilyKeys.sort())
  expect(Object.keys(result.fontWeights).sort()).toEqual(fontWeightKeys.sort())
  expect(Object.keys(result.fontSizes).sort()).toEqual(fontSizeKeys.sort())
  expect(Object.keys(result.linkDecorations).sort()).toEqual(linkDecorationsKeys.sort())
}

const themeKeys = [
  'imports',
  'breakpoints',
  'colors',
  'grid',
  'typography',
  'buttons',
  'links',
  'config',
  'swatches',
]
const gridKeys = [
  'gap',
  'container',
]
const typographyKeys = [
  'fonts',
  'headings',
]
const colorValueKeys = [
  'default',
  'dark',
  'light',
]
const buttonKeys = [
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
]
const buttonValueKeys = [
  'background',
  'color',
  'radius',
  'border',
  'hover',
  'active',
]
const linkKeys = [
  'default',
  'dark',
  'light',
]
const linkValueKeys = [
  'color',
  'decoration',
  'hover',
  'active',
]
const headingKeys = [
  'size',
  'margin',
]

export const expectValidTheme = (result) => {
  expect(result instanceof Theme).toEqual(true)

  expectValidThemeConfig(result.config)
  expect(Object.keys(result).sort()).toEqual(themeKeys.sort())

  expect(result.imports instanceof Array).toEqual(true)

  expect(Object.keys(result.breakpoints).sort()).toEqual(breakpointKeys.sort())

  expect(Object.keys(result.colors).sort()).toEqual(colorKeys.sort())
  for (const name in result.colors) {
    const color = result.colors[name]
    expect(Object.keys(color).sort()).toEqual(colorValueKeys.sort())
  }

  expect(Object.keys(result.grid).sort()).toEqual(gridKeys.sort())

  expect(Object.keys(result.typography).sort()).toEqual(typographyKeys.sort())
  expect(Object.keys(result.typography.fonts)).toEqual(['default'])
  for (const name in result.typography.headings) {
    const heading = result.typography.headings[name]
    expect(Object.keys(heading).sort()).toEqual(headingKeys.sort())
  }

  expect(Object.keys(result.buttons).sort()).toEqual(buttonKeys.sort())
  for (const name in result.buttons) {
    const button = result.buttons[name]
    expect(Object.keys(button).sort()).toEqual(buttonValueKeys.sort())
  }

  expect(Object.keys(result.links).sort()).toEqual(linkKeys.sort())
  for (const name in result.links) {
    const link = result.links[name]
    expect(Object.keys(link).sort()).toEqual(linkValueKeys.sort())
  }
}
