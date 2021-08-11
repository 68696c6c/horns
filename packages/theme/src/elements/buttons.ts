import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Color } from '../colors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import { ElementConfig, ElementTheme } from './elements'

export const defaultButtons: ElementConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.BgPrimary,
  cursor: Cursor.Pointer,
  font: Font.Control,
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
  border: evalSideBordersConfigs(defaultButtons.border, config?.border),
  font: config?.font || defaultButtons.font,
  padding: evalSideSizesConfigs(defaultButtons.padding, config?.padding),
  radius: evalCornerSizesConfigs(defaultButtons.radius, config?.radius),
})
