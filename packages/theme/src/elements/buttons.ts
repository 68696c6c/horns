import {
  BorderStyle,
  evalSideBordersConfigs,
  Color,
  ShadowType,
  Size,
  evalCornerSizesConfigs,
  evalSideSizesConfigs,
  Font,
} from '../config'
import { Cursor } from '../utils'

import {
  ElementConfig,
  ElementProps,
  ThemeElement,
  evalBooleanProp,
} from './elements'

export const defaultButtons: ElementConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.BgPrimary,
  cursor: Cursor.Pointer,
  font: Font.Control,
  outlined: false,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
  shadowed: false,
  shadowType: ShadowType.Box,
  typographic: false,
}

export const makeButtons = (input?: ElementProps): ThemeElement => ({
  color: input?.color || defaultButtons.color,
  cursor: input?.cursor || defaultButtons.cursor,
  border: evalSideBordersConfigs(defaultButtons.border, input?.border),
  font: input?.font || defaultButtons.font,
  outlined: evalBooleanProp(defaultButtons.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultButtons.padding, input?.padding),
  shadow: input?.shadowed ? defaultButtons.shadowType : ShadowType.None,
  radius: evalCornerSizesConfigs(defaultButtons.radius, input?.radius),
  typographic: defaultButtons.typographic,
})
