import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Color } from '../colors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import { ElementConfig, ElementTheme } from './elements'

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
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.Tiny,
  },
}

export const makeTables = (config?: Partial<ElementConfig>): ElementTheme => ({
  color: config?.color || defaultTables.color,
  cursor: config?.cursor || defaultTables.cursor,
  border: evalSideBordersConfigs(defaultTables.border, config?.border),
  font: config?.font || defaultTables.font,
  padding: evalSideSizesConfigs(defaultTables.padding, config?.padding),
  radius: evalCornerSizesConfigs(defaultTables.radius, config?.radius),
})
