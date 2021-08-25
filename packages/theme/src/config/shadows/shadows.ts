import { DeepPartial, evalConfigBooleans, mergeConfig } from '../../utils'

export interface BaseShadowConfig {
  x?: number
  y?: number
  blur?: number
  alpha?: number
}

export interface BoxShadowConfig extends BaseShadowConfig {
  spread?: number
  inset?: boolean
}

export enum ShadowType {
  None = 'none',
  Box = 'box',
  Inset = 'inset',
  Drop = 'drop',
  Text = 'text',
  Outline = 'outline',
}

export type Shadows = {
  [ShadowType.Box]: BoxShadowConfig
  [ShadowType.Inset]: BoxShadowConfig
  [ShadowType.Drop]: BaseShadowConfig
  [ShadowType.Text]: BaseShadowConfig
  [ShadowType.Outline]: number // thickness of the outline, in px.
}

export type Config = DeepPartial<Shadows>

export const defaultConfig: Shadows = {
  [ShadowType.Box]: {
    x: 1,
    y: 1,
    blur: 4,
    spread: 1,
    alpha: 0.75,
    inset: false,
  },
  [ShadowType.Inset]: {
    x: 1,
    y: 1,
    blur: 4,
    spread: 0,
    alpha: 0.75,
    inset: true,
  },
  [ShadowType.Drop]: {
    x: 1,
    y: 1,
    blur: 4,
    alpha: 0.75,
  },
  [ShadowType.Text]: {
    x: 1,
    y: 1,
    blur: 2,
    alpha: 0.4,
  },
  [ShadowType.Outline]: 1,
}

export const makeShadows = (config?: Config): Shadows =>
  mergeConfig<Config>(defaultConfig, config)

export const evalShadows = <T extends Record<string, any>>(
  shadowType: ShadowType,
  defaultValue: boolean,
  ...configs: Array<T | undefined>
) =>
  evalConfigBooleans(defaultValue, 'shadowed', ...configs)
    ? shadowType
    : ShadowType.None
