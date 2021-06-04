import _merge from 'lodash.merge'

export enum Breakpoint {
  Mobile = 'mobile',
  Min = 'min',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Max = 'max',
}

export type BreakpointsConfig = {
  [key in Breakpoint]: string
}

export const defaultConfig: BreakpointsConfig = {
  mobile: 'small',
  min: '320px',
  small: '480px',
  medium: '768px',
  large: '992px',
  max: '1200px',
}

export interface Breakpoints {
  readonly mobile: string
  readonly min: string
  readonly small: string
  readonly medium: string
  readonly large: string
  readonly max: string
}

export const makeBreakpoints = (config?: Partial<BreakpointsConfig>) => {
  const mergedConfig = _merge(defaultConfig, config)
  return {
    mobile: mergedConfig[mergedConfig.mobile as Breakpoint],
    min: mergedConfig.min,
    small: mergedConfig.small,
    medium: mergedConfig.medium,
    large: mergedConfig.large,
    max: mergedConfig.max,
  }
}
