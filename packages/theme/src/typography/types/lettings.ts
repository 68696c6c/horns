export enum Letting {
  Min = 'min',
  Base = 'base',
  Max = 'max',
}

export type Lettings = {
  [key in Letting]: string
}

export const defaultLettings: Lettings = {
  min: '1em',
  base: '1.6em',
  max: '2em',
}
