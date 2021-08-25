import {
  BorderStyle,
  Color,
  ControlColor,
  evalCornerSizesConfigs,
  evalShadows,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
  Font,
  ShadowType,
  Size,
} from '../../config'
import { Cursor, DeepPartial, evalConfigBooleans } from '../../utils'

import * as Interactive from '../interactive'

type Control<
  BaseType extends Interactive.Config | Interactive.Props | Interactive.Theme,
> = Omit<BaseType, 'color'> & {
  color: ControlColor
}

export interface Config extends Control<Interactive.Config> {}

export interface Props extends Control<Interactive.Props> {}

export interface Theme extends Control<Interactive.Theme> {}

export const defaultConfig: Config = {
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
