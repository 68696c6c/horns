import { Corner, Side } from './utils'

export enum Size {
  Min = 'min',
  Tiny = 'tiny',
  XXSmall = 'xxSmall',
  XSmall = 'xSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xLarge',
  XXLarge = 'xxLarge',
  Giant = 'giant',
  Max = 'max',
}

export type SideSizeOptions = {
  [key in Side]?: Size
}

export type CornerSizeOptions = {
  [key in Corner]?: Size
}

export type Sizes = {
  [key in Size]: string
}

export const defaultSizes: Sizes = {
  min: '0px',
  tiny: '2px',
  xxSmall: '4px',
  xSmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '48px',
  giant: '64px',
  max: '88px',
}
