import {
  BorderStyle,
  Font,
  ShadowType,
  Size,
  Color,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
  evalCornerSizesConfigs,
  evalShadows,
} from '../../config'
import { Cursor, DeepPartial, evalConfigBooleans } from '../../utils'

import * as Interactive from '../interactive'

export interface Config extends Interactive.Config {}

export interface Props extends Interactive.Props {}

export interface Theme extends Interactive.Theme {}

export const defaultConfig: Config = {
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  color: Color.BgPrimary,
  cursor: Cursor.Pointer,
  font: Font.Compact,
  outlined: false,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.None,
  },
  shadowed: false,
  shadowType: ShadowType.Box,
  typographic: false,
}

export const make = (input?: DeepPartial<Config>): Theme => ({
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  color: input?.color || defaultConfig.color,
  cursor: input?.cursor || defaultConfig.cursor,
  font: input?.font || defaultConfig.font,
  outlined: evalConfigBooleans(defaultConfig.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
  typographic: defaultConfig.typographic,
})
