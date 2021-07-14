import { BorderStyle, evalSideBordersConfig } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfig, evalSideSizesConfig, Size } from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'

export const defaultButtons: ElementConfig = {
  color: Colorway.Background,
  cursor: Cursor.Pointer,
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  font: Font.Button,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
}

export const makeButtons = (config?: Partial<ElementConfig>): ElementTheme => ({
  color: config?.color || defaultButtons.color,
  cursor: config?.cursor || defaultButtons.cursor,
  border: evalSideBordersConfig(defaultButtons.border, config?.border),
  font: config?.font || defaultButtons.font,
  padding: evalSideSizesConfig(defaultButtons.padding, config?.padding),
  radius: evalCornerSizesConfig(defaultButtons.radius, config?.radius),
})
