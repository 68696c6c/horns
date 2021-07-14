import { BorderStyle } from '../borders'
import { Size } from '../sizes'

import { makeButtons, makeControls, makeTables } from '.'

describe('makeButtons', () => {
  const defaults = {
    border: {
      bottom: { style: BorderStyle.Solid, width: Size.Tiny },
      left: { style: BorderStyle.Solid, width: Size.Tiny },
      right: { style: BorderStyle.Solid, width: Size.Tiny },
      top: { style: BorderStyle.Solid, width: Size.Tiny },
    },
    padding: {
      bottom: Size.Small,
      left: Size.Medium,
      right: Size.Medium,
      top: Size.Small,
    },
    radius: {
      bottomLeft: Size.Tiny,
      bottomRight: Size.Tiny,
      topLeft: Size.Tiny,
      topRight: Size.Tiny,
    },
  }
  it('should return default values if no input is provided', () => {
    const result = makeButtons()
    expect(result).toStrictEqual(defaults)
  })
  it('should return default values for missing no inputs', () => {
    const input = {}
    const result = makeButtons(input)
    expect(result).toStrictEqual(defaults)
  })
})

describe('makeControls', () => {
  const defaults = {
    border: {
      bottom: { style: BorderStyle.Solid, width: Size.Tiny },
      left: { style: BorderStyle.Solid, width: Size.Tiny },
      right: { style: BorderStyle.Solid, width: Size.Tiny },
      top: { style: BorderStyle.Solid, width: Size.Tiny },
    },
    padding: {
      bottom: Size.XSmall,
      left: Size.XSmall,
      right: Size.XSmall,
      top: Size.XSmall,
    },
    radius: {
      bottomLeft: Size.Tiny,
      bottomRight: Size.Tiny,
      topLeft: Size.Tiny,
      topRight: Size.Tiny,
    },
  }
  it('should return default values if no input is provided', () => {
    const result = makeControls()
    expect(result).toStrictEqual(defaults)
  })
  it('should return default values for missing no inputs', () => {
    const input = {}
    const result = makeControls(input)
    expect(result).toStrictEqual(defaults)
  })
})

describe('makeTables', () => {
  const defaults = {
    border: {
      bottom: { style: BorderStyle.Solid, width: Size.Tiny },
      left: { style: BorderStyle.Solid, width: Size.Tiny },
      right: { style: BorderStyle.Solid, width: Size.Tiny },
      top: { style: BorderStyle.Solid, width: Size.Tiny },
    },
    padding: {
      bottom: Size.XSmall,
      left: Size.XSmall,
      right: Size.XSmall,
      top: Size.XSmall,
    },
    radius: {
      bottomLeft: Size.Tiny,
      bottomRight: Size.Tiny,
      topLeft: Size.Tiny,
      topRight: Size.Tiny,
    },
  }
  it('should return default values if no input is provided', () => {
    const result = makeTables()
    expect(result).toStrictEqual(defaults)
  })
  it('should return default values for missing no inputs', () => {
    const input = {}
    const result = makeTables(input)
    expect(result).toStrictEqual(defaults)
  })
})
