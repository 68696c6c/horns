export enum Corner {
  All = 'all',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  TopLeft = 'topLeft',
  TopRight = 'topRight',
  BottomLeft = 'bottomLeft',
  BottomRight = 'bottomRight',
}

export type CornersConfig<T> = {
  [key in Corner]?: T
}

export type Corners<T> = {
  [Corner.TopLeft]: T
  [Corner.TopRight]: T
  [Corner.BottomLeft]: T
  [Corner.BottomRight]: T
}

export const configToCorners = <T>(
  defaults: Corners<T>,
  corners: CornersConfig<T>,
): Corners<T> => {
  const {
    all,
    top,
    bottom,
    left,
    right,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  } = corners
  const {
    topLeft: dTopLeft,
    topRight: dTopRight,
    bottomLeft: dBottomLeft,
    bottomRight: dBottomRight,
  } = defaults
  return {
    topLeft: topLeft || top || left || all || dTopLeft,
    topRight: topRight || top || right || all || dTopRight,
    bottomLeft: bottomLeft || bottom || left || all || dBottomLeft,
    bottomRight: bottomRight || bottom || right || all || dBottomRight,
  }
}
