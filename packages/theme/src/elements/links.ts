import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Color } from '../colors'
import { ShadowType } from '../shadows'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import {
  ElementConfig,
  ElementProps,
  evalBooleanProp,
  ThemeElement,
} from './elements'

export const defaultLinks: ElementConfig = {
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  color: Color.Action,
  cursor: Cursor.Pointer,
  font: Font.Link,
  outlined: false,
  padding: {
    all: Size.None,
  },
  radius: {
    all: Size.None,
  },
  shadowed: false,
  shadowType: ShadowType.Text,
  typographic: true,
}

export const makeLinks = (input?: ElementProps): ThemeElement => ({
  color: input?.color || defaultLinks.color,
  cursor: input?.cursor || defaultLinks.cursor,
  border: evalSideBordersConfigs(defaultLinks.border, input?.border),
  font: input?.font || defaultLinks.font,
  outlined: evalBooleanProp(defaultLinks.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultLinks.padding, input?.padding),
  shadow: input?.shadowed ? defaultLinks.shadowType : ShadowType.None,
  radius: evalCornerSizesConfigs(defaultLinks.radius, input?.radius),
  typographic: defaultLinks.typographic,
})
