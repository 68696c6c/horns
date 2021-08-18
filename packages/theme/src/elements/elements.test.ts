import { ElementProps, evalBooleanProp } from './elements'

describe('evalBooleanValue', () => {
  it('should return the specified default if no input is provided', () => {
    const result = evalBooleanProp(true, 'outlined')
    expect(result).toBe(true)
  })
  it('should return the specified default if an incomplete input is provided', () => {
    const result = evalBooleanProp(false, 'outlined', {})
    expect(result).toBe(false)
  })
  it('should accept false', () => {
    const input: ElementProps = {
      outlined: false,
    }
    const result = evalBooleanProp(true, 'outlined', input)
    expect(result).toBe(false)
  })
  it('should accept true', () => {
    const input: ElementProps = {
      outlined: true,
    }
    const result = evalBooleanProp(false, 'outlined', input)
    expect(result).toBe(true)
  })
})
