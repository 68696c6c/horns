import { Size } from './sizes'
import { Side } from './utils'

export enum BorderStyle {
  None = 'none',
  Hidden = 'hidden',
  Dotted = 'dotted',
  Dashed = 'dashed',
  Solid = 'solid',
  Double = 'double',
  Groove = 'groove',
  Ridge = 'ridge',
  Inset = 'inset',
  Outset = 'outset',
  Initial = 'initial',
  Inherit = 'inherit',
}

export type BorderProperties = {
  width?: Size
  style?: BorderStyle
}

export type BordersConfig = {
  [key in Side]?: BorderProperties
}
