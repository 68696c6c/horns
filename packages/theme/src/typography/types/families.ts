export enum FontFamilyFallback {
  Serif = 'serif',
  SansSerif = 'sans-serif',
  Monospace = 'monospace',
  Cursive = 'cursive',
  Fantasy = 'fantasy',
  SystemUi = 'system-ui',
  UiSerif = 'ui-serif',
  UiSansSerif = 'ui-sans-serif',
  UiMonospace = 'ui-monospace',
  UiRounded = 'ui-rounded',
  Emoji = 'emoji',
  Math = 'math',
  Fangsong = 'fangsong',
}

export interface FontFamilyStyle {
  base: string
  fallback: FontFamilyFallback
  // these are set here because they will be specific to the font
  letting: string // i.e. line-height
  tracking: string // i.e. word-spacing
}

export enum FontFamily {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export type FontFamilies = {
  [key in FontFamily]: FontFamilyStyle
}

export const defaultFontFamilies: FontFamilies = {
  primary: {
    base: 'Helvetica',
    fallback: FontFamilyFallback.SansSerif,
    letting: '',
    tracking: '',
  },
  secondary: {
    base: 'Times New Roman',
    fallback: FontFamilyFallback.Serif,
    letting: '',
    tracking: '',
  },
  tertiary: {
    base: 'Monaco',
    fallback: FontFamilyFallback.Monospace,
    letting: '',
    tracking: '',
  },
}
