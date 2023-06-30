import * as CSS from "csstype"

import {
  CSSVal,
  FoundationTokens,
  HeadingLevel,
  ScaleVariants,
  TokenKey,
} from "../types"
import * as Dimension from "../tokens/dimension"
import * as Gap from "../tokens/gap"
import * as Padding from "../tokens/padding"

export type TextSpaceTokens<
  T = CSSVal<CSS.Property.MarginTop>,
  B = CSSVal<CSS.Property.MarginBottom>,
  I = CSSVal<CSS.Property.FontSize>
> = {
  marginTop: T
  marginBottom: B
  textIndent: I
}

export type TextTokens<
  S = CSSVal<CSS.Property.FontSize>,
  L = CSSVal<CSS.Property.LineHeight>,
  T = CSSVal<CSS.Property.FontSize>
> = {
  fontSize: S
  lineHeight: L
  // textIndent: T
}

export type BaselineTextTokens<T = CSSVal<CSS.Property.VerticalAlign>> = {
  verticalAlign: T
}

export type GapTokens<T = CSSVal<CSS.Property.Gap>> = {
  gap: T
}

export type PaddingTokens<
  T = CSSVal<CSS.Property.PaddingTop>,
  B = CSSVal<CSS.Property.PaddingBottom>,
  L = CSSVal<CSS.Property.PaddingLeft>,
  R = CSSVal<CSS.Property.PaddingRight>
> = {
  paddingTop: T
  paddingBottom: B
  paddingLeft: L
  paddingRight: R
}

export type DimensionTokens<
  H = CSSVal<CSS.Property.Height>,
  W = CSSVal<CSS.Property.Width>
> = {
  height: H
  width: W
}

// export type SpaceTokens = GapTokens & PaddingTokens & DimensionTokens

// export type Config = {
//   root: StackConfig
//   heading: {
//     [key in HeadingLevel]: TokenKey
//   }
//   body: ScaleVariants<TokenKey>
// }

export type Config = {
  fontSize: number // in px
  lineHeight: number // in px
  scaleFactor: number // unitless, a ratio expressed as a decimal
}

export type StackLevel<T> = {
  fontSize: T
  line: T
  doubleLine: T
  autoLineCount: number
  autoLineHeight: T
}

type SpaceFoundations = {
  // these are pre-defined padding values that can/should be used by buttons, cards, panels, etc
  // the dimension values are used by controls and icons
  // they should be set in ems so that they scale relative to the surrounding font
  min: SurfaceTokens
} & ScaleVariants<SurfaceTokens>
export type Level = keyof SpaceFoundations

export type Foundations<T = string> = {
  sizes: FoundationTokens<StackLevel<T>>
  root: {
    fontSize: string
    lineHeight: string
  }
  space: SpaceFoundations
}

export type SurfaceTokens = Gap.Tokens & Padding.Tokens & Dimension.Tokens

export type TextElementConfig = {
  scale: keyof Foundations["sizes"]
  indent?: "none" | "single" | "double"
  spaceTop?: "none" | "single" | "double"
  spaceBottom?: "none" | "single" | "double"
}
export type SurfaceElementConfig = TextElementConfig & {
  space: Level
}

export const makeTextTokens = (
  f: Foundations,
  c: TextElementConfig
): TextTokens => ({
  fontSize: f.sizes[c.scale].fontSize,
  lineHeight: f.sizes[c.scale].autoLineHeight,
})

export const makeTextSpaceTokens = (
  f: Foundations,
  c: TextElementConfig
): TextSpaceTokens => {
  const scale = f.sizes[c.scale]
  const result: TextSpaceTokens = {
    textIndent: "0px",
    marginTop: "0px",
    marginBottom: "0px",
  }
  if (c.indent === "single") {
    result.textIndent = scale.line
  } else if (c.indent === "double") {
    result.textIndent = scale.doubleLine
  }
  if (c.spaceTop === "single") {
    result.marginTop = scale.line
  } else if (c.spaceTop === "double") {
    result.marginTop = scale.doubleLine
  }
  if (c.spaceBottom === "single") {
    result.marginBottom = scale.line
  } else if (c.spaceBottom === "double") {
    result.marginBottom = scale.doubleLine
  }
  return result
}

export type InitialStack = Foundations<number>["sizes"]

const makeInitialStackLevel = (
  c: Config,
  level: number
): StackLevel<number> => {
  const computedFontSize = Math.round(c.fontSize * c.scaleFactor ** level)
  const fontSize = computedFontSize < 1 ? 1 : computedFontSize
  // const autoLineCount = Math.ceil(computedFontSize / c.lineHeight)
  const autoLineCount = Math.ceil(fontSize / c.lineHeight)
  const autoLineHeight = c.lineHeight * autoLineCount
  return {
    // fontSize: computedFontSize,
    fontSize,
    line: c.lineHeight,
    doubleLine: c.lineHeight * 2,
    autoLineCount,
    autoLineHeight,
  }
}

