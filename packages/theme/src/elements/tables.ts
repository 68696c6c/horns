import { BorderStyle, evalSideBordersConfig } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfig, evalSideSizesConfig, Size } from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'

export const defaultTables: ElementConfig = {
  color: Colorway.Background,
  cursor: Cursor.Default,
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  font: Font.Button,
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
  border: evalSideBordersConfig(defaultTables.border, config?.border),
  font: config?.font || defaultTables.font,
  padding: evalSideSizesConfig(defaultTables.padding, config?.padding),
  radius: evalCornerSizesConfig(defaultTables.radius, config?.radius),
})
