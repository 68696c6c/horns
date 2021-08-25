import {
  BorderStyle,
  Color,
  ShadowType,
  Size,
  Font,
  Breakpoint,
} from '../../config'
import { Cursor } from '../../utils'

import * as Blocks from '.'

const defaultTheme = Blocks.make(Blocks.defaultConfig)

describe('Blocks.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Blocks.make()
    expect(result).toStrictEqual(defaultTheme)
  })

  describe('breakpoint', () => {
    it('should use the default value if no value is specified', () => {
      const result = Blocks.make()
      expect(result.breakpoint).toBe(Blocks.defaultConfig.breakpoint)
    })

    it('should accept a value', () => {
      const result = Blocks.make({ breakpoint: Breakpoint.Large })
      expect(result.breakpoint).toBe(Size.Large)
    })
  })

  describe('border', () => {
    it('should use the default value if no value is specified', () => {
      const result = Blocks.make()
      expect(result.border).toStrictEqual(defaultTheme.border)
    })

    it('should accept "all" inputs', () => {
      const inputBorder = { style: BorderStyle.Groove, width: Size.Giant }
      const result = Blocks.make({ border: { all: inputBorder } })
      expect(result.border).toStrictEqual({
        top: inputBorder,
        bottom: inputBorder,
        left: inputBorder,
        right: inputBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const result = Blocks.make({
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
      const result = Blocks.make({
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
      const result = Blocks.make({
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
      const result = Blocks.make()
      expect(result.color).toBe(Blocks.defaultConfig.color)
    })

    it('should accept a value', () => {
      const result = Blocks.make({ color: Color.Tertiary })
      expect(result.color).toBe(Color.Tertiary)
    })
  })

  describe('contained', () => {
    it('should use the default value if no value is specified', () => {
      const result = Blocks.make()
      expect(result.contained).toBe(Blocks.defaultConfig.contained)
    })

    it('should accept true', () => {
      const result = Blocks.make({ contained: true })
      expect(result.contained).toBe(true)
    })

    it('should accept false', () => {
      const result = Blocks.make({ contained: false })
      expect(result.contained).toBe(false)
    })
  })

  describe('cursor', () => {
    it('should use the default value if no value is specified', () => {
      const result = Blocks.make()
      expect(result.cursor).toBe(Blocks.defaultConfig.cursor)
    })

    it('should accept a value', () => {
      const result = Blocks.make({ cursor: Cursor.NoDrop })
      expect(result.cursor).toBe(Cursor.NoDrop)
    })
  })

  describe('font', () => {
    it('should use the default value if no value is specified', () => {
      const result = Blocks.make()
      expect(result.font).toBe(Blocks.defaultConfig.font)
    })

    it('should accept a value', () => {
      const result = Blocks.make({ font: Font.Compact })
      expect(result.font).toBe(Font.Compact)
    })
  })

  // describe('outlined', () => {
  //   it('should use the default value if no value is specified', () => {
  //     const result = Blocks.make()
  //     expect(result.outlined).toBe(Blocks.defaultConfig.outlined)
  //   })
  //
  //   it('should accept true', () => {
  //     const result = Blocks.make({ outlined: true })
  //     expect(result.outlined).toBe(true)
  //   })
  //
  //   it('should accept false', () => {
  //     const result = Blocks.make({ outlined: false })
  //     expect(result.outlined).toBe(false)
  //   })
  // })

  describe('padding', () => {
    it('should use the default value if no value is specified', () => {
      const result = Blocks.make()
      expect(result.padding).toStrictEqual(defaultTheme.padding)
    })

    it('should accept "all" inputs', () => {
      const result = Blocks.make({
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
      const result = Blocks.make({
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
      const result = Blocks.make({
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
      const result = Blocks.make()
      expect(result.radius).toStrictEqual(defaultTheme.radius)
    })

    it('should accept "all" inputs', () => {
      const result = Blocks.make({
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
      const result = Blocks.make({
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
      const result = Blocks.make({
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
      const result = Blocks.make()
      expect(result.shadow).toBe(defaultTheme.shadow)
    })

    it('should use the configured shadow type if "shadowed" is true', () => {
      const result = Blocks.make({ shadowed: true })
      expect(result.shadow).toBe(Blocks.defaultConfig.shadowType)
    })

    it('should use the "none" shadow type if "shadowed" is false', () => {
      const result = Blocks.make({ shadowed: false })
      expect(result.shadow).toBe(ShadowType.None)
    })
  })
})
