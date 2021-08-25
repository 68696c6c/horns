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
  SurfaceColor,
} from '../../config'
import { Cursor, DeepPartial } from '../../utils'

import * as Element from '../element'

type Surface<BaseType> = Omit<BaseType, 'color'> & {
  color: SurfaceColor
}

export interface Config extends Surface<Element.Config> {}

export interface Props extends Surface<Element.Props> {}

export interface Theme extends Surface<Element.Theme> {}

export const defaultConfig: Config = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.BgPrimary,
  cursor: Cursor.Default,
  font: Font.Text,
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.Tiny,
  },
  shadowed: true,
  shadowType: ShadowType.Box,
}

export const make = (input?: DeepPartial<Config>): Theme => ({
  color: input?.color || defaultConfig.color,
  cursor: input?.cursor || defaultConfig.cursor,
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  font: input?.font || defaultConfig.font,
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
})
