export enum HeadingLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum BaseFontSize {
  Small = 'small',
  Base = 'base',
  Large = 'large',
}

export enum ScaledFontSize {
  Min = 'min',
  Max = 'max',
}

export type FontSize = BaseFontSize | ScaledFontSize | HeadingLevel

export type FontSizes = {
  [key in FontSize]: string
}

export const defaultFontSizes: FontSizes = {
  small: '0.75em',
  base: 'medium',
  large: '1.5em',
  // Min and max are used for body font size scaling with all other sizes being calculated from that using ems.
  min: '12px',
  max: '16px',
  h1: '3.21em',
  h2: '2.36em',
  h3: '1.64em',
  h4: '1.29em',
  h5: '1.15em',
  h6: '1em',
}
