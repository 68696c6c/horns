import { BorderStyle } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { Size } from '../sizes'
import { Font } from '../typography'

import { defaultNav, makeNav, NavConfig } from './nav'

describe('makeNav', () => {
  const expected = makeNav(defaultNav)

  it('should return default values if no input is provided', () => {
    const result = makeNav()
    expect(result).toStrictEqual(expected)
  })

  it('should use default values for incomplete inputs', () => {
    const input: Partial<NavConfig> = {
      color: Colorway.Tertiary,
      currentItem: { color: Colorway.Secondary },
    }
    const result = makeNav(input)
    expect(result).toMatchSnapshot()
  })

  describe('border', () => {
    it('should accept "all" inputs', () => {
      const navBorder = {
        style: BorderStyle.Groove,
        width: Size.Giant,
      }
      const itemBorder = {
        style: BorderStyle.Double,
        width: Size.Medium,
      }
      const input: Partial<NavConfig> = {
        border: {
          all: navBorder,
        },
        currentItem: {
          border: {
            all: itemBorder,
          },
        },
      }
      const result = makeNav(input)
      expect(result.border).toStrictEqual({
        top: navBorder,
        bottom: navBorder,
        left: navBorder,
        right: navBorder,
      })
      expect(result.currentItem.border).toStrictEqual({
        top: itemBorder,
        bottom: itemBorder,
        left: itemBorder,
        right: itemBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: Partial<NavConfig> = {
        border: {
          x: {
            style: BorderStyle.Groove,
            width: Size.Giant,
          },
          y: {
            style: BorderStyle.Double,
            width: Size.XXSmall,
          },
        },
        currentItem: {
          border: {
            x: {
              style: BorderStyle.Dotted,
              width: Size.Medium,
            },
            y: {
              style: BorderStyle.Dashed,
              width: Size.XLarge,
            },
          },
        },
      }
      const result = makeNav(input)
      expect(result.border).toStrictEqual({
        top: {
          style: BorderStyle.Double,
          width: Size.XXSmall,
        },
        bottom: {
          style: BorderStyle.Double,
          width: Size.XXSmall,
        },
        left: {
          style: BorderStyle.Groove,
          width: Size.Giant,
        },
        right: {
          style: BorderStyle.Groove,
          width: Size.Giant,
        },
      })
      expect(result.currentItem.border).toStrictEqual({
        top: {
          style: BorderStyle.Dashed,
          width: Size.XLarge,
        },
        bottom: {
          style: BorderStyle.Dashed,
          width: Size.XLarge,
        },
        left: {
          style: BorderStyle.Dotted,
          width: Size.Medium,
        },
        right: {
          style: BorderStyle.Dotted,
          width: Size.Medium,
        },
      })
    })

    it('should accept complete inputs', () => {
      const input: Partial<NavConfig> = {
        border: {
          top: {
            style: BorderStyle.Double,
            width: Size.Giant,
          },
          bottom: {
            style: BorderStyle.Dashed,
            width: Size.XXLarge,
          },
          left: {
            style: BorderStyle.Groove,
            width: Size.XLarge,
          },
          right: {
            style: BorderStyle.Dotted,
            width: Size.Medium,
          },
        },
        currentItem: {
          border: {
            top: {
              style: BorderStyle.Inset,
              width: Size.Small,
            },
            bottom: {
              style: BorderStyle.Outset,
              width: Size.XSmall,
            },
            left: {
              style: BorderStyle.Ridge,
              width: Size.XXSmall,
            },
            right: {
              style: BorderStyle.Hidden,
              width: Size.Tiny,
            },
          },
        },
      }
      const result = makeNav(input)
      expect(result.border).toStrictEqual({
        top: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
        bottom: {
          style: BorderStyle.Dashed,
          width: Size.XXLarge,
        },
        left: {
          style: BorderStyle.Groove,
          width: Size.XLarge,
        },
        right: {
          style: BorderStyle.Dotted,
          width: Size.Medium,
        },
      })
      expect(result.currentItem.border).toStrictEqual({
        top: {
          style: BorderStyle.Inset,
          width: Size.Small,
        },
        bottom: {
          style: BorderStyle.Outset,
          width: Size.XSmall,
        },
        left: {
          style: BorderStyle.Ridge,
          width: Size.XXSmall,
        },
        right: {
          style: BorderStyle.Hidden,
          width: Size.Tiny,
        },
      })
    })

    it('should merge nav and item inputs', () => {
      const input: Partial<NavConfig> = {
        border: {
          all: {
            style: BorderStyle.Double,
            width: Size.Giant,
          },
        },
        currentItem: {
          border: {
            top: {
              style: BorderStyle.Outset,
              width: Size.XSmall,
            },
          },
        },
      }
      const result = makeNav(input)
      expect(result.border).toStrictEqual({
        top: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
        bottom: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
        left: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
        right: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
      })
      expect(result.currentItem.border).toStrictEqual({
        top: {
          style: BorderStyle.Outset,
          width: Size.XSmall,
        },
        bottom: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
        left: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
        right: {
          style: BorderStyle.Double,
          width: Size.Giant,
        },
      })
    })
  })

  it('should accept color values', () => {
    const input: Partial<NavConfig> = {
      color: Colorway.Tertiary,
      currentItem: { color: Colorway.Secondary },
    }
    const result = makeNav(input)
    expect(result.color).toBe(Colorway.Tertiary)
    expect(result.currentItem.color).toBe(Colorway.Secondary)
  })

  it('should accept cursor values', () => {
    const input: Partial<NavConfig> = {
      cursor: Cursor.Pointer,
      currentItem: { cursor: Cursor.Progress },
    }
    const result = makeNav(input)
    expect(result.cursor).toBe(Cursor.Pointer)
    expect(result.currentItem.cursor).toBe(Cursor.Progress)
  })

  it('should accept font values', () => {
    const input: Partial<NavConfig> = {
      font: Font.Control,
      currentItem: { font: Font.Control },
    }
    const result = makeNav(input)
    expect(result.font).toBe(Font.Control)
    expect(result.currentItem.font).toBe(Font.Control)
  })

  describe('padding', () => {
    it('should accept "all" inputs', () => {
      const input: Partial<NavConfig> = {
        padding: { all: Size.Giant },
        currentItem: {
          padding: { all: Size.Medium },
        },
      }
      const result = makeNav(input)
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
      expect(result.currentItem.padding).toStrictEqual({
        top: Size.Medium,
        bottom: Size.Medium,
        left: Size.Medium,
        right: Size.Medium,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: Partial<NavConfig> = {
        padding: {
          x: Size.Giant,
          y: Size.Large,
        },
        currentItem: {
          padding: {
            x: Size.Small,
            y: Size.Medium,
          },
        },
      }
      const result = makeNav(input)
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
      const input: Partial<NavConfig> = {
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
      }
      const result = makeNav(input)
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

    it('should merge nav and item inputs', () => {
      const input: Partial<NavConfig> = {
        padding: { all: Size.Giant },
        currentItem: {
          padding: { top: Size.XXSmall },
        },
      }
      const result = makeNav(input)
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
    it('should accept "all" inputs', () => {
      const input: Partial<NavConfig> = {
        radius: { all: Size.Giant },
        currentItem: {
          radius: { all: Size.Medium },
        },
      }
      const result = makeNav(input)
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
      const input: Partial<NavConfig> = {
        radius: {
          left: Size.Giant,
          right: Size.Large,
        },
        currentItem: {
          radius: {
            top: Size.Small,
            bottom: Size.Medium,
          },
        },
      }
      const result = makeNav(input)
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
      const input: Partial<NavConfig> = {
        radius: {
          topRight: Size.Giant,
          bottomRight: Size.Large,
          topLeft: Size.Medium,
          bottomLeft: Size.Small,
        },
        currentItem: {
          radius: {
            topRight: Size.XXLarge,
            bottomRight: Size.XLarge,
            topLeft: Size.XSmall,
            bottomLeft: Size.XXSmall,
          },
        },
      }
      const result = makeNav(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Large,
        topLeft: Size.Medium,
        bottomLeft: Size.Small,
      })
      expect(result.currentItem.radius).toStrictEqual({
        topRight: Size.XXLarge,
        bottomRight: Size.XLarge,
        topLeft: Size.XSmall,
        bottomLeft: Size.XXSmall,
      })
    })

    it('should merge nav and item inputs', () => {
      const input: Partial<NavConfig> = {
        radius: { all: Size.Giant },
        currentItem: {
          radius: { topLeft: Size.XXSmall },
        },
      }
      const result = makeNav(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
      expect(result.currentItem.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.XXSmall,
        bottomLeft: Size.Giant,
      })
    })
  })
})
