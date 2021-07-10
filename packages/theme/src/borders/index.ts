import { Size, Sizes } from '../sizes'
import { evalSides, Side, Sides, SidesConfig } from '../utils'

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

export const isBorderProperties = (
  tbd?: BordersConfig | BorderProperties,
): tbd is BorderProperties => {
  if (typeof tbd === 'undefined') {
    return false
  }
  const hasStyle = typeof (tbd as BorderProperties).style === 'string'
  const hasWidth = typeof (tbd as BorderProperties).width === 'string'
  return hasStyle || hasWidth
}

export type BordersConfig = SidesConfig<BorderProperties>

export type BorderValues = {
  width: string
  style: string
}

export type Borders = Required<Sides<BorderValues>>

export const getBorderValues = (
  sizes: Sizes,
  input?: BorderProperties,
): BorderValues => {
  return {
    width: input && input.width ? sizes[input.width] : '',
    style: (input && input.style) || '',
  }
}

export const evalBorderSizes = (
  sizes: Sizes,
  input: BordersConfig,
): Borders => {
  const computed = evalSides<BorderProperties>(input)
  const top = getBorderValues(sizes, computed.top)
  const bottom = getBorderValues(sizes, computed.bottom)
  const left = getBorderValues(sizes, computed.left)
  const right = getBorderValues(sizes, computed.right)
  return { top, bottom, left, right }
}

// call this from a component to merge props with the theme default
export const evalBorders = (
  sizes: Sizes,
  defaults: Required<Borders>,
  input?: BordersConfig | BorderProperties,
): Borders => {
  if (typeof input === 'undefined') {
    return defaults
  }
  const config: BordersConfig = isBorderProperties(input)
    ? { [Side.All]: input }
    : input
  const cv = evalBorderSizes(sizes, config)
  return {
    top: {
      width: cv.top.width || defaults.top.width,
      style: cv.top.style || defaults.top.style,
    },
    bottom: {
      width: cv.bottom.width || defaults.bottom.width,
      style: cv.bottom.style || defaults.bottom.style,
    },
    left: {
      width: cv.left.width || defaults.left.width,
      style: cv.left.style || defaults.left.style,
    },
    right: {
      width: cv.right.width || defaults.right.width,
      style: cv.right.style || defaults.right.style,
    },
  }
}

// call this to compute the default theme border
export const evalBorderConfig = (
  sizes: Sizes,
  defaults: BordersConfig,
  config?: BordersConfig | BorderProperties,
): Borders => {
  const db = evalBorderSizes(sizes, defaults)
  return evalBorders(sizes, db, config)
}
