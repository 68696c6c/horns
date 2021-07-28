import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'

export const defaultControls: ElementConfig = {
  color: Colorway.Background,
  cursor: Cursor.Default,
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
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
