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

// Components that use grid or flex positioning will use these values.
// TODO: handle the columns and columnMinWidth props that some layout components will need.
type Layout<BaseType> = BaseType & {
  breakpoint: Breakpoint
  // columns: number
  // columnMinWidth: string
  gapped: boolean
  gap: Size
}

export interface Config extends Layout<Element.Config> {}

export interface Props extends Layout<Element.Props> {}

export interface Theme extends Layout<Element.Theme> {}

export const defaultConfig: Config = {
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  breakpoint: Breakpoint.Mobile,
  color: Color.BgPrimary,
  // columns: 12,
  // columnMinWidth: '280px',
  cursor: Cursor.Default,
  font: Font.Text,
  gapped: true,
  gap: Size.Small,
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
  border: evalSideBordersConfigs(defaultConfig.border, input?.border),
  breakpoint: input?.breakpoint || defaultConfig.breakpoint,
  color: input?.color || defaultConfig.color,
  // columns: input?.columns || defaultConfig.columns,
  // columnMinWidth: input?.columnMinWidth || defaultConfig.columnMinWidth,
  cursor: input?.cursor || defaultConfig.cursor,
  font: input?.font || defaultConfig.font,
  gap: input?.gap || defaultConfig.gap,
  gapped: evalConfigBooleans(defaultConfig.gapped, 'gapped', input),
  padding: evalSideSizesConfigs(defaultConfig.padding, input?.padding),
  radius: evalCornerSizesConfigs(defaultConfig.radius, input?.radius),
  shadow: evalShadows(defaultConfig.shadowType, defaultConfig.shadowed, input),
})
