import ColorObject from 'color'

import { makeColors } from './colors'
import { defaultConfig } from './config'
import { Color, Mode } from './types'

const toRgb = (input: string): string => new ColorObject(input).rgb().string()

describe('makeColors', () => {
  it('should use default values if no config is provided', () => {
    const result = makeColors()
    expect(result).toMatchSnapshot()
  })

  it('should use default values if an empty config is provided', () => {
    const result = makeColors({})
    expect(result).toMatchSnapshot()
  })

  it('should merge provided config values with defaults', () => {
    const input = '#ab7801'
    const { pallet } = defaultConfig
    const result = makeColors({
      pallet: {
        primary: input,
      },
      shaders: {
        darkest: 99,
      },
    })
    expect(result.primary.base.base).toEqual(toRgb(input))
    expect(result.secondary.base.base).toEqual(toRgb(pallet.secondary))
  })

  describe('mode', () => {
    it('should support dark mode', () => {
      const result = makeColors({ mode: Mode.Dark })
      expect(result).toMatchSnapshot()
    })

    it('should support light mode', () => {
      const result = makeColors({ mode: Mode.Light })
      expect(result).toMatchSnapshot()
    })
  })

  describe('action', () => {
    it('should default to the primary color', () => {
      const { pallet } = defaultConfig
      const result = makeColors(defaultConfig)
      expect(result.action.base.base).toEqual(toRgb(pallet.primary))
    })

    it('should support the secondary color', () => {
      const { pallet } = defaultConfig
      const config = defaultConfig
      config.action = Color.Secondary
      const result = makeColors(config)
      expect(result.action.base.base).toEqual(toRgb(pallet.secondary))
    })

    it('should support the tertiary color', () => {
      const { pallet } = defaultConfig
      const config = defaultConfig
      config.action = Color.Tertiary
      const result = makeColors(config)
      expect(result.action.base.base).toEqual(toRgb(pallet.tertiary))
    })
  })

  describe('prominent', () => {
    it('should default to the primary color', () => {
      const { pallet } = defaultConfig
      const result = makeColors(defaultConfig)
      expect(result.prominent.base.base).toEqual(toRgb(pallet.primary))
    })

    it('should support the secondary color', () => {
      const { pallet } = defaultConfig
      const config = defaultConfig
      config.prominent = Color.Secondary
      const result = makeColors(config)
      expect(result.prominent.base.base).toEqual(toRgb(pallet.secondary))
    })

    it('should support the tertiary color', () => {
      const { pallet } = defaultConfig
      const config = defaultConfig
      config.prominent = Color.Tertiary
      const result = makeColors(config)
      expect(result.prominent.base.base).toEqual(toRgb(pallet.tertiary))
    })
  })

  describe('selected', () => {
    it('should default to the primary color', () => {
      const { pallet } = defaultConfig
      const result = makeColors(defaultConfig)
      expect(result.selected.base.base).toEqual(toRgb(pallet.primary))
    })

    it('should support the secondary color', () => {
      const { pallet } = defaultConfig
      const config = defaultConfig
      config.selected = Color.Secondary
      const result = makeColors(config)
      expect(result.selected.base.base).toEqual(toRgb(pallet.secondary))
    })

    it('should support the tertiary color', () => {
      const { pallet } = defaultConfig
      const config = defaultConfig
      config.selected = Color.Tertiary
      const result = makeColors(config)
      expect(result.selected.base.base).toEqual(toRgb(pallet.tertiary))
    })
  })
})
