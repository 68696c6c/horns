import React from 'react'
import { expectValidTheme } from '../../test/utils'
import { Theme } from './theme'

describe('Theme class', () => {

  describe('when called with no arguments', () => {
    let result = {}
    beforeAll(() => {
      result = new Theme()
    })
    it('should return a valid theme object', () => {
      expectValidTheme(result)
    })
  })

  // @TODO will need to add a Color mock and better test values for these tests
  // describe('when called with a partial config', () => {
  //   const expectedRadius = randomString()
  //   const expectedColor = randomString()
  //   const expectedColorFactor = randomString()
  //   const expectedFontFamily = randomString()
  //   const expectedFontWeight = randomString()
  //   const expectedFontSize = randomString()
  //   const expectedLinkDecoration = randomString()
  //   let result = {}
  //   beforeAll(() => {
  //     const config = {
  //       radius: expectedRadius,
  //       colors: {
  //         primary: expectedColor,
  //       },
  //       colorFactors: {
  //         light: expectedColorFactor,
  //       },
  //       fontFamilies: {
  //         default: expectedFontFamily,
  //       },
  //       fontWeights: {
  //         lighter: expectedFontWeight,
  //       },
  //       fontSizes: {
  //         h4: expectedFontSize,
  //       },
  //       linkDecorations: {
  //         hover: expectedLinkDecoration,
  //       },
  //     }
  //     result = new Theme(config)
  //   })
  //   it('should return a valid theme object', () => {
  //     expectValidTheme(result)
  //     it('should override the base config with provided values', () => {
  //       expect(result.colors.primary).toEqual(expectedColor)
  //       expect(result.colorFactors.light).toEqual(expectedColorFactor)
  //       expect(result.fontFamilies.default).toEqual(expectedFontFamily)
  //       expect(result.fontWeights.lighter).toEqual(expectedFontWeight)
  //       expect(result.fontSizes.h4).toEqual(expectedFontSize)
  //       expect(result.linkDecorations.hover).toEqual(expectedLinkDecoration)
  //     })
  //   })
  // })
  //
  // describe('when called with a complete config', () => {
  //   let result = {}
  //   beforeAll(() => {
  //     result = new Theme()
  //   })
  //   it('should return a valid theme object', () => {
  //     expectValidTheme(result)
  //   })
  // })
})
