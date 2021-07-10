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
  [Side.Top]?: T
  [Side.Right]?: T
  [Side.Bottom]?: T
  [Side.Left]?: T
}

export const evalSides = <T>(options: SidesConfig<T>): Sides<T> => {
  const { all, x, y, top, bottom, left, right } = options
  return {
    top: top || y || all,
    right: right || x || all,
    bottom: bottom || y || all,
    left: left || x || all,
  }
}
