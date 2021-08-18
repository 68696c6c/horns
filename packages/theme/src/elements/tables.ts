import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Color } from '../colors'
import { ShadowType } from '../shadows'
import { Size, evalCornerSizesConfigs, evalSideSizesConfigs } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import {
  ElementConfig,
  ElementProps,
  ThemeElement,
  evalBooleanProp,
} from './elements'

export const defaultTables: ElementConfig = {
  color: Color.BgPrimary,
  cursor: Cursor.Default,
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  font: Font.Compact,
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

export const makeTables = (input?: ElementProps): ThemeElement => ({
  color: input?.color || defaultTables.color,
  cursor: input?.cursor || defaultTables.cursor,
  border: evalSideBordersConfigs(defaultTables.border, input?.border),
  font: input?.font || defaultTables.font,
  outlined: evalBooleanProp(defaultTables.outlined, 'outlined', input),
  padding: evalSideSizesConfigs(defaultTables.padding, input?.padding),
  shadow: input?.shadowed ? defaultTables.shadowType : ShadowType.None,
  radius: evalCornerSizesConfigs(defaultTables.radius, input?.radius),
  typographic: defaultTables.typographic,
})
