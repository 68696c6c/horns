import { SideSizes, SideSizesConfig, Size } from '../sizes'
import { configToSides, Sides, SidesConfig } from '../utils'

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

// i.e. Size
export type BorderProperties = {
  width?: Size
  style?: BorderStyle
}

// i.e. isSize
export const isBorderProperties = (
  tbd?: SideBordersConfig | BorderProperties,
): tbd is BorderProperties => {
  if (typeof tbd === 'undefined') {
    return false
  }
  const hasStyle = typeof (tbd as BorderProperties).style === 'string'
  const hasWidth = typeof (tbd as BorderProperties).width === 'string'
  return hasStyle || hasWidth
}

// i.e. SideSizes
export type SideBorders = Sides<BorderProperties>
export type SideBorderStyles = Sides<BorderStyle>

// i.e. defaultSideSizes
const defaultBorderWidths: SideSizes = {
  top: Size.None,
  bottom: Size.None,
  left: Size.None,
  right: Size.None,
}
const defaultBorderStyles: SideBorderStyles = {
  top: BorderStyle.None,
  bottom: BorderStyle.None,
  left: BorderStyle.None,
  right: BorderStyle.None,
}
const defaultSideBorders: SideBorders = {
  top: {},
  bottom: {},
  left: {},
  right: {},
}

// i.e. SideSizesConfig
export type SideBordersConfig = SidesConfig<BorderProperties>
type SideBorderStylesConfig = SidesConfig<BorderStyle>

type Extracted = {
  widths: SideSizesConfig
  styles: SideBorderStylesConfig
}

const extract = (value: SideBordersConfig | BorderProperties): Extracted => {
  const props: SideBordersConfig = isBorderProperties(value)
    ? { all: value }
    : value
  const { all, x, y, top, bottom, left, right } = props
  const widths: SideSizesConfig = {}
  const styles: SideBorderStylesConfig = {}
  if (all) {
    widths.all = all.width
    styles.all = all.style
  }
  if (x) {
    widths.x = x.width
    styles.x = x.style
  }
  if (y) {
    widths.y = y.width
    styles.y = y.style
  }
  if (top) {
    widths.top = top.width
    styles.top = top.style
  }
  if (bottom) {
    widths.bottom = bottom.width
    styles.bottom = bottom.style
  }
  if (left) {
    widths.left = left.width
    styles.left = left.style
  }
  if (right) {
    widths.right = right.width
    styles.right = right.style
  }
  return { widths, styles }
}

// i.e. evalSideSizesConfig
export const evalSideBordersConfig = (
  defaults: SideBordersConfig,
  value?: SideBordersConfig | BorderProperties,
): SideBorders => {
  if (typeof value === 'undefined') {
    return configToSides<BorderProperties>(defaultSideBorders, defaults)
  }
  const defs = extract(defaults)
  const defWidths = configToSides<Size>(defaultBorderWidths, defs.widths)
  const defStyles = configToSides<BorderStyle>(defaultBorderStyles, defs.styles)
  const props = extract(value)
  const widths = configToSides<Size>(defWidths, props.widths)
  const styles = configToSides<BorderStyle>(defStyles, props.styles)
  return {
    top: {
      width: widths.top,
      style: styles.top,
    },
    bottom: {
      width: widths.bottom,
      style: styles.bottom,
    },
    left: {
      width: widths.left,
      style: styles.left,
    },
    right: {
      width: widths.right,
      style: styles.right,
    },
  }
}
