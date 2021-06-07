import { mergeConfig } from '../utils'

export enum Breakpoint {
  Mobile = 'mobile',
  Min = 'min',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Max = 'max',
}

export type Config = {
  [Breakpoint.Mobile]: Breakpoint
  [Breakpoint.Min]: string
  [Breakpoint.Small]: string
  [Breakpoint.Medium]: string
  [Breakpoint.Large]: string
  [Breakpoint.Max]: string
}

export const defaultConfig: Config = {
  mobile: Breakpoint.Small,
  min: '320px',
  small: '480px',
  medium: '768px',
  large: '992px',
  max: '1200px',
}

export type Breakpoints = {
  readonly [Breakpoint.Mobile]: string
  readonly [Breakpoint.Min]: string
  readonly [Breakpoint.Small]: string
  readonly [Breakpoint.Medium]: string
  readonly [Breakpoint.Large]: string
  readonly [Breakpoint.Max]: string
}

export const makeBreakpoints = (config?: Partial<Config>): Breakpoints => {
  const merged = mergeConfig<Config>(defaultConfig, config)
  return {
    [Breakpoint.Mobile]: merged[merged.mobile] as string,
    [Breakpoint.Min]: merged.min as string,
    [Breakpoint.Small]: merged.small as string,
    [Breakpoint.Medium]: merged.medium as string,
    [Breakpoint.Large]: merged.large as string,
    [Breakpoint.Max]: merged.max as string,
  }
}
