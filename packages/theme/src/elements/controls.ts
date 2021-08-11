import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Color } from '../colors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import { ElementConfig, ElementTheme } from './elements'

export const defaultControls: ElementConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.BgPrimary,
  cursor: Cursor.Default,
  font: Font.Control,
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
  color: config?.color || defaultControls.color,
  cursor: config?.cursor || defaultControls.cursor,
  border: evalSideBordersConfigs(defaultControls.border, config?.border),
  font: config?.font || defaultControls.font,
  padding: evalSideSizesConfigs(defaultControls.padding, config?.padding),
  radius: evalCornerSizesConfigs(defaultControls.radius, config?.radius),
})
