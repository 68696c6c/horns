import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'

export interface NavConfig extends ElementConfig {
  currentItem?: Partial<ElementConfig>
}

export interface NavTheme extends ElementTheme {
  currentItem: ElementTheme
}

const defaultCurrentItem: ElementConfig = {
  border: {
    bottom: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Colorway.Primary,
  cursor: Cursor.Default,
  font: Font.Nav,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.None,
  },
}

export const defaultNav: NavConfig = {
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  color: Colorway.Background,
  cursor: Cursor.Pointer,
  font: Font.Nav,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.None,
  },
  currentItem: defaultCurrentItem,
}

export const makeNav = (config?: Partial<NavConfig>): NavTheme => {
  const border = evalSideBordersConfigs(defaultNav.border, config?.border)
  const padding = evalSideSizesConfigs(defaultNav.padding, config?.padding)
  const radius = evalCornerSizesConfigs(defaultNav.radius, config?.radius)

  const item = config?.currentItem
  const itemPadding = evalSideSizesConfigs(padding, item?.padding)
  const itemRadius = evalCornerSizesConfigs(radius, item?.radius)

  return {
    border,
    color: config?.color || defaultNav.color,
    cursor: config?.cursor || defaultNav.cursor,
    font: config?.font || defaultNav.font,
    padding,
    radius,
    currentItem: {
      border: evalSideBordersConfigs(
        defaultNav.border,
        defaultCurrentItem.border,
        config?.border,
        item?.border,
      ),
      color: item?.color || config?.color || defaultCurrentItem.color,
      cursor: item?.cursor || config?.cursor || defaultCurrentItem.cursor,
      font: item?.font || config?.font || defaultCurrentItem.font,
      padding: evalSideSizesConfigs(defaultCurrentItem.padding, itemPadding),
      radius: evalCornerSizesConfigs(defaultCurrentItem.radius, itemRadius),
    },
  }
}
