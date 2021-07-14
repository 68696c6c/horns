import { evalSideSizesConfig, evalCornerSizesConfig, Size } from '../sizes'
import { BorderStyle, evalSideBordersConfig } from '../borders'

import { ElementConfig, ElementTheme } from './elements'

const defaultTables: ElementConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.Tiny,
  },
}

export const makeTables = (config?: Partial<ElementConfig>): ElementTheme => ({
  border: evalSideBordersConfig(defaultTables.border, config?.border),
  padding: evalSideSizesConfig(defaultTables.padding, config?.padding),
  radius: evalCornerSizesConfig(defaultTables.radius, config?.radius),
})
