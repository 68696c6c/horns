import { Sizes } from '../sizes'

import { makeButtons, makeControls, makeTables } from '.'

describe('makeButtons', () => {
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
  const defaults = {
    border: {
      bottom: { style: 'solid', width: '2px' },
      left: { style: 'solid', width: '2px' },
      right: { style: 'solid', width: '2px' },
      top: { style: 'solid', width: '2px' },
    },
    padding: { bottom: '12px', left: '16px', right: '16px', top: '12px' },
    radius: {
      bottomLeft: '2px',
      bottomRight: '2px',
      topLeft: '2px',
      topRight: '2px',
    },
  }
  it('should return default values if no input is provided', () => {
    const result = makeButtons(sizes)
    expect(result).toStrictEqual(defaults)
  })
  it('should return default values for missing no inputs', () => {
    const input = {}
    const result = makeButtons(sizes, input)
    expect(result).toStrictEqual(defaults)
  })
})

describe('makeControls', () => {
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
  const defaults = {
    border: {
      bottom: { style: 'solid', width: '2px' },
      left: { style: 'solid', width: '2px' },
      right: { style: 'solid', width: '2px' },
      top: { style: 'solid', width: '2px' },
    },
    padding: {
      bottom: '8px',
      left: '8px',
      right: '8px',
      top: '8px',
    },
    radius: {
      bottomLeft: '2px',
      bottomRight: '2px',
      topLeft: '2px',
      topRight: '2px',
    },
  }
  it('should return default values if no input is provided', () => {
    const result = makeControls(sizes)
    expect(result).toStrictEqual(defaults)
  })
  it('should return default values for missing no inputs', () => {
    const input = {}
    const result = makeControls(sizes, input)
    expect(result).toStrictEqual(defaults)
  })
})

describe('makeTables', () => {
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
  const defaults = {
    border: {
      bottom: { style: 'solid', width: '2px' },
      left: { style: 'solid', width: '2px' },
      right: { style: 'solid', width: '2px' },
      top: { style: 'solid', width: '2px' },
    },
    padding: {
      bottom: '8px',
      left: '8px',
      right: '8px',
      top: '8px',
    },
    radius: {
      bottomLeft: '2px',
      bottomRight: '2px',
      topLeft: '2px',
      topRight: '2px',
    },
  }
  it('should return default values if no input is provided', () => {
    const result = makeTables(sizes)
    expect(result).toStrictEqual(defaults)
  })
  it('should return default values for missing no inputs', () => {
    const input = {}
    const result = makeTables(sizes, input)
    expect(result).toStrictEqual(defaults)
  })
})
