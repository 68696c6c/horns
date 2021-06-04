import { makeColors } from './colors'
import { Mode } from './types'

describe('makeColors', () => {
  it('should support dark mode', () => {
    const result = makeColors({ mode: Mode.Dark })
    expect(result).toMatchSnapshot()
  })
  it('should support light mode', () => {
    const result = makeColors({ mode: Mode.Light })
    expect(result).toMatchSnapshot()
  })
})
