import { Size } from '../sizes'

import {
  BorderStyle,
  SideBordersConfig,
  evalSideBordersConfig,
  isBorderProperties,
  BorderProperties,
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

describe('evalSideBordersConfig', () => {
  const defaults: SideBordersConfig = {
    top: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
    bottom: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
    left: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
    right: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  }
  it('should allow the "all" prop value override all default values', () => {
    const input: SideBordersConfig = {
      all: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
    }
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.left).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.right).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
  })
  it('should handle a BorderProperties value as an "all" value', () => {
    const input: BorderProperties = {
      width: Size.Giant,
      style: BorderStyle.Dotted,
    }
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.left).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.right).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
  })
  it('should allow the "x" prop value override the horizontal default values', () => {
    const input: SideBordersConfig = {
      x: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
    }
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
    expect(result.left).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.right).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
  })
  it('should allow the "y" prop value override the vertical default values', () => {
    const input: SideBordersConfig = {
      y: {
        width: Size.Giant,
        style: BorderStyle.Dotted,
      },
    }
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
    expect(result.left).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
    expect(result.right).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
  })
  it('should allow default values for incomplete prop values', () => {
    const input: SideBordersConfig = {
      top: {
        width: Size.Giant,
      },
    }
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Solid,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
    expect(result.left).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
    expect(result.right).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
  })
  it('should correctly evaluate the "all" value with the other prop values', () => {
    const input: SideBordersConfig = {
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
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.XSmall,
      style: BorderStyle.Double,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.XSmall,
      style: BorderStyle.Double,
    })
    expect(result.left).toStrictEqual({
      width: Size.Large,
      style: BorderStyle.Dashed,
    })
    expect(result.right).toStrictEqual({
      width: Size.Giant,
      style: BorderStyle.Dotted,
    })
  })
  it('should allow default values when evaluating incomplete prop values', () => {
    const input: SideBordersConfig = {
      y: {
        width: Size.XSmall,
        style: BorderStyle.Double,
      },
      left: {
        width: Size.Large,
        style: BorderStyle.Dashed,
      },
    }
    const result = evalSideBordersConfig(defaults, input)
    expect(result.top).toStrictEqual({
      width: Size.XSmall,
      style: BorderStyle.Double,
    })
    expect(result.bottom).toStrictEqual({
      width: Size.XSmall,
      style: BorderStyle.Double,
    })
    expect(result.left).toStrictEqual({
      width: Size.Large,
      style: BorderStyle.Dashed,
    })
    expect(result.right).toStrictEqual({
      width: Size.Tiny,
      style: BorderStyle.Solid,
    })
  })
})
