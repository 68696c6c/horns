import { BorderStyle } from '../borders'
import { Color } from '../colors'
import { ShadowType } from '../shadows'
import { Size } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import { defaultButtons, makeButtons } from './buttons'
import { ElementProps } from './elements'

describe('makeButtons', () => {
  const expected = makeButtons(defaultButtons)

  it('should return default values if no input is provided', () => {
    const result = makeButtons()
    expect(result).toStrictEqual(expected)
  })

  it('should use default values for incomplete inputs', () => {
    const input: ElementProps = {
      color: Color.Tertiary,
    }
    const result = makeButtons(input)
    expect(result).toMatchSnapshot()
  })

  describe('border', () => {
    it('should accept "all" inputs', () => {
      const inputBorder = {
        style: BorderStyle.Groove,
        width: Size.Giant,
      }
      const input: ElementProps = {
        border: {
          all: inputBorder,
        },
      }
      const result = makeButtons(input)
      expect(result.border).toStrictEqual({
        top: inputBorder,
        bottom: inputBorder,
        left: inputBorder,
        right: inputBorder,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: ElementProps = {
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
      const result = makeButtons(input)
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
      const input: ElementProps = {
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
      const result = makeButtons(input)
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
  })

  it('should accept color values', () => {
    const input: ElementProps = {
      color: Color.Tertiary,
    }
    const result = makeButtons(input)
    expect(result.color).toBe(Color.Tertiary)
  })

  it('should accept cursor values', () => {
    const input: ElementProps = {
      cursor: Cursor.Pointer,
    }
    const result = makeButtons(input)
    expect(result.cursor).toBe(Cursor.Pointer)
  })

  it('should accept font values', () => {
    const input: ElementProps = {
      font: Font.Control,
    }
    const result = makeButtons(input)
    expect(result.font).toBe(Font.Control)
  })

  describe('outlined', () => {
    it('should use the default value if no value is specified', () => {
      const input: ElementProps = {}
      const result = makeButtons(input)
      expect(result.outlined).toBe(defaultButtons.outlined)
    })

    it('should accept true', () => {
      const input: ElementProps = {
        outlined: true,
      }
      const result = makeButtons(input)
      expect(result.outlined).toBe(true)
    })

    it('should accept false', () => {
      const input: ElementProps = {
        outlined: false,
      }
      const result = makeButtons(input)
      expect(result.outlined).toBe(false)
    })
  })

  describe('padding', () => {
    it('should accept "all" inputs', () => {
      const input: ElementProps = {
        padding: { all: Size.Giant },
      }
      const result = makeButtons(input)
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: ElementProps = {
        padding: {
          x: Size.Giant,
          y: Size.Large,
        },
      }
      const result = makeButtons(input)
      expect(result.padding).toStrictEqual({
        top: Size.Large,
        bottom: Size.Large,
        left: Size.Giant,
        right: Size.Giant,
      })
    })

    it('should accept complete inputs', () => {
      const input: ElementProps = {
        padding: {
          top: Size.Giant,
          bottom: Size.Large,
          left: Size.Medium,
          right: Size.Small,
        },
      }
      const result = makeButtons(input)
      expect(result.padding).toStrictEqual({
        top: Size.Giant,
        bottom: Size.Large,
        left: Size.Medium,
        right: Size.Small,
      })
    })
  })

  describe('radius', () => {
    it('should accept "all" inputs', () => {
      const input: ElementProps = {
        radius: { all: Size.Giant },
      }
      const result = makeButtons(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })

    it('should accept dimensional inputs', () => {
      const input: ElementProps = {
        radius: {
          left: Size.Giant,
          right: Size.Large,
        },
      }
      const result = makeButtons(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Large,
        bottomRight: Size.Large,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      })
    })

    it('should accept complete inputs', () => {
      const input: ElementProps = {
        radius: {
          topRight: Size.Giant,
          bottomRight: Size.Large,
          topLeft: Size.Medium,
          bottomLeft: Size.Small,
        },
      }
      const result = makeButtons(input)
      expect(result.radius).toStrictEqual({
        topRight: Size.Giant,
        bottomRight: Size.Large,
        topLeft: Size.Medium,
        bottomLeft: Size.Small,
      })
    })
  })

  describe('shadow', () => {
    it('should use the configured shadow type if "shadowed" is true', () => {
      const input: ElementProps = {
        shadowed: true,
      }
      const result = makeButtons(input)
      expect(result.shadow).toBe(defaultButtons.shadowType)
    })

    it('should use the "none" shadow type if "shadowed" is false', () => {
      const input: ElementProps = {
        shadowed: false,
      }
      const result = makeButtons(input)
      expect(result.shadow).toBe(ShadowType.None)
    })
  })
})
