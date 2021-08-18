import ColorObject from 'color'

import { defaultConfig } from './config'
import { makeColorShades, makeShades, Shades } from './shades'

const assertShadeContrast = (shades: Shades): void => {
  const { darker, dark, base, light, lighter } = shades
  expect(darker.contrast(dark)).toBeGreaterThan(1)
  expect(dark.contrast(base)).toBeGreaterThan(1)
  expect(base.contrast(light)).toBeGreaterThan(1)
  expect(light.contrast(lighter)).toBeGreaterThan(1)
}

const assertSameColor = (color: ColorObject, expected: string) => {
  const colorValue = color.rgb().string()
  const expectedValue = new ColorObject(expected).rgb().string()
  expect(colorValue).toEqual(expectedValue)
}

describe('makeColorShades', () => {
  it('should use the provided values as the base shades for colorways besides light and dark', () => {
    const { pallet } = defaultConfig
    const result = makeColorShades(defaultConfig)
    assertSameColor(result.primary.base, pallet.primary)
    assertSameColor(result.secondary.base, pallet.secondary)
    assertSameColor(result.tertiary.base, pallet.tertiary)
    assertSameColor(result.neutral.base, pallet.neutral)
    assertSameColor(result.success.base, pallet.success)
    assertSameColor(result.info.base, pallet.info)
    assertSameColor(result.warning.base, pallet.warning)
    assertSameColor(result.danger.base, pallet.danger)
  })

  it('should return distinguishable dark shades', () => {
    const result = makeColorShades(defaultConfig)
    assertShadeContrast(result.dark)
  })

  it('should return distinguishable light shades', () => {
    const result = makeColorShades(defaultConfig)
    assertShadeContrast(result.light)
  })
})

describe('makeShades', () => {
  it('should return distinguishable for high luminosity colors', () => {
    const { shaders } = defaultConfig
    const result = makeShades('#e8e8e8', shaders)
    assertShadeContrast(result)
  })

  it('should return distinguishable for low luminosity colors', () => {
    const { shaders } = defaultConfig
    const result = makeShades('#010101', shaders)
    assertShadeContrast(result)
  })
})
