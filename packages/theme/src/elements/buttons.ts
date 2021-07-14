import { evalSideSizesConfig, evalCornerSizesConfig, Size } from '../sizes'
import { BorderStyle, evalSideBordersConfig } from '../borders'

import { ElementConfig, ElementTheme } from './elements'

const defaultButtons: ElementConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
}

export const makeButtons = (config?: Partial<ElementConfig>): ElementTheme => ({
  border: evalSideBordersConfig(defaultButtons.border, config?.border),
  padding: evalSideSizesConfig(defaultButtons.padding, config?.padding),
  radius: evalCornerSizesConfig(defaultButtons.radius, config?.radius),
})
