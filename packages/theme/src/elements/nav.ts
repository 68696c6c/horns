import {
  BorderStyle,
  evalSideBordersConfig,
  evalSideBordersConfigs,
} from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfig, evalSideSizesConfig, Size } from '../sizes'
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
  const border = evalSideBordersConfig(defaultNav.border, config?.border)
  const padding = evalSideSizesConfig(defaultNav.padding, config?.padding)
  const radius = evalCornerSizesConfig(defaultNav.radius, config?.radius)

  const item = config?.currentItem
  const itemPadding = evalSideSizesConfig(padding, item?.padding)
  const itemRadius = evalCornerSizesConfig(radius, item?.radius)

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
      padding: evalSideSizesConfig(defaultCurrentItem.padding, itemPadding),
      radius: evalCornerSizesConfig(defaultCurrentItem.radius, itemRadius),
    },
  }
}
