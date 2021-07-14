export enum Side {
  All = 'all',
  X = 'x',
  Y = 'y',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export type SidesConfig<T> = {
  [key in Side]?: T
}

export type Sides<T> = {
  [Side.Top]: T
  [Side.Right]: T
  [Side.Bottom]: T
  [Side.Left]: T
}

export const configToSides = <T>(
  defaults: Sides<T>,
  sides: SidesConfig<T>,
): Sides<T> => {
  const { all, x, y, top, bottom, left, right } = sides
  const { top: dTop, bottom: dBottom, left: dLeft, right: dRight } = defaults
  return {
    top: top || y || all || dTop,
    right: right || x || all || dRight,
    bottom: bottom || y || all || dBottom,
    left: left || x || all || dLeft,
  }
}
