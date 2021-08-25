import {
  Corner,
  evalConfigBooleans,
  HoverState,
  mergeConfig,
  Side,
  StatusState,
  UIState,
} from '.'

describe('evalConfigBooleans', () => {
  it('should return the specified default if no input is provided', () => {
    const result = evalConfigBooleans(true, 'example')
    expect(result).toBe(true)
  })
  it('should return the specified default if a non-boolean input is provided', () => {
    const input = { example: null }
    const result = evalConfigBooleans(false, 'example', input)
    expect(result).toBe(false)
  })
  it('should accept false', () => {
    const input = { example: false }
    const result = evalConfigBooleans(true, 'example', input)
    expect(result).toBe(false)
  })
  it('should accept true', () => {
    const input = { example: true }
    const result = evalConfigBooleans(false, 'example', input)
    expect(result).toBe(true)
  })
  it('should merge multiple values', () => {
    const base = { example: false }
    const final = { example: true }
    const result = evalConfigBooleans(false, 'example', base, final)
    expect(result).toBe(true)
  })
})

describe('mergeConfig', () => {
  it('should work', () => {
    type Test = {
      corner: Corner
      uiState: HoverState
      statusState: StatusState
      side: Side
    }
    const input: Test = {
      corner: Corner.All,
      uiState: UIState.Hover,
      statusState: UIState.Inactive,
      side: Side.Left,
    }
    const result = mergeConfig<Test>(input, {})
    expect(result).toEqual(input)
  })
})
