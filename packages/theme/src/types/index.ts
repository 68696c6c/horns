import * as CSS from "csstype"

export type CSSVarFunc =
  | `var(--${string})`
  | `var(--${string}, ${string | number})`

export type CSSVal<T> = T | CSSVarFunc

export type Ordinal = "primary" | "secondary" | "tertiary"
export type OrdinalVariants<T> = {
  [key in Ordinal]: T
}

export type Scale = "sm" | "md" | "lg"
export type ScaleVariants<T> = {
  [key in Scale]: T
}

export type Width = "thin" | "medium" | "thick"
export type WidthVariants<T> = {
  [key in Width]: T
}

export type Radius = "round" | "normal" | "sharp"
export type RadiusVariants<T> = {
  [key in Radius]: T
}

export type State = "base" | "focus" | "hover" | "active" | "visited"
export type StateVariants<T> = {
  [key in Exclude<State, "focus" | "visited">]: T
} & {
  [key in Extract<State, "focus" | "visited">]?: T
}

export type BaseOrAlt = "base" | "alt"
export type BaseOrAltVariants<T> = {
  [key in BaseOrAlt]: T
}

export const isBaseOrAlt = (tbd: State | BaseOrAlt): tbd is BaseOrAlt => {
  return ["base", "alt"].includes(tbd)
}

export type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type TokenKey =
  | "00" // smallest size, darkest shade
  | "01"
  | "02"
  | "03"
  | "04"
  | "05" // base size
  | "06"
  | "07"
  | "08"
  | "09"
  | "10" // largest size, lightest shade

export type FoundationTokens<T = string> = {
  [key in TokenKey]: T
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export type Anchor<E, F, S, T> = {
  element: E
  focus: F
  hover: S
  active: S
  visited: S
  current: S
  variants: T
}

export type AnchorStateVariants<T> = {
  [key in Exclude<State, "focus">]: T
}

export type Control<E, F, S, T> = {
  element: E
  focus: F
  hover: S
  active: S
  variants: T
}

export type ControlStateVariants<T> = {
  [key in Exclude<State, "focus" | "visited">]: T
}

// // TODO: move to the anchor element?
// export type Anchor<E, F, S, T> = {
//   element: E
//   focus: F
//   hover: S
//   active: S
//   visited: S
//   variants: T
// }

// export type ControlElement<
//   E,
//   F = unknown,
//   H = unknown,
//   A = unknown,
//   T = unknown
// > = {
//   element: E
//   focus?: F // TODO implement this
//   hover: H
//   active: A
//   variants: T
// }

// export type Margin<
//   T = CSSVal<CSS.Property.MarginTop>,
//   B = CSSVal<CSS.Property.MarginBottom>,
//   L = CSSVal<CSS.Property.MarginLeft>,
//   R = CSSVal<CSS.Property.MarginRight>
// > = {
//   marginTop: T
//   marginBottom: B
//   marginLeft: L
//   marginRight: R
// }
