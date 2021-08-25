import * as Theme from './theme'

describe('Theme.make', () => {
  it('should match snapshot', () => {
    const result = Theme.make()
    expect(result).toMatchSnapshot()
  })
  it('should accept a theme name', () => {
    const result = Theme.make({ name: 'example-theme' })
    expect(result).toMatchSnapshot()
  })
})
