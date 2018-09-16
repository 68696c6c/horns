import React from 'react'
import { randomString } from '../../test/utils'
import { getConfig } from './config'

describe('Theme Configuration', () => {

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

  const expectValidThemeConfig = (result) => {
    expect(Object.keys(result).sort()).toEqual(configKeys.sort())
    expect(Object.keys(result.breakpoints).sort()).toEqual(breakpointKeys.sort())
    expect(Object.keys(result.colors).sort()).toEqual(colorKeys.sort())
    expect(Object.keys(result.colorFactors).sort()).toEqual(colorFactorKeys.sort())
    expect(Object.keys(result.fontFamilies).sort()).toEqual(fontFamilyKeys.sort())
    expect(Object.keys(result.fontWeights).sort()).toEqual(fontWeightKeys.sort())
    expect(Object.keys(result.fontSizes).sort()).toEqual(fontSizeKeys.sort())
    expect(Object.keys(result.linkDecorations).sort()).toEqual(linkDecorationsKeys.sort())
  }

  describe('when getConfig is called with no arguments', () => {

    let result = {}
    beforeAll(() => {
      result = getConfig()
    })

    it('should return a valid theme config object', () => {
      expectValidThemeConfig(result)
    })

  })

  describe('when getConfig is called with a partial config', () => {

    const expectedRadius = randomString()
    const expectedColor = randomString()
    const expectedColorFactor = randomString()
    const expectedFontFamily = randomString()
    const expectedFontWeight = randomString()
    const expectedFontSize = randomString()
    const expectedLinkDecoration = randomString()
    let result = {}

    beforeAll(() => {
      const config = {
        radius: expectedRadius,
        colors: {
          primary: expectedColor,
        },
        colorFactors: {
          light: expectedColorFactor,
        },
        fontFamilies: {
          default: expectedFontFamily,
        },
        fontWeights: {
          lighter: expectedFontWeight,
        },
        fontSizes: {
          h4: expectedFontSize,
        },
        linkDecorations: {
          hover: expectedLinkDecoration,
        },
      }
      result = getConfig(config)
    })

    it('should return a valid theme config object', () => {
      expectValidThemeConfig(result)
    })

    it('should override the baseConfig with provided values', () => {
      expect(result.radius).toEqual(expectedRadius)
      expect(result.colors.primary).toEqual(expectedColor)
      expect(result.colorFactors.light).toEqual(expectedColorFactor)
      expect(result.fontFamilies.default).toEqual(expectedFontFamily)
      expect(result.fontWeights.lighter).toEqual(expectedFontWeight)
      expect(result.fontSizes.h4).toEqual(expectedFontSize)
      expect(result.linkDecorations.hover).toEqual(expectedLinkDecoration)
    })

  })

  describe('when getConfig is called with a complete config', () => {

    const config = {
      headingMargin: randomString(),
      gap: randomString(),
      radius: randomString(),
      breakpoints: {
        min: randomString(),
        small: randomString(),
        medium: randomString(),
        large: randomString(),
        max: randomString(),
      },
      colors: {
        primary: randomString(),
        secondary: randomString(),
        tertiary: randomString(),
        light: randomString(),
        neutral: randomString(),
        dark: randomString(),
        success: randomString(),
        info: randomString(),
        warning: randomString(),
        danger: randomString(),
        copy: randomString(),
      },
      colorFactors: {
        light: randomString(),
        dark: randomString(),
      },
      fontFamilies: {
        default: randomString(),
        fallback: randomString(),
      },
      fontWeights: {
        default: randomString(),
        lighter: randomString(),
        light: randomString(),
        semiBold: randomString(),
        bold: randomString(),
      },
      fontSizes: {
        default: randomString(),
        min: randomString(),
        max: randomString(),
        h1: randomString(),
        h2: randomString(),
        h3: randomString(),
        h4: randomString(),
        h5: randomString(),
        h6: randomString(),
      },
      linkDecorations: {
        default: randomString(),
        hover: randomString(),
        active: randomString(),
      },
    }
    let result = {}
    beforeAll(() => {
      result = getConfig(config)
    })

    it('should return a valid theme config object', () => {
      expectValidThemeConfig(result)
    })

    it('should override the baseConfig with provided values', () => {
      expect(result).toEqual(config)
    })

  })

})
