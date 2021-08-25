import {
  BorderStyle,
  Color,
  NotificationColor,
  evalCornerSizesConfigs,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
  Font,
  ShadowType,
  Size,
  evalShadows,
} from '../../config'
import { Cursor, DeepPartial, evalConfigBooleans } from '../../utils'

import * as Interactive from '../interactive'

type Notification<
  BaseType extends Interactive.Config | Interactive.Props | Interactive.Theme,
> = Omit<BaseType, 'color'> & {
  color: NotificationColor
}

export interface Config extends Notification<Interactive.Config> {}

export interface Props extends Notification<Interactive.Props> {}

export interface Theme extends Notification<Interactive.Theme> {}

export const defaultConfig: Config = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.Info,
  cursor: Cursor.Default,
  font: Font.Text,
  outlined: false,
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.Tiny,
  },
  shadowed: false,
  shadowType: ShadowType.Box,
  typographic: false,
}

export const make = (input?: DeepPartial<Config>): Theme => ({
  color: input?.color || defaultConfig.color,
  cursor: input?.cursor || defaultConfig.cursor,
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  font: input?.font || defaultConfig.font,
  outlined: evalConfigBooleans(defaultConfig.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  typographic: defaultConfig.typographic,
})
