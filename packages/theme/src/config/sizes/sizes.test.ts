import {
  isSize,
  SideSizes,
  Size,
  CornerSizes,
  CornerSizesConfig,
  SideSizesConfig,
  evalSideSizesConfigs,
  evalCornerSizesConfigs,
} from '.'

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

describe('evalSideSizesConfigs', () => {
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
    const result = evalSideSizesConfigs(defaults, props)
    expect(result.top).toBe(Size.Tiny)
    expect(result.bottom).toBe(Size.Tiny)
    expect(result.left).toBe(Size.Tiny)
    expect(result.right).toBe(Size.Tiny)
  })
  it('should handle a raw size value as an "all" value', () => {
    const result = evalSideSizesConfigs(defaults, Size.Tiny)
    expect(result.top).toBe(Size.Tiny)
    expect(result.bottom).toBe(Size.Tiny)
    expect(result.left).toBe(Size.Tiny)
    expect(result.right).toBe(Size.Tiny)
  })
  it('should allow the "x" prop value override the horizontal default values', () => {
    const props: SideSizesConfig = {
      x: Size.Tiny,
    }
    const result = evalSideSizesConfigs(defaults, props)
    expect(result.top).toBe(Size.Small)
    expect(result.bottom).toBe(Size.Small)
    expect(result.left).toBe(Size.Tiny)
    expect(result.right).toBe(Size.Tiny)
  })
  it('should allow the "y" prop value override the vertical default values', () => {
    const props: SideSizesConfig = {
      y: Size.Tiny,
    }
    const result = evalSideSizesConfigs(defaults, props)
    expect(result.top).toBe(Size.Tiny)
    expect(result.bottom).toBe(Size.Tiny)
    expect(result.left).toBe(Size.Small)
    expect(result.right).toBe(Size.Small)
  })
  it('should allow default values for incomplete prop values', () => {
    const props: SideSizesConfig = {
      top: Size.Tiny,
    }
    const result = evalSideSizesConfigs(defaults, props)
    expect(result.top).toBe(Size.Tiny)
    expect(result.bottom).toBe(Size.Small)
    expect(result.left).toBe(Size.Small)
    expect(result.right).toBe(Size.Small)
  })
  it('should correctly evaluate the "all" value with the other prop values', () => {
    const props: SideSizesConfig = {
      all: Size.XLarge,
      y: Size.Giant,
      left: Size.Large,
    }
    const result = evalSideSizesConfigs(defaults, props)
    expect(result.top).toBe(Size.Giant)
    expect(result.bottom).toBe(Size.Giant)
    expect(result.left).toBe(Size.Large)
    expect(result.right).toBe(Size.XLarge)
  })
  it('should allow default values when evaluating incomplete prop values', () => {
    const props: SideSizesConfig = {
      y: Size.Giant,
      left: Size.Large,
    }
    const result = evalSideSizesConfigs(defaults, props)
    expect(result.top).toBe(Size.Giant)
    expect(result.bottom).toBe(Size.Giant)
    expect(result.left).toBe(Size.Large)
    expect(result.right).toBe(Size.Small)
  })
  it('should merge multiple inputs', () => {
    const input1: SideSizesConfig = {
      y: Size.Giant,
      left: Size.Large,
    }
    const input2: SideSizesConfig = {
      x: Size.Tiny,
      top: Size.XSmall,
    }
    const result = evalSideSizesConfigs(defaults, input1, input2)
    expect(result.top).toBe(Size.XSmall)
    expect(result.bottom).toBe(Size.Giant)
    expect(result.left).toBe(Size.Tiny)
    expect(result.right).toBe(Size.Tiny)
  })
})

describe('evalCornerSizesConfigs', () => {
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
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Tiny)
    expect(result.topRight).toBe(Size.Tiny)
    expect(result.bottomLeft).toBe(Size.Tiny)
    expect(result.bottomRight).toBe(Size.Tiny)
  })
  it('should handle a raw size value as an "all" value', () => {
    const result = evalCornerSizesConfigs(defaults, Size.Tiny)
    expect(result.topLeft).toBe(Size.Tiny)
    expect(result.topRight).toBe(Size.Tiny)
    expect(result.bottomLeft).toBe(Size.Tiny)
    expect(result.bottomRight).toBe(Size.Tiny)
  })
  it('should allow the "top" prop value override the top default values', () => {
    const props: CornerSizesConfig = {
      top: Size.Tiny,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Tiny)
    expect(result.topRight).toBe(Size.Tiny)
    expect(result.bottomLeft).toBe(Size.Small)
    expect(result.bottomRight).toBe(Size.Small)
  })
  it('should allow the "bottom" prop value override the bottom default values', () => {
    const props: CornerSizesConfig = {
      bottom: Size.Tiny,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Small)
    expect(result.topRight).toBe(Size.Small)
    expect(result.bottomLeft).toBe(Size.Tiny)
    expect(result.bottomRight).toBe(Size.Tiny)
  })
  it('should allow the "left" prop value override the left default values', () => {
    const props: CornerSizesConfig = {
      left: Size.Tiny,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Tiny)
    expect(result.topRight).toBe(Size.Small)
    expect(result.bottomLeft).toBe(Size.Tiny)
    expect(result.bottomRight).toBe(Size.Small)
  })
  it('should allow the "right" prop value override the right default values', () => {
    const props: CornerSizesConfig = {
      right: Size.Tiny,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Small)
    expect(result.topRight).toBe(Size.Tiny)
    expect(result.bottomLeft).toBe(Size.Small)
    expect(result.bottomRight).toBe(Size.Tiny)
  })
  it('should allow default values for incomplete prop values', () => {
    const props: CornerSizesConfig = {
      top: Size.Tiny,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Tiny)
    expect(result.topRight).toBe(Size.Tiny)
    expect(result.bottomLeft).toBe(Size.Small)
    expect(result.bottomRight).toBe(Size.Small)
  })
  it('should correctly evaluate the "all" value with the other prop values', () => {
    const props: CornerSizesConfig = {
      all: Size.XLarge,
      top: Size.Giant,
      left: Size.Large,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Giant)
    expect(result.topRight).toBe(Size.Giant)
    expect(result.bottomLeft).toBe(Size.Large)
    expect(result.bottomRight).toBe(Size.XLarge)
  })
  it('should allow default values when evaluating incomplete prop values', () => {
    const props: CornerSizesConfig = {
      bottom: Size.Giant,
      left: Size.Large,
    }
    const result = evalCornerSizesConfigs(defaults, props)
    expect(result.topLeft).toBe(Size.Large)
    expect(result.topRight).toBe(Size.Small)
    expect(result.bottomLeft).toBe(Size.Giant)
    expect(result.bottomRight).toBe(Size.Giant)
  })
  it('should merge multiple inputs', () => {
    const input1: CornerSizesConfig = {
      bottom: Size.Giant,
      left: Size.Large,
    }
    const input2: CornerSizesConfig = {
      right: Size.XSmall,
    }
    const result = evalCornerSizesConfigs(defaults, input1, input2)
    expect(result.topLeft).toBe(Size.Large)
    expect(result.topRight).toBe(Size.XSmall)
    expect(result.bottomLeft).toBe(Size.Giant)
    expect(result.bottomRight).toBe(Size.XSmall)
  })
})
