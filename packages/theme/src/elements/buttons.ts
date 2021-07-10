import {
  evalSideSizesConfig,
  evalCornerSizesConfig,
  Size,
  Sizes,
} from '../sizes'
import { BorderStyle, evalBorderConfig } from '../borders'

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

export const makeButtons = (
  sizes: Sizes,
  config?: Partial<ElementConfig>,
): ElementTheme => ({
  border: evalBorderConfig(sizes, defaultButtons.border, config?.border),
  padding: evalSideSizesConfig(sizes, defaultButtons.padding, config?.padding),
  radius: evalCornerSizesConfig(sizes, defaultButtons.radius, config?.radius),
})
