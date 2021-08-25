import * as Config from './config'
import { FontFamilyFallback } from './fonts'

const defaultTheme = Config.make(Config.defaultConfig)

describe('Config.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Config.make()
    expect(result).toStrictEqual(defaultTheme)
  })

  describe('breakpoints', () => {
    it('should use the default value if no value is specified', () => {
      const result = Config.make()
      expect(result.breakpoints).toStrictEqual(defaultTheme.breakpoints)
    })

    it('should accept a value', () => {
      const result = Config.make({ breakpoints: { small: '300px' } })
      expect(result.breakpoints.small).toBe('300px')
    })
  })

  describe('colors', () => {
    it('should use the default value if no value is specified', () => {
      const result = Config.make()
      expect(result.colors).toStrictEqual(defaultTheme.colors)
    })

    it('should accept a value', () => {
      const result = Config.make({ colors: { pallet: { primary: '#ff0000' } } })
      expect(result.colors.primary.base.base).toBe('rgb(255, 0, 0)')
    })
  })

  describe('fonts', () => {
    it('should use the default value if no value is specified', () => {
      const result = Config.make()
      expect(result.fonts).toStrictEqual(defaultTheme.fonts)
    })

    it('should accept a value', () => {
      const result = Config.make({
        fonts: {
          families: {
            primary: { base: 'Arial', fallback: FontFamilyFallback.Monospace },
          },
        },
      })
      expect(result.fonts.text.family).toBe('Arial, monospace')
    })
  })

  describe('shadows', () => {
    it('should use the default value if no value is specified', () => {
      const result = Config.make()
      expect(result.shadows).toStrictEqual(defaultTheme.shadows)
    })

    it('should accept a value', () => {
      const result = Config.make({ shadows: { box: { x: 5 } } })
      expect(result.shadows.box.x).toBe(5)
    })
  })

  describe('sizes', () => {
    it('should use the default value if no value is specified', () => {
      const result = Config.make()
      expect(result.sizes).toStrictEqual(defaultTheme.sizes)
    })

    it('should accept a value', () => {
      const result = Config.make({ sizes: { small: '66px' } })
      expect(result.sizes.small).toBe('66px')
    })
  })
})
