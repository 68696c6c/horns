import {
  FontFamily,
  FontKerning,
  FontStyleCss,
  TextAlign,
  TextTransform,
  FontWeight,
  Letting,
  FontSize,
  Decoration,
  TextSpacing,
} from './types'

export enum Font {
  Text = 'text',
  Compact = 'compact',
  Heading = 'heading',
  Paragraph = 'paragraph',
  Control = 'control',
  Label = 'label',
  Legal = 'legal',
  Link = 'link',
  Emphasized = 'emphasized',
  Strong = 'strong',
  Quote = 'quote',
  Code = 'code',
}

// the comment indicates the specific css property the field controls
export interface FontConfig {
  family: FontFamily // font-family
  style: FontStyleCss // font-style
  weight: FontWeight // font-weight
  size: FontSize // font-size
  align: TextAlign // text-align
  transform: TextTransform // text-transform
  decoration: Decoration // text-decoration
  kerning: FontKerning // font-kerning
  spacing: TextSpacing // margin; the space before and after typographic block-level elements
  indent: string // text-indent
  letting: Letting // line-height - overrides font-family value
  tracking: string // word-spacing - overrides font-family value
  // TODO: implement remaining CSS typographic properties
  // justify: TextJustify // text-justify
  // stretch: string, // font-stretch
  // variant: string, // font-variant
  // spacing: string, // letter-spacing
  // quotes: string, // quotes
  // alignLast: string, // text-align-last
  // overflow: string, // text-overflow
  // shadow: string, // text-shadow
  // wordBreak: string, // word-break
  // wrap: string, // word-wrap
  // mode: string, // writing-mode
}

export type FontStylesConfig = {
  [key in Font]: Partial<FontConfig>
}
