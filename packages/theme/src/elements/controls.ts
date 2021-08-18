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

export const defaultControls: ElementConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.BgPrimary,
  cursor: Cursor.Default,
  font: Font.Control,
  outlined: false,
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.Tiny,
  },
  shadowed: false,
  shadowType: ShadowType.Inset,
  typographic: false,
}

export const makeControls = (input?: ElementProps): ThemeElement => ({
  color: input?.color || defaultControls.color,
  cursor: input?.cursor || defaultControls.cursor,
  border: evalSideBordersConfigs(defaultControls.border, input?.border),
  font: input?.font || defaultControls.font,
  outlined: evalBooleanProp(defaultControls.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultControls.padding, input?.padding),
  shadow: input?.shadowed ? defaultControls.shadowType : ShadowType.None,
  radius: evalCornerSizesConfigs(defaultControls.radius, input?.radius),
  typographic: defaultControls.typographic,
})
