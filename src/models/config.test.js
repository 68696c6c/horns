import React from 'react'
import { expectValidThemeConfig, randomString } from '../../test/utils'
import ThemeConfig from './config'

describe('ThemeConfig class', () => {

  describe('when called with no arguments', () => {
    let result = {}
    beforeAll(() => {
      result = new ThemeConfig()
    })
    it('should return a valid theme config object', () => {
      expect(result instanceof ThemeConfig).toEqual(true)
      expectValidThemeConfig(result)
    })
  })

  describe('when called with a partial config', () => {
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
      result = new ThemeConfig(config)
    })
    it('should return a valid theme config object', () => {
      expect(result instanceof ThemeConfig).toEqual(true)
      expectValidThemeConfig(result)
    })
    it('should override the base config with provided values', () => {
      expect(result.radius).toEqual(expectedRadius)
      expect(result.colors.primary).toEqual(expectedColor)
      expect(result.colorFactors.light).toEqual(expectedColorFactor)
      expect(result.fontFamilies.default).toEqual(expectedFontFamily)
      expect(result.fontWeights.lighter).toEqual(expectedFontWeight)
      expect(result.fontSizes.h4).toEqual(expectedFontSize)
      expect(result.linkDecorations.hover).toEqual(expectedLinkDecoration)
    })
  })

  describe('when called with a complete config', () => {
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
        background: randomString(),
        copy: randomString(),
      },
      colorFactors: {
        alpha: randomString(),
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
      result = new ThemeConfig(config)
    })
    it('should return a valid theme config object', () => {
      expect(result instanceof ThemeConfig).toEqual(true)
      expectValidThemeConfig(result)
    })
    it('should override the base config with provided values', () => {
      expect(result).toEqual(config)
    })
  })

})
