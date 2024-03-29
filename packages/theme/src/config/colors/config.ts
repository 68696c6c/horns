import { hexPallet } from './pallet'
import { BaseColor, Color, Mode } from './types'

interface MinMax {
  min: number
  max: number
}

export interface Shaders {
  darkest: number
  lightest: number
  darker: MinMax
  dark: MinMax
  light: MinMax
  lighter: MinMax
}

export interface Config {
  mode: Mode
  prominent: BaseColor
  action: BaseColor
  selected: BaseColor
  pallet: {
    [key in BaseColor]: string
  }
  shaders: Shaders
}

export const defaultConfig: Config = {
  mode: Mode.Light,
  prominent: Color.Primary,
  action: Color.Primary,
  selected: Color.Primary,
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
