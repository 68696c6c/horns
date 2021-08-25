import { defaultConfig } from './config'
import { makeDefaultFontConfig, makeTypography } from './typography'
import { Direction, TextAlign } from './types'

describe('makeTypography', () => {
  it('should match snapshot', () => {
    const result = makeTypography()
    expect(result).toMatchSnapshot()
  })
})

describe('makeDefaultFontConfig', () => {
  it('should support right-to-left writing direction', () => {
    const config = defaultConfig
    config.direction = Direction.RTL
    const result = makeDefaultFontConfig(config)
    expect(result.align).toEqual(TextAlign.Right)
  })
})
