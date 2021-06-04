import { makeTheme } from './theme'

describe('makeTheme', () => {
  it('should match snapshot', () => {
    const result = makeTheme()
    expect(result).toMatchSnapshot()
  })
  it('should accept a theme name', () => {
    const result = makeTheme({ name: 'example-theme' })
    expect(result).toMatchSnapshot()
  })
})