const calcRems = (tc: TC, level: StackLevel<number>): StackLevel<number> => {
  // Assumes document root font-size is set to 'base.fontSize' in the output css, so rem values will always be based on that context. If html does not have this font-size, calculations will be off.
  const localFontSize = level.fontSize
  const localAutoLineCount = level.autoLineCount

  const convertedFontSize = localFontSize / tc.baseFontSize
  const convertedLine =
    (tc.baseLineHeight / tc.baseFontSize) * tc.convertedBaseFontSize
  const convertedLineHeight = convertedLine * localAutoLineCount

  // TODO: Try removing roundings & use maximum precision, so Edge would behave with rems, now it nudges the line-heights for large headings a bit off the grid, which is crazy, because these are crazy presice and should result in pretty much exactly the correct pixel values, but guess not.
  const fontSize = Math.round(convertedFontSize * 10000000) / 10000000
  const line = Math.round(convertedLine * 10000000) / 10000000
  const autoLineHeight = Math.round(convertedLineHeight * 10000000) / 10000000

  return {
    fontSize,
    line,
    doubleLine: line * 2,
    autoLineHeight,
    autoLineCount: localAutoLineCount,
  }
}

type TC = {
  baseFontSize: number
  baseLineHeight: number
  convertedBaseFontSize: number
}

const makeFinalLevel = (input: StackLevel<number>): StackLevel<string> => ({
  fontSize: `${input.fontSize}rem`,
  line: `${input.line}rem`,
  doubleLine: `${input.doubleLine}rem`,
  autoLineCount: input.autoLineCount,
  autoLineHeight: `${input.autoLineHeight}rem`,
})

export const makeFoundations = (c: Config): Foundations => {
  // const baseFontSize = c.fontSize
  // const baseLineHeight = Math.round(c.lineHeight * baseFontSize)
  const baseLineHeight = Math.round(c.lineHeight * c.fontSize)

  const levelConfig: Config = {
    ...c,
    lineHeight: baseLineHeight,
  }

  // TODO: INPROGRESS: refactoring this so that the current 00 value is in the middle(05) and then use 00-04 for the current spacing concerns (border and outline width etc)
  //  -> CHECKPOINT: do control scaling, outline spacing
  const stack: InitialStack = {
    // "00": makeInitialStackLevel(levelConfig, -1),
    // "01": makeInitialStackLevel(levelConfig, -8),
    "00": {
      fontSize: 0,
      line: 0,
      doubleLine: 0,
      autoLineCount: 0,
      autoLineHeight: 0,
    },
    "01": makeInitialStackLevel(levelConfig, -8),
    "02": makeInitialStackLevel(levelConfig, -4),
    "03": makeInitialStackLevel(levelConfig, -1.5),
    "04": makeInitialStackLevel(levelConfig, -0.25),
    "05": makeInitialStackLevel(levelConfig, 0),
    "06": makeInitialStackLevel(levelConfig, 1),
    "07": makeInitialStackLevel(levelConfig, 2),
    "08": makeInitialStackLevel(levelConfig, 3),
    "09": makeInitialStackLevel(levelConfig, 4),
    "10": makeInitialStackLevel(levelConfig, 5),
  }
  console.log("stack: ", JSON.stringify(stack))
  // Convert values to ems by finding factors which will result in the exact pixel values calculated above
  // Assumes document root font-size is set to 'base.fontSize' in the output css, so em values will always be based on that context. If html does not have this font-size, calculations will be off.
  const rootFontSize = c.fontSize
  // const convertedBaseFontSize = c.fontSize / rootFontSize

  const tc: TC = {
    // rootFontSize: c.fontSize,
    baseFontSize: c.fontSize,
    baseLineHeight: levelConfig.lineHeight,
    convertedBaseFontSize: c.fontSize / rootFontSize,
  }

  const tempStack: InitialStack = {
    "00": calcRems(tc, stack["00"]),
    "01": calcRems(tc, stack["01"]),
    "02": calcRems(tc, stack["02"]),
    "03": calcRems(tc, stack["03"]),
    "04": calcRems(tc, stack["04"]),
    "05": calcRems(tc, stack["05"]),
    "06": calcRems(tc, stack["06"]),
    "07": calcRems(tc, stack["07"]),
    "08": calcRems(tc, stack["08"]),
    "09": calcRems(tc, stack["09"]),
    "10": calcRems(tc, stack["10"]),
  }

  // Add units
  const smSpace = baseLineHeight / 3
  const mdSpace = baseLineHeight / 2
  const lgSpace = (baseLineHeight / 3) * 2
  return {
    root: {
      fontSize: `${c.fontSize}px`,
      lineHeight: `${baseLineHeight}px`,
    },
    sizes: {
      "00": makeFinalLevel(tempStack["00"]),
      "01": makeFinalLevel(tempStack["01"]),
      "02": makeFinalLevel(tempStack["02"]),
      "03": makeFinalLevel(tempStack["03"]),
      "04": makeFinalLevel(tempStack["04"]),
      "05": makeFinalLevel(tempStack["05"]),
      "06": makeFinalLevel(tempStack["06"]),
      "07": makeFinalLevel(tempStack["07"]),
      "08": makeFinalLevel(tempStack["08"]),
      "09": makeFinalLevel(tempStack["09"]),
      "10": makeFinalLevel(tempStack["10"]),
    },
    space: {
      min: {
        gap: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        height: "0px",
        width: "0px",
      },
      sm: {
        gap: `${smSpace}px`,
        paddingTop: `${smSpace}px`,
        paddingBottom: `${smSpace}px`,
        paddingLeft: `${smSpace}px`,
        paddingRight: `${smSpace}px`,
        height: `${smSpace}px`,
        width: `${smSpace}px`,
      },
      md: {
        gap: `${mdSpace}px`,
        paddingTop: `${mdSpace}px`,
        paddingBottom: `${mdSpace}px`,
        paddingLeft: `${mdSpace}px`,
        paddingRight: `${mdSpace}px`,
        height: `${mdSpace}px`,
        width: `${mdSpace}px`,
      },
      lg: {
        gap: `${lgSpace}px`,
        paddingTop: `${lgSpace}px`,
        paddingBottom: `${lgSpace}px`,
        paddingLeft: `${lgSpace}px`,
        paddingRight: `${lgSpace}px`,
        height: `${lgSpace}px`,
        width: `${lgSpace}px`,
      },
    },
  }
}

