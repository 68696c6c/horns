import { BorderStyle, Color, ShadowType, Size, Font } from '../../config'
import { Cursor } from '../../utils'

import * as Links from './links'

const defaultTheme = Links.make(Links.defaultConfig)

describe('Links.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Links.make()
    expect(result).toStrictEqual(defaultTheme)
  })

  describe('border', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.border).toStrictEqual(defaultTheme.border)
    })

    it('should accept "all" inputs', () => {
      const inputBorder = { style: BorderStyle.Groove, width: Size.Giant }
      const result = Links.make({ border: { all: inputBorder } })
      expect(result.border).toStrictEqual({
        top: inputBorder,
        bottom: inputBorder,
        left: inputBorder,
        right: inputBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Links.make({
        border: {
          x: { style: BorderStyle.Groove, width: Size.Giant },
          y: { style: BorderStyle.Double, width: Size.XXSmall },
        },
      })
      expect(result.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.XXSmall },
        bottom: { style: BorderStyle.Double, width: Size.XXSmall },
        left: { style: BorderStyle.Groove, width: Size.Giant },
        right: { style: BorderStyle.Groove, width: Size.Giant },
      })
    })

    it('should accept complete inputs', () => {
      const result = Links.make({
        border: {
          top: { style: BorderStyle.Double, width: Size.Giant },
          bottom: { style: BorderStyle.Dashed, width: Size.XXLarge },
          left: { style: BorderStyle.Groove, width: Size.XLarge },
          right: { style: BorderStyle.Dotted, width: Size.Medium },
        },
      })
      expect(result.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.Giant },
        bottom: { style: BorderStyle.Dashed, width: Size.XXLarge },
        left: { style: BorderStyle.Groove, width: Size.XLarge },
        right: { style: BorderStyle.Dotted, width: Size.Medium },
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Links.make({
        border: { all: { style: BorderStyle.Double, width: Size.Giant } },
      })
      expect(result.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.Giant },
        bottom: { style: BorderStyle.Double, width: Size.Giant },
        left: { style: BorderStyle.Double, width: Size.Giant },
        right: { style: BorderStyle.Double, width: Size.Giant },
      })
    })
  })

  describe('color', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.color).toBe(Links.defaultConfig.color)
    })

    it('should accept a value', () => {
      const result = Links.make({ color: Color.Tertiary })
      expect(result.color).toBe(Color.Tertiary)
    })
  })

  describe('cursor', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.cursor).toBe(Links.defaultConfig.cursor)
    })

    it('should accept a value', () => {
      const result = Links.make({ cursor: Cursor.NoDrop })
      expect(result.cursor).toBe(Cursor.NoDrop)
    })
  })

  describe('font', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.font).toBe(Links.defaultConfig.font)
    })

    it('should accept a value', () => {
      const result = Links.make({ font: Font.Compact })
      expect(result.font).toBe(Font.Compact)
    })
  })

  describe('padding', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.padding).toStrictEqual(defaultTheme.padding)
    })

    it('should accept "all" inputs', () => {
      const result = Links.make({
        padding: { all: Size.Giant },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Links.make({
        padding: { x: Size.Giant, y: Size.Large },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Large,
        bottom: Size.Large,
        left: Size.Giant,
        right: Size.Giant,
      })
    })

    it('should accept complete inputs', () => {
      const result = Links.make({
        padding: {
          top: Size.Giant,
          bottom: Size.Large,
          left: Size.Medium,
          right: Size.Small,
        },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Large,
        left: Size.Medium,
        right: Size.Small,
      })
    })
  })

  describe('radius', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.radius).toStrictEqual(defaultTheme.radius)
    })

    it('should accept "all" inputs', () => {
      const result = Links.make({
        radius: { all: Size.Giant },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Links.make({
        radius: { left: Size.Giant, right: Size.Large },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Large,
        bottomRight: Size.Large,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })

    it('should accept complete inputs', () => {
      const result = Links.make({
        radius: {
          topRight: Size.Giant,
          bottomRight: Size.Large,
          topLeft: Size.Medium,
          bottomLeft: Size.Small,
        },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Large,
        topLeft: Size.Medium,
        bottomLeft: Size.Small,
      })
    })
  })

  describe('shadow', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.shadow).toBe(defaultTheme.shadow)
    })

    it('should use the configured shadow type if "shadowed" is true', () => {
      const result = Links.make({ shadowed: true })
      expect(result.shadow).toBe(Links.defaultConfig.shadowType)
    })

    it('should use the "none" shadow type if "shadowed" is false', () => {
      const result = Links.make({ shadowed: false })
      expect(result.shadow).toBe(ShadowType.None)
    })
  })

  describe('variant', () => {
    it('should use the default value if no value is specified', () => {
      const result = Links.make()
      expect(result.variant).toBe(defaultTheme.variant)
    })

    it('should accept a value', () => {
      const result = Links.make({ variant: 'button' })
      expect(result.variant).toBe('button')
    })
  })
})
