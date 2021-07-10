import { makeSizes, Size, Sizes } from '../sizes'

import {
  BorderStyle,
  getBorderValues,
  evalBorderSizes,
  isBorderProperties,
  evalBorders,
  BorderProperties,
  BordersConfig,
  Borders,
} from '.'

describe('isBorderProperties', () => {
  it('should return false if no input is provided', () => {
    const result = isBorderProperties()
    expect(result).toBe(false)
  })
  it('should detect border property width', () => {
    const input = {
      width: Size.Tiny,
    }
    const result = isBorderProperties(input)
    expect(result).toBe(true)
  })
  it('should detect border property style', () => {
    const input = {
      style: BorderStyle.Dotted,
    }
    const result = isBorderProperties(input)
    expect(result).toBe(true)
  })
  it('should detect border config', () => {
    const input = {
      top: {
        width: Size.Tiny,
      },
    }
    const result = isBorderProperties(input)
    expect(result).toBe(false)
  })
  it('should detect incomplete border configs', () => {
    const input = {
      all: {},
    }
    const result = isBorderProperties(input)
    expect(result).toBe(false)
  })
})

describe('evalBorderValues', () => {
  it('should work', () => {
    const sizes = makeSizes()
    const input = {
      width: Size.Tiny,
    }
    const result = getBorderValues(sizes, input)
    expect(result.width).toBe('2px')
    expect(result.style).toBe('')
  })
})

describe('getBorderValues', () => {
  it('should work', () => {
    const sizes = makeSizes()
    const input = {
      top: { width: Size.Tiny },
      bottom: { style: BorderStyle.Dashed },
      left: { width: Size.XLarge, style: BorderStyle.Solid },
      right: { width: Size.Giant, style: BorderStyle.Dotted },
    }
    const { top, bottom, left, right } = evalBorderSizes(sizes, input)
    expect(top.width).toBe('2px')
    expect(top.style).toBe('')
    expect(bottom.width).toBe('')
    expect(bottom.style).toBe('dashed')
    expect(left.width).toBe('32px')
    expect(left.style).toBe('solid')
    expect(right.width).toBe('64px')
    expect(right.style).toBe('dotted')
  })
})

describe('evalBorders', () => {
  const sizes: Sizes = {
    none: '0px',
    tiny: '2px',
    xxSmall: '4px',
    xSmall: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xxLarge: '48px',
    giant: '64px',
  }
  const defaults: Required<Borders> = {
    top: {
      width: sizes[Size.Tiny],
      style: BorderStyle.Solid,
    },
    bottom: {
      width: sizes[Size.Tiny],
      style: BorderStyle.Solid,
    },
    left: {
      width: sizes[Size.Tiny],
      style: BorderStyle.Solid,
    },
    right: {
      width: sizes[Size.Tiny],
      style: BorderStyle.Solid,
    },
  }
  it('should allow the "all" prop value override all default values', () => {
    const input: BordersConfig = {
      all: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.bottom).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.left).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.right).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
  })
  it('should handle a BorderProperties value as an "all" value', () => {
    const input: BorderProperties = {
      width: Size.Giant,
      style: BorderStyle.Dotted,
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.bottom).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.left).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.right).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
  })
  it('should allow the "x" prop value override the horizontal default values', () => {
    const input: BordersConfig = {
      x: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
    expect(result.bottom).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
    expect(result.left).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.right).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
  })
  it('should allow the "y" prop value override the vertical default values', () => {
    const input: BordersConfig = {
      y: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.bottom).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
    expect(result.left).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
    expect(result.right).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
  })
  it('should allow default values for incomplete prop values', () => {
    const input: BordersConfig = {
      top: {
        width: Size.Giant,
      },
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '64px',
      style: BorderStyle.Solid,
    })
    expect(result.bottom).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
    expect(result.left).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
    expect(result.right).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
  })
  it('should correctly evaluate the "all" value with the other prop values', () => {
    const input: BordersConfig = {
      all: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
      y: {
        width: Size.XSmall,
        style: BorderStyle.Double,
      },
      left: {
        width: Size.Large,
        style: BorderStyle.Dashed,
      },
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '8px',
      style: BorderStyle.Double,
    })
    expect(result.bottom).toStrictEqual({
      width: '8px',
      style: BorderStyle.Double,
    })
    expect(result.left).toStrictEqual({
      width: '24px',
      style: BorderStyle.Dashed,
    })
    expect(result.right).toStrictEqual({
      width: '64px',
      style: BorderStyle.Dotted,
    })
  })
  it('should allow default values when evaluating incomplete prop values', () => {
    const input: BordersConfig = {
      y: {
        width: Size.XSmall,
        style: BorderStyle.Double,
      },
      left: {
        width: Size.Large,
        style: BorderStyle.Dashed,
      },
    }
    const result = evalBorders(sizes, defaults, input)
    expect(result.top).toStrictEqual({
      width: '8px',
      style: BorderStyle.Double,
    })
    expect(result.bottom).toStrictEqual({
      width: '8px',
      style: BorderStyle.Double,
    })
    expect(result.left).toStrictEqual({
      width: '24px',
      style: BorderStyle.Dashed,
    })
    expect(result.right).toStrictEqual({
      width: '2px',
      style: BorderStyle.Solid,
    })
  })
})
