import {
  CornersConfig,
  configToCorners,
  configToSides,
  mergeConfig,
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

// export const getSizeValue = (input?: Size): Size => input || Size.None

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

export type SideSizes = Sides<Size>

const defaultSideSizes: SideSizes = {
  top: Size.None,
  right: Size.None,
  bottom: Size.None,
  left: Size.None,
}

export type SideSizesConfig = SidesConfig<Size>

export const evalSideSizesConfigs = (
  defaults: SideSizesConfig,
  ...values: Array<SideSizesConfig | Size | undefined>
): SideSizes => {
  let result: SideSizes = configToSides<Size>(defaultSideSizes, defaults)
  values.forEach((value) => {
    if (value) {
      const props: SideSizesConfig = isSize(value) ? { all: value } : value
      result = configToSides<Size>(result, props)
    }
  })
  return result
}

export type CornerSizes = Corners<Size>

const defaultCornerSizes: CornerSizes = {
  topLeft: Size.None,
  topRight: Size.None,
  bottomLeft: Size.None,
  bottomRight: Size.None,
}

export type CornerSizesConfig = CornersConfig<Size>

export const evalCornerSizesConfigs = (
  defaults: CornerSizesConfig,
  ...values: Array<CornerSizesConfig | Size | undefined>
): CornerSizes => {
  let result: CornerSizes = configToCorners<Size>(defaultCornerSizes, defaults)
  values.forEach((value) => {
    if (value) {
      const props: CornerSizesConfig = isSize(value) ? { all: value } : value
      result = configToCorners<Size>(result, props)
    }
  })
  return result
}
