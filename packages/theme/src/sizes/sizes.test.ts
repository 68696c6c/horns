import {
  evalSideSizes,
  evalCornerSizes,
  isSize,
  SideSizes,
  SideSizesConfig,
  Size,
  CornerSizes,
  CornerSizesConfig,
  getSizeValue,
  Sizes,
} from './sizes'

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

describe('isSize', () => {
  it('should return true if the input is a Size', () => {
    const result = isSize(Size.Large)
    expect(result).toBe(true)
  })
  it('should return false if the input has an "all" property', () => {
    const result = isSize({
      all: Size.Large,
    })
    expect(result).toBe(false)
  })
  it('should return false if the input has a corner property', () => {
    const result = isSize({
      bottomRight: Size.Large,
    })
    expect(result).toBe(false)
  })
  it('should return false if the input has a side property', () => {
    const result = isSize({
      top: Size.Large,
    })
    expect(result).toBe(false)
  })
  it('should return false if the input is an empty object', () => {
    const result = isSize({})
    expect(result).toBe(false)
  })
  it('should return false if the input is undefined', () => {
    const result = isSize()
    expect(result).toBe(false)
  })
})

describe('getSizeValue', () => {
  it('should return "none" if no input is provided', () => {
    const result = getSizeValue()
    expect(result).toBe(Size.None)
  })
})

describe('evalSideSizes', () => {
  let defaults: SideSizes
  beforeEach(() => {
    defaults = {
      top: Size.Small,
      bottom: Size.Small,
      left: Size.Small,
      right: Size.Small,
    }
  })
  it('should allow the "all" prop value override all default values', () => {
    const props: SideSizesConfig = {
      all: Size.Tiny,
    }
    const result = evalSideSizes(sizes, defaults, props)
    expect(result.top).toBe(sizes[Size.Tiny])
    expect(result.bottom).toBe(sizes[Size.Tiny])
    expect(result.left).toBe(sizes[Size.Tiny])
    expect(result.right).toBe(sizes[Size.Tiny])
  })
  it('should handle a raw size value as an "all" value', () => {
    const result = evalSideSizes(sizes, defaults, Size.Tiny)
    expect(result.top).toBe(sizes[Size.Tiny])
    expect(result.bottom).toBe(sizes[Size.Tiny])
    expect(result.left).toBe(sizes[Size.Tiny])
    expect(result.right).toBe(sizes[Size.Tiny])
  })
  it('should allow the "x" prop value override the horizontal default values', () => {
    const props: SideSizesConfig = {
      x: Size.Tiny,
    }
    const result = evalSideSizes(sizes, defaults, props)
    expect(result.top).toBe(sizes[Size.Small])
    expect(result.bottom).toBe(sizes[Size.Small])
    expect(result.left).toBe(sizes[Size.Tiny])
    expect(result.right).toBe(sizes[Size.Tiny])
  })
  it('should allow the "y" prop value override the vertical default values', () => {
    const props: SideSizesConfig = {
      y: Size.Tiny,
    }
    const result = evalSideSizes(sizes, defaults, props)
    expect(result.top).toBe(sizes[Size.Tiny])
    expect(result.bottom).toBe(sizes[Size.Tiny])
    expect(result.left).toBe(sizes[Size.Small])
    expect(result.right).toBe(sizes[Size.Small])
  })
  it('should allow default values for incomplete prop values', () => {
    const props: SideSizesConfig = {
      top: Size.Tiny,
    }
    const result = evalSideSizes(sizes, defaults, props)
    expect(result.top).toBe(sizes[Size.Tiny])
    expect(result.bottom).toBe(sizes[Size.Small])
    expect(result.left).toBe(sizes[Size.Small])
    expect(result.right).toBe(sizes[Size.Small])
  })
  it('should correctly evaluate the "all" value with the other prop values', () => {
    const props: SideSizesConfig = {
      all: Size.XLarge,
      y: Size.Giant,
      left: Size.Large,
    }
    const result = evalSideSizes(sizes, defaults, props)
    expect(result.top).toBe(sizes[Size.Giant])
    expect(result.bottom).toBe(sizes[Size.Giant])
    expect(result.left).toBe(sizes[Size.Large])
    expect(result.right).toBe(sizes[Size.XLarge])
  })
  it('should allow default values when evaluating incomplete prop values', () => {
    const props: SideSizesConfig = {
      y: Size.Giant,
      left: Size.Large,
    }
    const result = evalSideSizes(sizes, defaults, props)
    expect(result.top).toBe(sizes[Size.Giant])
    expect(result.bottom).toBe(sizes[Size.Giant])
    expect(result.left).toBe(sizes[Size.Large])
    expect(result.right).toBe(sizes[Size.Small])
  })
})

