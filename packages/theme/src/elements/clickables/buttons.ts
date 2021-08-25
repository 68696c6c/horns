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

export const defaultConfig: Required<Clickable.Config> = {
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
  variant: 'button',
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
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  typographic: defaultConfig.typographic,
  variant: input?.variant || defaultConfig.variant,
})
