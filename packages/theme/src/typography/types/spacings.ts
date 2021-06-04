export enum TextSpacing {
  Min = 'min',
  Base = 'base',
  Max = 'max',
}

export type TextSpacings = {
  [key in TextSpacing]: string
}

export const defaultTextSpacings: TextSpacings = {
  min: '0 0 0.67em 0',
  base: '',
  max: '0 0 1em 0',
}
