import { Colorway } from '../../colors'

export enum TextDecorationLine {
  None = 'none',
  Underline = 'underline',
  Overline = 'overline',
  LineThrough = 'line-through',
  Initial = 'initial',
  Inherit = 'inherit',
}

export enum TextDecorationStyle {
  Solid = 'solid',
  Double = 'double',
  Dotted = 'dotted',
  Dashed = 'dashed',
  Wavy = 'wavy',
  Initial = 'initial',
  Inherit = 'inherit',
}

export interface TextDecoration {
  line: TextDecorationLine
  style?: TextDecorationStyle
  color?: Colorway
}

export enum Decoration {
  Base = 'base',
  None = 'none',
  Overline = 'overline',
  Underline = 'underline',
  UnderlineDotted = 'underlineDotted',
  UnderlineDouble = 'underlineDouble',
  UnderlineWave = 'underlineWave',
  StrikeThrough = 'strikeThrough',
  Mistake = 'mistake',
}

export type Decorations = {
  [key in Decoration]: TextDecoration
}

export const defaultDecorations: Decorations = {
  base: {
    line: TextDecorationLine.None,
  },
  none: {
    line: TextDecorationLine.None,
  },
  overline: {
    line: TextDecorationLine.Overline,
    style: TextDecorationStyle.Solid,
  },
  underline: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Solid,
  },
  underlineDotted: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Dotted,
  },
  underlineDouble: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Double,
  },
  underlineWave: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Wavy,
  },
  strikeThrough: {
    line: TextDecorationLine.LineThrough,
    style: TextDecorationStyle.Solid,
  },
  mistake: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Dotted,
    color: Colorway.Danger,
  },
}
