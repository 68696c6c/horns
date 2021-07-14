import { evalSideSizesConfig, evalCornerSizesConfig, Size } from '../sizes'
import { BorderStyle, evalSideBordersConfig } from '../borders'

import { ElementConfig, ElementTheme } from './elements'

const defaultControls: ElementConfig = {
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

export const makeControls = (
  config?: Partial<ElementConfig>,
): ElementTheme => ({
  border: evalSideBordersConfig(defaultControls.border, config?.border),
  padding: evalSideSizesConfig(defaultControls.padding, config?.padding),
  radius: evalCornerSizesConfig(defaultControls.radius, config?.radius),
})
