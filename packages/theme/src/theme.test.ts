import { makeTheme } from './theme'
import {
  mergeConfig,
  Corner,
  HoverState,
  StatusState,
  Side,
  UIState,
} from './utils'

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
