import { SideBorders, SideBordersConfig } from '../borders'
import { Color } from '../colors'
import { ShadowType } from '../shadows'
import {
  CornerSizes,
  CornerSizesConfig,
  SideSizes,
  SideSizesConfig,
} from '../sizes'
import { Font } from '../typography'
import { Cursor, DeepPartial } from '../utils'

export interface ElementConfig {
  color: Color
  cursor: Cursor
  border: SideBordersConfig
  font: Font
  padding: SideSizesConfig
  radius: CornerSizesConfig
  shadowed: boolean
  shadowType: ShadowType
  // Typographic elements use the "color" prop to set the color of the text; no background color is
  // set.  Since the system is unaware of the background color, it cannot ensure the text will be
  // readable.  In typographic elements, the "outlined" prop enables a text outline that helps
  // ensure the readability of the text regardless of background color.
  //
  // Non-typographic elements instead use the "color" prop to set the background color of the
  // element and the text color is either black or white depending on which is most readable. In
  // non-typographic components, the "outlined" prop causes the "color" prop to control the border
  // and text color instead of the background.
  typographic: boolean
  outlined: boolean
}

// This type is intended to be used for component props and should therefore represent everything
// the end user is allowed to configure or control about an element.
//
// Typographic is omitted because the system needs to be able to reliably make certain assumptions
// about text color behavior at the element level and trying to support user input in that process
// creates potential for unpredictable behavior.  See ElementConfig comments.
//
// The "shadowType" prop is omitted because components use the "shadowed" prop to enable a theme-
// level "shadowType" set at the element level.  All instances of an element use the same shadow.
export type ElementProps = DeepPartial<
  Omit<ElementConfig, 'typographic' | 'shadowType'>
>

export interface ThemeElement {
  color: Color
  cursor: Cursor
  border: SideBorders
  font: Font
  outlined: boolean
  padding: SideSizes
  shadow: ShadowType
  radius: CornerSizes
  typographic: boolean
}

export const evalBooleanProp = (
  defaultValue: boolean,
  key: keyof Pick<ElementProps, 'outlined' | 'shadowed'>,
  config?: ElementProps,
): boolean =>
  config && typeof config[key] === 'boolean'
    ? (config[key] as boolean)
    : defaultValue
