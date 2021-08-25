import {
  BorderStyle,
  Color,
  ShadowType,
  Size,
  Font,
  Breakpoint,
} from '../../config'
import { Cursor } from '../../utils'

import * as Navs from '.'
import * as Item from './item'

const defaultItem = Navs.make(Item.defaultConfig)

describe('Navs.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Navs.make()
    expect(result).toStrictEqual(defaultItem)
  })

  describe('breakpoint', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.breakpoint).toBe(Navs.defaultConfig.breakpoint)
    })

    it('should accept a value', () => {
      const result = Navs.make({ breakpoint: Breakpoint.Large })
      expect(result.breakpoint).toBe(Size.Large)
    })
  })

  describe('border', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.border).toStrictEqual(defaultItem.border)
      expect(result.currentItem.border).toStrictEqual(defaultItem.border)
    })

    it('should accept "all" inputs', () => {
      const parentBorder = { style: BorderStyle.Groove, width: Size.Giant }
      const itemBorder = { style: BorderStyle.Double, width: Size.Medium }
      const result = Navs.make({
        border: { all: parentBorder },
        currentItem: { border: { all: itemBorder } },
      })
      expect(result.border).toStrictEqual({
        top: parentBorder,
        bottom: parentBorder,
        left: parentBorder,
        right: parentBorder,
      })
      expect(result.currentItem.border).toStrictEqual({
        top: itemBorder,
        bottom: itemBorder,
        left: itemBorder,
        right: itemBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Navs.make({
        border: {
          x: { style: BorderStyle.Groove, width: Size.Giant },
          y: { style: BorderStyle.Double, width: Size.XXSmall },
        },
        currentItem: {
          border: {
            x: { style: BorderStyle.Dotted, width: Size.Medium },
            y: { style: BorderStyle.Dashed, width: Size.XLarge },
          },
        },
      })
      expect(result.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.XXSmall },
        bottom: { style: BorderStyle.Double, width: Size.XXSmall },
        left: { style: BorderStyle.Groove, width: Size.Giant },
        right: { style: BorderStyle.Groove, width: Size.Giant },
      })
      expect(result.currentItem.border).toStrictEqual({
        top: { style: BorderStyle.Dashed, width: Size.XLarge },
        bottom: { style: BorderStyle.Dashed, width: Size.XLarge },
        left: { style: BorderStyle.Dotted, width: Size.Medium },
        right: { style: BorderStyle.Dotted, width: Size.Medium },
      })
    })

    it('should accept complete inputs', () => {
      const result = Navs.make({
        border: {
          top: { style: BorderStyle.Double, width: Size.Giant },
          bottom: { style: BorderStyle.Dashed, width: Size.XXLarge },
          left: { style: BorderStyle.Groove, width: Size.XLarge },
          right: { style: BorderStyle.Dotted, width: Size.Medium },
        },
        currentItem: {
          border: {
            top: { style: BorderStyle.Inset, width: Size.Small },
            bottom: { style: BorderStyle.Outset, width: Size.XSmall },
            left: { style: BorderStyle.Ridge, width: Size.XXSmall },
            right: { style: BorderStyle.Hidden, width: Size.Tiny },
          },
        },
      })
      expect(result.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.Giant },
        bottom: { style: BorderStyle.Dashed, width: Size.XXLarge },
        left: { style: BorderStyle.Groove, width: Size.XLarge },
        right: { style: BorderStyle.Dotted, width: Size.Medium },
      })
      expect(result.currentItem.border).toStrictEqual({
        top: { style: BorderStyle.Inset, width: Size.Small },
        bottom: { style: BorderStyle.Outset, width: Size.XSmall },
        left: { style: BorderStyle.Ridge, width: Size.XXSmall },
        right: { style: BorderStyle.Hidden, width: Size.Tiny },
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Navs.make({
        border: { all: { style: BorderStyle.Double, width: Size.Giant } },
        currentItem: {
          border: { top: { style: BorderStyle.Outset, width: Size.XSmall } },
        },
      })
      expect(result.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.Giant },
        bottom: { style: BorderStyle.Double, width: Size.Giant },
        left: { style: BorderStyle.Double, width: Size.Giant },
        right: { style: BorderStyle.Double, width: Size.Giant },
      })
      expect(result.currentItem.border).toStrictEqual({
        top: { style: BorderStyle.Outset, width: Size.XSmall },
        bottom: { style: BorderStyle.Double, width: Size.Giant },
        left: { style: BorderStyle.Double, width: Size.Giant },
        right: { style: BorderStyle.Double, width: Size.Giant },
      })
    })
  })

  describe('color', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.color).toBe(Navs.defaultConfig.color)
      expect(result.currentItem.color).toBe(Item.defaultConfig.color)
    })

    it('should accept a value', () => {
      const result = Navs.make({
        color: Color.Tertiary,
        currentItem: { color: Color.Secondary },
      })
      expect(result.color).toBe(Color.Tertiary)
      expect(result.currentItem.color).toBe(Color.Secondary)
    })

    it('should use the base value for items', () => {
      const result = Navs.make({ color: Color.Tertiary })
      expect(result.color).toBe(Color.Tertiary)
      expect(result.currentItem.color).toBe(Color.Tertiary)
    })
  })

  describe('cursor', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.cursor).toBe(Navs.defaultConfig.cursor)
      expect(result.currentItem.cursor).toBe(Item.defaultConfig.cursor)
    })

    it('should accept a value', () => {
      const result = Navs.make({
        cursor: Cursor.NoDrop,
        currentItem: { cursor: Cursor.Progress },
      })
      expect(result.cursor).toBe(Cursor.NoDrop)
      expect(result.currentItem.cursor).toBe(Cursor.Progress)
    })

    it('should use the base value for items', () => {
      const result = Navs.make({ cursor: Cursor.NotAllowed })
      expect(result.cursor).toBe(Cursor.NotAllowed)
      expect(result.currentItem.cursor).toBe(Cursor.NotAllowed)
    })
  })

  describe('font', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.font).toBe(Navs.defaultConfig.font)
      expect(result.currentItem.font).toBe(Item.defaultConfig.font)
    })

    it('should accept a value', () => {
      const result = Navs.make({
        font: Font.Compact,
        currentItem: { font: Font.Code },
      })
      expect(result.font).toBe(Font.Compact)
      expect(result.currentItem.font).toBe(Font.Code)
    })

    it('should use the base value for items', () => {
      const result = Navs.make({ font: Font.Legal })
      expect(result.font).toBe(Font.Legal)
      expect(result.currentItem.font).toBe(Font.Legal)
    })
  })

  describe('outlined', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.outlined).toBe(Navs.defaultConfig.outlined)
      expect(result.currentItem.outlined).toBe(Item.defaultConfig.outlined)
    })

    it('should accept true', () => {
      const result = Navs.make({ outlined: true })
      expect(result.outlined).toBe(true)
      expect(result.currentItem.outlined).toBe(true)
    })

    it('should accept false', () => {
      const result = Navs.make({ outlined: false })
      expect(result.outlined).toBe(false)
      expect(result.currentItem.outlined).toBe(false)
    })

    it('should allow items to override the base value', () => {
      const result = Navs.make({
        outlined: true,
        currentItem: { outlined: false },
      })
      expect(result.outlined).toBe(true)
      expect(result.currentItem.outlined).toBe(false)
    })
  })

  describe('padding', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.padding).toStrictEqual(defaultItem.padding)
      expect(result.currentItem.padding).toStrictEqual(defaultItem.padding)
    })

    it('should accept "all" inputs', () => {
      const result = Navs.make({
        padding: { all: Size.Giant },
        currentItem: { padding: { all: Size.XXSmall } },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
      expect(result.currentItem.padding).toStrictEqual({
        top: Size.XXSmall,
        bottom: Size.XXSmall,
        left: Size.XXSmall,
        right: Size.XXSmall,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Navs.make({
        padding: { x: Size.Giant, y: Size.Large },
        currentItem: { padding: { x: Size.Small, y: Size.Medium } },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Large,
        bottom: Size.Large,
        left: Size.Giant,
        right: Size.Giant,
      })
      expect(result.currentItem.padding).toStrictEqual({
        top: Size.Medium,
        bottom: Size.Medium,
        left: Size.Small,
        right: Size.Small,
      })
    })

    it('should accept complete inputs', () => {
      const result = Navs.make({
        padding: {
          top: Size.Giant,
          bottom: Size.Large,
          left: Size.Medium,
          right: Size.Small,
        },
        currentItem: {
          padding: {
            top: Size.XXLarge,
            bottom: Size.XLarge,
            left: Size.XSmall,
            right: Size.XXSmall,
          },
        },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Large,
        left: Size.Medium,
        right: Size.Small,
      })
      expect(result.currentItem.padding).toStrictEqual({
        top: Size.XXLarge,
        bottom: Size.XLarge,
        left: Size.XSmall,
        right: Size.XXSmall,
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Navs.make({
        padding: { all: Size.Giant },
        currentItem: { padding: { top: Size.XXSmall } },
      })
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
      expect(result.currentItem.padding).toStrictEqual({
        top: Size.XXSmall,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
    })
  })

  describe('radius', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.radius).toStrictEqual(defaultItem.radius)
      expect(result.currentItem.radius).toStrictEqual(defaultItem.radius)
    })

    it('should accept "all" inputs', () => {
      const result = Navs.make({
        radius: { all: Size.Giant },
        currentItem: { radius: { all: Size.Medium } },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
      expect(result.currentItem.radius).toStrictEqual({
        topRight: Size.Medium,
        bottomRight: Size.Medium,
        topLeft: Size.Medium,
        bottomLeft: Size.Medium,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Navs.make({
        radius: { left: Size.Giant, right: Size.Large },
        currentItem: { radius: { top: Size.Small, bottom: Size.Medium } },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Large,
        bottomRight: Size.Large,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
      expect(result.currentItem.radius).toStrictEqual({
        topRight: Size.Small,
        bottomRight: Size.Medium,
        topLeft: Size.Small,
        bottomLeft: Size.Medium,
      })
    })

    it('should accept complete inputs', () => {
      const result = Navs.make({
        radius: {
          topRight: Size.Giant,
          bottomRight: Size.Large,
          topLeft: Size.Medium,
          bottomLeft: Size.Small,
        },
        currentItem: {
          radius: {
            topRight: Size.XXSmall,
            bottomRight: Size.XSmall,
            topLeft: Size.XLarge,
            bottomLeft: Size.XXLarge,
          },
        },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Large,
        topLeft: Size.Medium,
        bottomLeft: Size.Small,
      })
      expect(result.currentItem.radius).toStrictEqual({
        topRight: Size.XXSmall,
        bottomRight: Size.XSmall,
        topLeft: Size.XLarge,
        bottomLeft: Size.XXLarge,
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Navs.make({
        radius: { all: Size.Giant },
        currentItem: { radius: { top: Size.XXSmall } },
      })
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
      expect(result.currentItem.radius).toStrictEqual({
        topRight: Size.XXSmall,
        bottomRight: Size.Giant,
        topLeft: Size.XXSmall,
        bottomLeft: Size.Giant,
      })
    })
  })

  describe('shadow', () => {
    it('should use the default value if no value is specified', () => {
      const result = Navs.make()
      expect(result.shadow).toBe(defaultItem.shadow)
      expect(result.currentItem.shadow).toBe(defaultItem.shadow)
    })

    it('should use the configured shadow type if "shadowed" is true', () => {
      const result = Navs.make({ shadowed: true })
      expect(result.shadow).toBe(Navs.defaultConfig.shadowType)
      expect(result.currentItem.shadow).toBe(Item.defaultConfig.shadowType)
    })

    it('should use the "none" shadow type if "shadowed" is false', () => {
      const result = Navs.make({ shadowed: false })
      expect(result.shadow).toBe(ShadowType.None)
      expect(result.currentItem.shadow).toBe(ShadowType.None)
    })

    it('should allow items to override the base value with "false"', () => {
      const result = Navs.make({
        shadowed: true,
        currentItem: { shadowed: false },
      })
      expect(result.shadow).toBe(Navs.defaultConfig.shadowType)
      expect(result.currentItem.shadow).toBe(ShadowType.None)
    })

    it('should allow items to override the base value with "true"', () => {
      const result = Navs.make({
        shadowed: false,
        currentItem: { shadowed: true },
      })
      expect(result.shadow).toBe(ShadowType.None)
      expect(result.currentItem.shadow).toBe(Navs.defaultConfig.shadowType)
    })
  })
})
