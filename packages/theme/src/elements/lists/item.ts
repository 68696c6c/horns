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

type Item<
  BaseType extends Interactive.Config | Interactive.Props | Interactive.Theme,
> = BaseType & {
  marker: {}
}

export interface Config extends Item<Interactive.Config> {}

export interface Props extends Item<Interactive.Props> {}

export interface Theme extends Item<Interactive.Theme> {}

// TODO: handle markers
export const defaultConfig: Config = {
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  color: Color.BgInverse,
  cursor: Cursor.Text,
  font: Font.Text,
  marker: {},
  outlined: false,
  padding: {
    left: Size.XSmall,
  },
  radius: {
    all: Size.None,
  },
  shadowed: false,
  shadowType: ShadowType.Text,
  typographic: true,
}

export const make = (input?: DeepPartial<Config>): Theme => ({
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  color: input?.color || defaultConfig.color,
  cursor: input?.cursor || defaultConfig.cursor,
  font: input?.font || defaultConfig.font,
  outlined: evalConfigBooleans(defaultConfig.outlined, 'outlined', input),
  marker: defaultConfig.marker,
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  typographic: defaultConfig.typographic,
})
