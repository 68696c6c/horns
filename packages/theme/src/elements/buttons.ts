import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Cursor } from '../cursors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'
import { Color } from '../colors-2'
import { HoverState } from '../utils'

export const defaultButtons: ElementConfig = {
  color: Color.BgPrimary,
  cursor: Cursor.Pointer,
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  font: Font.Control,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
  states: {
    [HoverState.Hover]: {
      color: Color.Primary,
    },
    [HoverState.Active]: {
      color: Color.Secondary,
    },
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
