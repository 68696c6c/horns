import {
  evalSideSizesConfig,
  evalCornerSizesConfig,
  Size,
  Sizes,
} from '../sizes'
import { BorderStyle, evalBorderConfig } from '../borders'

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

export const makeTables = (
  sizes: Sizes,
  config?: Partial<ElementConfig>,
): ElementTheme => ({
  border: evalBorderConfig(sizes, defaultTables.border, config?.border),
  padding: evalSideSizesConfig(sizes, defaultTables.padding, config?.padding),
  radius: evalCornerSizesConfig(sizes, defaultTables.radius, config?.radius),
})
