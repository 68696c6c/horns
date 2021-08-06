import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'

export const defaultLinks: ElementConfig = {
  color: Colorway.Background,
  cursor: Cursor.Pointer,
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  font: Font.Link,
  padding: {
    all: Size.None,
  },
  radius: {
    all: Size.None,
  },
}

export const makeLinks = (config?: Partial<ElementConfig>): ElementTheme => ({
  color: config?.color || defaultLinks.color,
  cursor: config?.cursor || defaultLinks.cursor,
  border: evalSideBordersConfigs(defaultLinks.border, config?.border),
  font: config?.font || defaultLinks.font,
  padding: evalSideSizesConfigs(defaultLinks.padding, config?.padding),
  radius: evalCornerSizesConfigs(defaultLinks.radius, config?.radius),
})