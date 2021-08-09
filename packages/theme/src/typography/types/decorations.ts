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
}

export type Decorations = {
  [key in Decoration]: TextDecoration
}

export const defaultDecorations: Decorations = {
  [Decoration.Base]: {
    line: TextDecorationLine.None,
  },
  [Decoration.None]: {
    line: TextDecorationLine.None,
  },
  [Decoration.Overline]: {
    line: TextDecorationLine.Overline,
    style: TextDecorationStyle.Solid,
  },
  [Decoration.Underline]: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Solid,
  },
  [Decoration.UnderlineDotted]: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Dotted,
  },
  [Decoration.UnderlineDouble]: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Double,
  },
  [Decoration.UnderlineWave]: {
    line: TextDecorationLine.Underline,
    style: TextDecorationStyle.Wavy,
  },
  [Decoration.StrikeThrough]: {
    line: TextDecorationLine.LineThrough,
    style: TextDecorationStyle.Solid,
  },
}
