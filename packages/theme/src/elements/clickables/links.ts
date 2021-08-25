import {
  BorderStyle,
  Color,
  evalCornerSizesConfigs,
  evalShadows,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
  Font,
  ShadowType,
  Size,
} from '../../config'
import { Cursor, DeepPartial, evalConfigBooleans } from '../../utils'

import * as Clickable from './clickable'

export const defaultConfig: Clickable.Config = {
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
  variant: 'link',
}

export const make = (
  input?: DeepPartial<Clickable.Config>,
): Clickable.Theme => ({
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  color: input?.color || defaultConfig.color,
  cursor: input?.cursor || defaultConfig.cursor,
  font: input?.font || defaultConfig.font,
  outlined: evalConfigBooleans(defaultConfig.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
  typographic: defaultConfig.typographic,
  variant: input?.variant || defaultConfig.variant,
})
