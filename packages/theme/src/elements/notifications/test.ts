import { BorderStyle, Color, ShadowType, Size, Font } from '../../config'
import { Cursor } from '../../utils'

import * as Notifications from '.'

const defaultTheme = Notifications.make(Notifications.defaultConfig)

describe('Notifications.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Notifications.make()
    expect(result).toStrictEqual(defaultTheme)
  })

  describe('border', () => {
    it('should use the default value if no value is specified', () => {
      const result = Notifications.make()
      expect(result.border).toStrictEqual(defaultTheme.border)
    })

    it('should accept "all" inputs', () => {
      const inputBorder = { style: BorderStyle.Groove, width: Size.Giant }
      const result = Notifications.make({ border: { all: inputBorder } })
      expect(result.border).toStrictEqual({
        top: inputBorder,
        bottom: inputBorder,
        left: inputBorder,
        right: inputBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Notifications.make({
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
      const result = Notifications.make({
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
      const result = Notifications.make({
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
      const result = Notifications.make()
      expect(result.color).toBe(Notifications.defaultConfig.color)
    })

    it('should accept a value', () => {
      const result = Notifications.make({ color: Color.Success })
      expect(result.color).toBe(Color.Success)
    })
  })

  describe('cursor', () => {
    it('should use the default value if no value is specified', () => {
      const result = Notifications.make()
      expect(result.cursor).toBe(Notifications.defaultConfig.cursor)
    })

    it('should accept a value', () => {
      const result = Notifications.make({ cursor: Cursor.NoDrop })
      expect(result.cursor).toBe(Cursor.NoDrop)
    })
  })

  describe('font', () => {
    it('should use the default value if no value is specified', () => {
      const result = Notifications.make()
      expect(result.font).toBe(Notifications.defaultConfig.font)
    })

    it('should accept a value', () => {
      const result = Notifications.make({ font: Font.Compact })
      expect(result.font).toBe(Font.Compact)
    })
  })

  describe('padding', () => {
    it('should use the default value if no value is specified', () => {
      const result = Notifications.make()
      expect(result.padding).toStrictEqual(defaultTheme.padding)
    })

    it('should accept "all" inputs', () => {
      const result = Notifications.make({
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
      const result = Notifications.make({
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
      const result = Notifications.make({
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
      const result = Notifications.make()
      expect(result.radius).toStrictEqual(defaultTheme.radius)
    })

    it('should accept "all" inputs', () => {
      const result = Notifications.make({
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
      const result = Notifications.make({
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
      const result = Notifications.make({
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
      const result = Notifications.make()
      expect(result.shadow).toBe(defaultTheme.shadow)
    })

    it('should use the configured shadow type if "shadowed" is true', () => {
      const result = Notifications.make({ shadowed: true })
      expect(result.shadow).toBe(Notifications.defaultConfig.shadowType)
    })

    it('should use the "none" shadow type if "shadowed" is false', () => {
      const result = Notifications.make({ shadowed: false })
      expect(result.shadow).toBe(ShadowType.None)
    })
  })
})