describe('evalCornerSizes', () => {
  let defaults: CornerSizes
  beforeEach(() => {
    defaults = {
      topLeft: Size.Small,
      topRight: Size.Small,
      bottomLeft: Size.Small,
      bottomRight: Size.Small,
    }
  })
  it('should allow the "all" prop value override all default values', () => {
    const props: SideSizesConfig = {
      all: Size.Tiny,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Tiny])
    expect(result.topRight).toBe(sizes[Size.Tiny])
    expect(result.bottomLeft).toBe(sizes[Size.Tiny])
    expect(result.bottomRight).toBe(sizes[Size.Tiny])
  })
  it('should handle a raw size value as an "all" value', () => {
    const result = evalCornerSizes(sizes, defaults, Size.Tiny)
    expect(result.topLeft).toBe(sizes[Size.Tiny])
    expect(result.topRight).toBe(sizes[Size.Tiny])
    expect(result.bottomLeft).toBe(sizes[Size.Tiny])
    expect(result.bottomRight).toBe(sizes[Size.Tiny])
  })
  it('should allow the "top" prop value override the top default values', () => {
    const props: CornerSizesConfig = {
      top: Size.Tiny,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Tiny])
    expect(result.topRight).toBe(sizes[Size.Tiny])
    expect(result.bottomLeft).toBe(sizes[Size.Small])
    expect(result.bottomRight).toBe(sizes[Size.Small])
  })
  it('should allow the "bottom" prop value override the bottom default values', () => {
    const props: CornerSizesConfig = {
      bottom: Size.Tiny,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Small])
    expect(result.topRight).toBe(sizes[Size.Small])
    expect(result.bottomLeft).toBe(sizes[Size.Tiny])
    expect(result.bottomRight).toBe(sizes[Size.Tiny])
  })
  it('should allow the "left" prop value override the left default values', () => {
    const props: CornerSizesConfig = {
      left: Size.Tiny,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Tiny])
    expect(result.topRight).toBe(sizes[Size.Small])
    expect(result.bottomLeft).toBe(sizes[Size.Tiny])
    expect(result.bottomRight).toBe(sizes[Size.Small])
  })
  it('should allow the "right" prop value override the right default values', () => {
    const props: CornerSizesConfig = {
      right: Size.Tiny,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Small])
    expect(result.topRight).toBe(sizes[Size.Tiny])
    expect(result.bottomLeft).toBe(sizes[Size.Small])
    expect(result.bottomRight).toBe(sizes[Size.Tiny])
  })
  it('should allow default values for incomplete prop values', () => {
    const props: CornerSizesConfig = {
      top: Size.Tiny,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Tiny])
    expect(result.topRight).toBe(sizes[Size.Tiny])
    expect(result.bottomLeft).toBe(sizes[Size.Small])
    expect(result.bottomRight).toBe(sizes[Size.Small])
  })
  it('should correctly evaluate the "all" value with the other prop values', () => {
    const props: CornerSizesConfig = {
      all: Size.XLarge,
      top: Size.Giant,
      left: Size.Large,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Giant])
    expect(result.topRight).toBe(sizes[Size.Giant])
    expect(result.bottomLeft).toBe(sizes[Size.Large])
    expect(result.bottomRight).toBe(sizes[Size.XLarge])
  })
  it('should allow default values when evaluating incomplete prop values', () => {
    const props: CornerSizesConfig = {
      bottom: Size.Giant,
      left: Size.Large,
    }
    const result = evalCornerSizes(sizes, defaults, props)
    expect(result.topLeft).toBe(sizes[Size.Large])
    expect(result.topRight).toBe(sizes[Size.Small])
    expect(result.bottomLeft).toBe(sizes[Size.Giant])
    expect(result.bottomRight).toBe(sizes[Size.Giant])
  })
})
