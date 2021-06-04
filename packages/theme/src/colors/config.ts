import { hexPallet } from './pallet'
import { Colorway, Mode } from './types'

interface MinMax {
  min: number
  max: number
}

export interface Shaders {
  alpha: number
  darkest: number
  lightest: number
  darker: MinMax
  dark: MinMax
  light: MinMax
  lighter: MinMax
}

export interface Config {
  mode: Mode
  prominent: Colorway
  selected: Colorway
  pallet: {
    [Colorway.Primary]: string
    [Colorway.Secondary]: string
    [Colorway.Tertiary]: string
    [Colorway.Dark]: string
    [Colorway.Neutral]: string
    [Colorway.Light]: string
    [Colorway.Success]: string
    [Colorway.Info]: string
    [Colorway.Warning]: string
    [Colorway.Danger]: string
  }
  shaders: Shaders
}

export const defaultConfig: Config = {
  mode: Mode.Light,
  prominent: Colorway.Primary,
  selected: Colorway.Primary,
  pallet: {
    primary: hexPallet.tangerine,
    secondary: hexPallet.blue,
    tertiary: hexPallet.teal,
    dark: hexPallet.black,
    neutral: hexPallet.gray,
    light: hexPallet.white,
    success: hexPallet.green,
    info: hexPallet.cyan,
    warning: hexPallet.yellow,
    danger: hexPallet.red,
  },
  shaders: {
    alpha: 0.3,
    darkest: 88,
    lightest: 20,
    darker: {
      min: 0.08,
      max: 0.155,
    },
    dark: {
      min: 0.2,
      max: 0.47,
    },
    light: {
      min: 0.22,
      max: 0.55,
    },
    lighter: {
      min: 25,
      max: 40,
    },
  },
}
