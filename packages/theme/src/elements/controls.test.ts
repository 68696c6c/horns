import { BorderStyle } from '../borders'
import { Color } from '../colors'
import { Cursor } from '../cursors'
import { Size } from '../sizes'
import { Font } from '../typography'

import { defaultControls, makeControls } from './controls'
import { ElementConfig } from './elements'

describe('makeControls', () => {
  const expected = makeControls(defaultControls)

  it('should return default values if no input is provided', () => {
    const result = makeControls()
    expect(result).toStrictEqual(expected)
  })

  it('should use default values for incomplete inputs', () => {
    const input: Partial<ElementConfig> = {
      color: Color.Tertiary,
    }
    const result = makeControls(input)
    expect(result).toMatchSnapshot()
  })

  describe('border', () => {
    it('should accept "all" inputs', () => {
      const inputBorder = {
        style: BorderStyle.Groove,
        width: Size.Giant,
      }
      const input: Partial<ElementConfig> = {
        border: {
          all: inputBorder,
        },
      }
      const result = makeControls(input)
      expect(result.border).toStrictEqual({
        top: inputBorder,
        bottom: inputBorder,
        left: inputBorder,
        right: inputBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: Partial<ElementConfig> = {
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
      }
      const result = makeControls(input)
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
    })

    it('should accept complete inputs', () => {
      const input: Partial<ElementConfig> = {
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
      }
      const result = makeControls(input)
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
    })

    it('should merge nav and item inputs', () => {
      const input: Partial<ElementConfig> = {
        border: {
          all: {
            style: BorderStyle.Double,
            width: Size.Giant,
          },
        },
      }
      const result = makeControls(input)
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
    })
  })

  it('should accept color values', () => {
    const input: Partial<ElementConfig> = {
      color: Color.Tertiary,
    }
    const result = makeControls(input)
    expect(result.color).toBe(Color.Tertiary)
  })

  it('should accept cursor values', () => {
    const input: Partial<ElementConfig> = {
      cursor: Cursor.Pointer,
    }
    const result = makeControls(input)
    expect(result.cursor).toBe(Cursor.Pointer)
  })

  it('should accept font values', () => {
    const input: Partial<ElementConfig> = {
      font: Font.Control,
    }
    const result = makeControls(input)
    expect(result.font).toBe(Font.Control)
  })

  describe('padding', () => {
    it('should accept "all" inputs', () => {
      const input: Partial<ElementConfig> = {
        padding: { all: Size.Giant },
      }
      const result = makeControls(input)
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: Partial<ElementConfig> = {
        padding: {
          x: Size.Giant,
          y: Size.Large,
        },
      }
      const result = makeControls(input)
      expect(result.padding).toStrictEqual({
        top: Size.Large,
        bottom: Size.Large,
        left: Size.Giant,
        right: Size.Giant,
      })
    })

    it('should accept complete inputs', () => {
      const input: Partial<ElementConfig> = {
        padding: {
          top: Size.Giant,
          bottom: Size.Large,
          left: Size.Medium,
          right: Size.Small,
        },
      }
      const result = makeControls(input)
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Large,
        left: Size.Medium,
        right: Size.Small,
      })
    })

    it('should merge nav and item inputs', () => {
      const input: Partial<ElementConfig> = {
        padding: { all: Size.Giant },
      }
      const result = makeControls(input)
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
    })
  })

  describe('radius', () => {
    it('should accept "all" inputs', () => {
      const input: Partial<ElementConfig> = {
        radius: { all: Size.Giant },
      }
      const result = makeControls(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: Partial<ElementConfig> = {
        radius: {
          left: Size.Giant,
          right: Size.Large,
        },
      }
      const result = makeControls(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Large,
        bottomRight: Size.Large,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })

    it('should accept complete inputs', () => {
      const input: Partial<ElementConfig> = {
        radius: {
          topRight: Size.Giant,
          bottomRight: Size.Large,
          topLeft: Size.Medium,
          bottomLeft: Size.Small,
        },
      }
      const result = makeControls(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Large,
        topLeft: Size.Medium,
        bottomLeft: Size.Small,
      })
    })

    it('should merge nav and item inputs', () => {
      const input: Partial<ElementConfig> = {
        radius: { all: Size.Giant },
      }
      const result = makeControls(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })
  })
})
