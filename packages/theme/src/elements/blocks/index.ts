import {
  BorderStyle,
  Breakpoint,
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

import * as Element from '../element'

type Block<BaseType> = BaseType & {
  breakpoint: Breakpoint
  contained: boolean
}

export interface Config extends Block<Element.Config> {}

export interface Props extends Block<Element.Props> {}

export interface Theme extends Block<Element.Theme> {}

export const defaultConfig: Config = {
  breakpoint: Breakpoint.Mobile,
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  color: Color.BgPrimary,
  contained: false,
  cursor: Cursor.Default,
  font: Font.Text,
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.None,
  },
  shadowed: false,
  shadowType: ShadowType.Box,
}

export const make = (input?: DeepPartial<Config>): Theme => ({
  breakpoint: input?.breakpoint || defaultConfig.breakpoint,
  color: input?.color || defaultConfig.color,
  contained: evalConfigBooleans(defaultConfig.contained, 'contained', input),
  cursor: input?.cursor || defaultConfig.cursor,
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  font: input?.font || defaultConfig.font,
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
})
