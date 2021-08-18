export enum FontWeight {
  Lighter = 'lighter',
  Light = 'light',
  Base = 'base',
  SemiBold = 'semiBold',
  Bold = 'bold',
  Bolder = 'bolder',
}

export type FontWeights = {
  [key in FontWeight]: number
}

export const defaultFontWeights: FontWeights = {
  base: 400,
  lighter: 100,
  light: 200,
  semiBold: 600,
  bold: 700,
  bolder: 900,
}
