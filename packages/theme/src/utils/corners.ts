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
  [Corner.TopLeft]?: T
  [Corner.TopRight]?: T
  [Corner.BottomLeft]?: T
  [Corner.BottomRight]?: T
}

export const evalCorners = <T>(options: CornersConfig<T>): Corners<T> => {
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
  } = options
  return {
    topLeft: topLeft || top || left || all,
    topRight: topRight || top || right || all,
    bottomLeft: bottomLeft || bottom || left || all,
    bottomRight: bottomRight || bottom || right || all,
  }
}
