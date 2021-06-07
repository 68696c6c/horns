import { Breakpoint, makeBreakpoints, defaultConfig } from './breakpoints'

describe('Breakpoints', () => {
  it('should use default values if no config is provided', () => {
    const result = makeBreakpoints()
    expect(result).toEqual({
      ...defaultConfig,
      mobile: defaultConfig.small,
    })
  })

  it('should use default values if an empty config is provided', () => {
    const result = makeBreakpoints({})
    expect(result).toEqual({
      ...defaultConfig,
      mobile: defaultConfig.small,
    })
  })

  it('should merge provided config values with defaults', () => {
    const result = makeBreakpoints({
      small: '500px',
    })
    expect(result).toEqual({
      mobile: '500px',
      min: '320px',
      small: '500px',
      medium: '768px',
      large: '992px',
      max: '1200px',
    })
  })

  it('should set the mobile breakpoint correctly', () => {
    const result = makeBreakpoints({
      mobile: Breakpoint.Large,
      large: '800px',
    })
    expect(result).toEqual({
      ...defaultConfig,
      mobile: '800px',
      large: '800px',
    })
  })
})