export const makeSpaceTokens = (
  f: Foundations,
  c: SurfaceElementConfig
): SurfaceTokens => ({
  gap: f.space[c.space].gap,
  paddingTop: f.space[c.space].paddingTop,
  paddingBottom: f.space[c.space].paddingBottom,
  paddingLeft: f.space[c.space].paddingLeft,
  paddingRight: f.space[c.space].paddingRight,
  height: f.space[c.space].height,
  width: f.space[c.space].width,
})

export const defaultConfig: Config = {
  // root: {
  fontSize: 16,
  lineHeight: 1.25,
  scaleFactor: 1.618,
  // },
  // heading: {
  //   display: "10",
  //   h1: "09",
  //   h2: "08",
  //   h3: "07",
  //   h4: "06",
  //   h5: "05",
  //   h6: "04",
  // },
  // body: {
  //   lg: "03",
  //   md: "02",
  //   sm: "01",
  // },
}

// export type Foundations = {
//   root: Omit<TextTokens, "textIndent">
//   text: {
//     heading: {
//       [key in HeadingLevel]: TextTokens & TextSpaceTokens
//     }
//     body: ScaleVariants<TextTokens & TextSpaceTokens>
//     flow: TextSpaceTokens
//     nested: TextSpaceTokens
//     sub: BaselineTextTokens & TextTokens
//     sup: BaselineTextTokens & TextTokens
//   }
//   space: ScaleVariants<SpaceTokens> & { min: SpaceTokens }
// }

// const makeHeadingTokens = (
//   stack: Foundations,
//   level: TokenKey
// ): TextTokens & TextSpaceTokens => {
//   const { fontSize, autoLineHeight, line, doubleLine, autoLineCount } = stack[level]
//   const leftover = autoLineCount - line - fontSize
//   return {
//     fontSize,
//     lineHeight: autoLineHeight,
//     textIndent: doubleLine,
//     marginTop: line,
//     marginBottom: doubleLine,
//   }
// }
//
// export const makeFoundations = (c: Config): Foundations => {
//   const stack = makeStack(c.root)
//   return {
//     root: {
//       fontSize: `${c.root.fontSize}px`,
//       lineHeight: `${c.root.lineHeight}px`,
//     },
//     text: {
//       heading: {
//         display: {
//           fontSize: "",
//           lineHeight: "",
//           textIndent: "",
//           marginTop: "",
//           marginBottom: "",
//         },
//       },
//     },
//   }
// }
