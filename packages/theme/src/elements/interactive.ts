import { DeepPartial } from '../utils'

import * as Element from './element'

interface Options {
  outlined: boolean
  disabled: boolean
  selected: boolean
  typographic: boolean
}

type Interactive<BaseType extends Element.Config | Element.Theme> = BaseType &
  Pick<Options, 'outlined' | 'typographic'>

// Typographic elements use the "color" prop to set the color of the text; no background color is
// set.  Since the system is unaware of the background color, it cannot ensure the text will be
// readable.  In typographic elements, the "outlined" prop enables a text outline that helps
// ensure the readability of the text regardless of background color.
//
// Non-typographic elements instead use the "color" prop to set the background color of the
// element and the text color is either black or white depending on which is most readable. In
// non-typographic components, the "outlined" prop causes the "color" prop to control the border
// and text color instead of the background.
export interface Config extends Interactive<Element.Config> {}

// This type is intended to be used for component props and should therefore represent everything
// the end user is allowed to configure or control about an element.
//
// Typographic is omitted because the system needs to be able to reliably make certain assumptions
// about text color behavior at the element level and trying to support user input in that process
// creates potential for unpredictable behavior.  See ElementConfig comments.
//
// The "shadowType" prop is omitted because components use the "shadowed" prop to enable a theme-
// level "shadowType" set at the element level.  All instances of an element use the same shadow.
export interface Props
  extends DeepPartial<Element.Props & Pick<Options, 'disabled' | 'selected'>> {}

export interface Theme extends Interactive<Element.Theme> {}

export type Items<ItemType> = ItemType & {
  currentItem: DeepPartial<ItemType>
}
