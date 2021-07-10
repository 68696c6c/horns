import {
  CornersConfig,
  evalCorners,
  evalSides,
  mergeConfig,
  Side,
  Sides,
  SidesConfig,
  Corners,
} from '../utils'

export enum Size {
  None = 'none',
  Tiny = 'tiny',
  XXSmall = 'xxSmall',
  XSmall = 'xSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xLarge',
  XXLarge = 'xxLarge',
  Giant = 'giant',
}

export const isSize = (
  tbd?: CornerSizesConfig | SideSizesConfig | Size,
): tbd is Size =>
  typeof tbd !== 'undefined' && typeof (tbd as Size) === 'string'

export const getSizeValue = (input?: Size): Size => input || Size.None

export type Config = {
  [key in Size]: string
}

const defaultConfig: Config = {
  none: '0px',
  tiny: '2px',
  xxSmall: '4px',
  xSmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '48px',
  giant: '64px',
}

export type Sizes = Required<Config>

export const makeSizes = (config?: Partial<Config>): Sizes =>
  mergeConfig<Config>(defaultConfig, config)

export type SideSizesConfig = SidesConfig<Size>

export type SideSizes = Required<Sides<Size>>

export type SideValues = Required<Sides<string>>

export const evalSideSizes = (
  sizes: Sizes,
  defaults: SideSizes,
  value?: SideSizesConfig | Size,
): SideValues => {
  if (typeof value === 'undefined') {
    return {
      top: sizes[defaults.top],
      right: sizes[defaults.right],
      bottom: sizes[defaults.bottom],
      left: sizes[defaults.left],
    }
  }
  const input: SideSizesConfig = isSize(value) ? { [Side.All]: value } : value
  const computed = evalSides<Size>(input)
  const { top, right, bottom, left } = mergeConfig<SideSizes>(
    defaults,
    computed,
  )
  return {
    top: sizes[top],
    right: sizes[right],
    bottom: sizes[bottom],
    left: sizes[left],
  }
}

export const evalSideSizesConfig = (
  sizes: Sizes,
  defaults: SideSizesConfig,
  value?: SideSizesConfig | Size,
): SideValues => {
  const computed = evalSides<Size>(defaults)
  const req = {
    top: getSizeValue(computed.top),
    right: getSizeValue(computed.right),
    bottom: getSizeValue(computed.bottom),
    left: getSizeValue(computed.left),
  }
  return evalSideSizes(sizes, req, value)
}

export type CornerSizesConfig = CornersConfig<Size>

export type CornerSizes = Required<Corners<Size>>

export type CornerValues = Required<Corners<string>>

export const evalCornerSizes = (
  sizes: Sizes,
  defaults: CornerSizes,
  value?: CornerSizesConfig | Size,
): CornerValues => {
  if (typeof value === 'undefined') {
    return {
      topLeft: sizes[defaults.topLeft],
      topRight: sizes[defaults.topRight],
      bottomLeft: sizes[defaults.bottomLeft],
      bottomRight: sizes[defaults.bottomRight],
    }
  }
  const input: CornerSizesConfig = isSize(value) ? { [Side.All]: value } : value
  const computed = evalCorners<Size>(input)
  const { topLeft, topRight, bottomLeft, bottomRight } =
    mergeConfig<CornerSizes>(defaults, computed)
  return {
    topLeft: sizes[topLeft],
    topRight: sizes[topRight],
    bottomLeft: sizes[bottomLeft],
    bottomRight: sizes[bottomRight],
  }
}

export const evalCornerSizesConfig = (
  sizes: Sizes,
  defaults: CornerSizesConfig,
  value?: CornerSizesConfig | Size,
): CornerValues => {
  const computed = evalCorners<Size>(defaults)
  const req = {
    topLeft: getSizeValue(computed.topLeft),
    topRight: getSizeValue(computed.topRight),
    bottomLeft: getSizeValue(computed.bottomLeft),
    bottomRight: getSizeValue(computed.bottomRight),
  }
  return evalCornerSizes(sizes, req, value)
}
