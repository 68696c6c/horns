import {
  BorderStyle,
  Color,
  ShadowType,
  Size,
  Font,
  Breakpoint,
} from '../../config'
import { Cursor } from '../../utils'

import * as Tables from '.'
import * as Item from './item'

const defaultItem = Tables.make(Item.defaultConfig)

describe('Tables.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Tables.make()
    expect(result).toStrictEqual(defaultItem)
  })

  describe('breakpoint', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.breakpoint).toBe(Tables.defaultConfig.breakpoint)
    })

    it('should accept a value', () => {
      const result = Tables.make({ breakpoint: Breakpoint.Large })
      expect(result.breakpoint).toBe(Size.Large)
    })
  })

  describe('border', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.border).toStrictEqual(defaultItem.border)
      expect(result.currentItem.border).toStrictEqual(defaultItem.border)
      expect(result.headerItem.border).toStrictEqual(defaultItem.border)
    })

    it('should accept "all" inputs', () => {
      const parentBorder = { style: BorderStyle.Groove, width: Size.Giant }
      const itemBorder = { style: BorderStyle.Double, width: Size.Medium }
      const headerBorder = { style: BorderStyle.Inset, width: Size.Small }
      const result = Tables.make({
        border: { all: parentBorder },
        currentItem: { border: { all: itemBorder } },
        headerItem: { border: { all: headerBorder } },
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
      expect(result.headerItem.border).toStrictEqual({
        top: headerBorder,
        bottom: headerBorder,
        left: headerBorder,
        right: headerBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Tables.make({
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
        headerItem: {
          border: {
            x: { style: BorderStyle.Inset, width: Size.Small },
            y: { style: BorderStyle.Ridge, width: Size.XSmall },
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
      expect(result.headerItem.border).toStrictEqual({
        top: { style: BorderStyle.Ridge, width: Size.XSmall },
        bottom: { style: BorderStyle.Ridge, width: Size.XSmall },
        left: { style: BorderStyle.Inset, width: Size.Small },
        right: { style: BorderStyle.Inset, width: Size.Small },
      })
    })

    it('should accept complete inputs', () => {
      const result = Tables.make({
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
        headerItem: {
          border: {
            top: { style: BorderStyle.Inset, width: Size.Giant },
            bottom: { style: BorderStyle.Outset, width: Size.XXLarge },
            left: { style: BorderStyle.Ridge, width: Size.XLarge },
            right: { style: BorderStyle.Hidden, width: Size.Medium },
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
      expect(result.headerItem.border).toStrictEqual({
        top: { style: BorderStyle.Inset, width: Size.Giant },
        bottom: { style: BorderStyle.Outset, width: Size.XXLarge },
        left: { style: BorderStyle.Ridge, width: Size.XLarge },
        right: { style: BorderStyle.Hidden, width: Size.Medium },
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Tables.make({
        border: { all: { style: BorderStyle.Double, width: Size.Giant } },
        currentItem: {
          border: { top: { style: BorderStyle.Outset, width: Size.XSmall } },
        },
        headerItem: {
          border: { bottom: { style: BorderStyle.Groove, width: Size.Small } },
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
      expect(result.headerItem.border).toStrictEqual({
        top: { style: BorderStyle.Double, width: Size.Giant },
        bottom: { style: BorderStyle.Groove, width: Size.Small },
        left: { style: BorderStyle.Double, width: Size.Giant },
        right: { style: BorderStyle.Double, width: Size.Giant },
      })
    })
  })

  describe('color', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.color).toBe(Tables.defaultConfig.color)
      expect(result.currentItem.color).toBe(Item.defaultConfig.color)
      expect(result.headerItem.color).toBe(Item.defaultConfig.color)
    })

    it('should accept a value', () => {
      const result = Tables.make({
        color: Color.Tertiary,
        currentItem: { color: Color.Secondary },
        headerItem: { color: Color.Primary },
      })
      expect(result.color).toBe(Color.Tertiary)
      expect(result.currentItem.color).toBe(Color.Secondary)
      expect(result.headerItem.color).toBe(Color.Primary)
    })

    it('should use the base value for items', () => {
      const result = Tables.make({ color: Color.Tertiary })
      expect(result.color).toBe(Color.Tertiary)
      expect(result.currentItem.color).toBe(Color.Tertiary)
      expect(result.headerItem.color).toBe(Color.Tertiary)
    })
  })

  describe('cursor', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.cursor).toBe(Tables.defaultConfig.cursor)
      expect(result.currentItem.cursor).toBe(Item.defaultConfig.cursor)
      expect(result.headerItem.cursor).toBe(Item.defaultConfig.cursor)
    })

    it('should accept a value', () => {
      const result = Tables.make({
        cursor: Cursor.NoDrop,
        currentItem: { cursor: Cursor.Progress },
        headerItem: { cursor: Cursor.Text },
      })
      expect(result.cursor).toBe(Cursor.NoDrop)
      expect(result.currentItem.cursor).toBe(Cursor.Progress)
      expect(result.headerItem.cursor).toBe(Cursor.Text)
    })

    it('should use the base value for items', () => {
      const result = Tables.make({ cursor: Cursor.NotAllowed })
      expect(result.cursor).toBe(Cursor.NotAllowed)
      expect(result.currentItem.cursor).toBe(Cursor.NotAllowed)
      expect(result.headerItem.cursor).toBe(Cursor.NotAllowed)
    })
  })

  describe('font', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.font).toBe(Tables.defaultConfig.font)
      expect(result.currentItem.font).toBe(Item.defaultConfig.font)
      expect(result.headerItem.font).toBe(Item.defaultConfig.font)
    })

    it('should accept a value', () => {
      const result = Tables.make({
        font: Font.Compact,
        currentItem: { font: Font.Code },
        headerItem: { font: Font.Emphasized },
      })
      expect(result.font).toBe(Font.Compact)
      expect(result.currentItem.font).toBe(Font.Code)
      expect(result.headerItem.font).toBe(Font.Emphasized)
    })

    it('should use the base value for items', () => {
      const result = Tables.make({ font: Font.Legal })
      expect(result.font).toBe(Font.Legal)
      expect(result.currentItem.font).toBe(Font.Legal)
      expect(result.headerItem.font).toBe(Font.Legal)
    })
  })

  describe('outlined', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.outlined).toBe(Tables.defaultConfig.outlined)
      expect(result.currentItem.outlined).toBe(Item.defaultConfig.outlined)
      expect(result.headerItem.outlined).toBe(Item.defaultConfig.outlined)
    })

    it('should accept true', () => {
      const result = Tables.make({ outlined: true })
      expect(result.outlined).toBe(true)
      expect(result.currentItem.outlined).toBe(true)
      expect(result.headerItem.outlined).toBe(true)
    })

    it('should accept false', () => {
      const result = Tables.make({ outlined: false })
      expect(result.outlined).toBe(false)
      expect(result.currentItem.outlined).toBe(false)
      expect(result.headerItem.outlined).toBe(false)
    })

    it('should allow items to override the base value', () => {
      const result = Tables.make({
        outlined: true,
        currentItem: { outlined: false },
        headerItem: { outlined: false },
      })
      expect(result.outlined).toBe(true)
      expect(result.currentItem.outlined).toBe(false)
      expect(result.headerItem.outlined).toBe(false)
    })
  })

  describe('padding', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.padding).toStrictEqual(defaultItem.padding)
      expect(result.currentItem.padding).toStrictEqual(defaultItem.padding)
      expect(result.headerItem.padding).toStrictEqual(defaultItem.padding)
    })

    it('should accept "all" inputs', () => {
      const result = Tables.make({
        padding: { all: Size.Giant },
        currentItem: { padding: { all: Size.XXSmall } },
        headerItem: { padding: { all: Size.Medium } },
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
      expect(result.headerItem.padding).toStrictEqual({
        top: Size.Medium,
        bottom: Size.Medium,
        left: Size.Medium,
        right: Size.Medium,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Tables.make({
        padding: { x: Size.Giant, y: Size.Large },
        currentItem: { padding: { x: Size.Small, y: Size.Medium } },
        headerItem: { padding: { x: Size.XLarge, y: Size.XXLarge } },
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
      expect(result.headerItem.padding).toStrictEqual({
        top: Size.XXLarge,
        bottom: Size.XXLarge,
        left: Size.XLarge,
        right: Size.XLarge,
      })
    })

    it('should accept complete inputs', () => {
      const result = Tables.make({
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
        headerItem: {
          padding: {
            top: Size.Medium,
            bottom: Size.Small,
            left: Size.XXLarge,
            right: Size.XLarge,
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
      expect(result.headerItem.padding).toStrictEqual({
        top: Size.Medium,
        bottom: Size.Small,
        left: Size.XXLarge,
        right: Size.XLarge,
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Tables.make({
        padding: { all: Size.Giant },
        currentItem: { padding: { top: Size.XXSmall } },
        headerItem: { padding: { bottom: Size.Medium } },
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
      expect(result.headerItem.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Medium,
        left: Size.Giant,
        right: Size.Giant,
      })
    })
  })

  describe('radius', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.radius).toStrictEqual(defaultItem.radius)
      expect(result.currentItem.radius).toStrictEqual(defaultItem.radius)
      expect(result.headerItem.radius).toStrictEqual(defaultItem.radius)
    })

    it('should accept "all" inputs', () => {
      const result = Tables.make({
        radius: { all: Size.Giant },
        currentItem: { radius: { all: Size.Medium } },
        headerItem: { radius: { all: Size.Small } },
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
      expect(result.headerItem.radius).toStrictEqual({
        topRight: Size.Small,
        bottomRight: Size.Small,
        topLeft: Size.Small,
        bottomLeft: Size.Small,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Tables.make({
        radius: { left: Size.Giant, right: Size.Large },
        currentItem: { radius: { top: Size.Small, bottom: Size.Medium } },
        headerItem: { radius: { top: Size.XLarge, bottom: Size.XSmall } },
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
      expect(result.headerItem.radius).toStrictEqual({
        topRight: Size.XLarge,
        bottomRight: Size.XSmall,
        topLeft: Size.XLarge,
        bottomLeft: Size.XSmall,
      })
    })

    it('should accept complete inputs', () => {
      const result = Tables.make({
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
        headerItem: {
          radius: {
            topRight: Size.Small,
            bottomRight: Size.XLarge,
            topLeft: Size.Giant,
            bottomLeft: Size.Medium,
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
      expect(result.headerItem.radius).toStrictEqual({
        topRight: Size.Small,
        bottomRight: Size.XLarge,
        topLeft: Size.Giant,
        bottomLeft: Size.Medium,
      })
    })

    it('should merge parent and item inputs', () => {
      const result = Tables.make({
        radius: { all: Size.Giant },
        currentItem: { radius: { top: Size.XXSmall } },
        headerItem: { radius: { bottom: Size.Medium } },
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
      expect(result.headerItem.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Medium,
        topLeft: Size.Giant,
        bottomLeft: Size.Medium,
      })
    })
  })

  describe('shadow', () => {
    it('should use the default value if no value is specified', () => {
      const result = Tables.make()
      expect(result.shadow).toBe(defaultItem.shadow)
      expect(result.currentItem.shadow).toBe(defaultItem.shadow)
      expect(result.headerItem.shadow).toBe(defaultItem.shadow)
    })

    it('should use the configured shadow type if "shadowed" is true', () => {
      const result = Tables.make({ shadowed: true })
      expect(result.shadow).toBe(Tables.defaultConfig.shadowType)
      expect(result.currentItem.shadow).toBe(Item.defaultConfig.shadowType)
      expect(result.headerItem.shadow).toBe(Item.defaultConfig.shadowType)
    })

    it('should use the "none" shadow type if "shadowed" is false', () => {
      const result = Tables.make({ shadowed: false })
      expect(result.shadow).toBe(ShadowType.None)
      expect(result.currentItem.shadow).toBe(ShadowType.None)
      expect(result.headerItem.shadow).toBe(ShadowType.None)
    })

    it('should allow items to override the base value with "false"', () => {
      const result = Tables.make({
        shadowed: true,
        currentItem: { shadowed: false },
        headerItem: { shadowed: false },
      })
      expect(result.shadow).toBe(Tables.defaultConfig.shadowType)
      expect(result.currentItem.shadow).toBe(ShadowType.None)
      expect(result.headerItem.shadow).toBe(ShadowType.None)
    })

    it('should allow items to override the base value with "true"', () => {
      const result = Tables.make({
        shadowed: false,
        currentItem: { shadowed: true },
        headerItem: { shadowed: true },
      })
      expect(result.shadow).toBe(ShadowType.None)
      expect(result.currentItem.shadow).toBe(Tables.defaultConfig.shadowType)
      expect(result.headerItem.shadow).toBe(Tables.defaultConfig.shadowType)
    })
  })
})
