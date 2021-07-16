import { BorderStyle, evalSideBordersConfig, SideBorders } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import {
  CornerSizes,
  evalCornerSizesConfig,
  evalSideSizesConfig,
  SideSizes,
  Size,
} from '../sizes'
import { Font } from '../typography'

import { ElementConfig, ElementTheme } from './elements'
import { mergeConfig } from '../utils'

export interface NavConfig extends ElementConfig {
  currentItem: ElementConfig
}

export interface NavTheme extends ElementTheme {
  currentItem: ElementTheme
}

export const defaultNav: NavConfig = {
  color: Colorway.Background,
  cursor: Cursor.Pointer,
  border: {
    all: {
      width: Size.Small,
      style: BorderStyle.Dotted,
    },
  },
  font: Font.Nav,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.None,
  },
  currentItem: {
    color: Colorway.Primary,
    cursor: Cursor.Default,
    border: {
      bottom: {
        width: Size.Tiny,
        style: BorderStyle.Solid,
      },
    },
    font: Font.Nav,
    padding: {
      x: Size.Medium,
      y: Size.Small,
    },
    radius: {
      all: Size.None,
    },
  },
}

export const makeNav = (config?: Partial<NavConfig>): NavTheme => {
  const border = evalSideBordersConfig(defaultNav.border, config?.border)
  const padding = evalSideSizesConfig(defaultNav.padding, config?.padding)
  const radius = evalCornerSizesConfig(defaultNav.radius, config?.radius)

  const item = config?.currentItem
  const itemBorder = evalSideBordersConfig(
    defaultNav.currentItem.border,
    item?.border,
  )
  const itemPadding = evalSideSizesConfig(
    defaultNav.currentItem.padding,
    item?.padding,
  )
  const itemRadius = evalCornerSizesConfig(
    defaultNav.currentItem.radius,
    item?.radius,
  )

  return {
    color: config?.color || defaultNav.color,
    cursor: config?.cursor || defaultNav.cursor,
    border,
    font: config?.font || defaultNav.font,
    padding,
    radius,
    currentItem: {
      color: item?.color || config?.color || defaultNav.currentItem.color,
      cursor: item?.cursor || config?.cursor || defaultNav.currentItem.cursor,
      border: mergeConfig<SideBorders>(itemBorder, border),
      font: item?.font || config?.font || defaultNav.currentItem.font,
      padding: mergeConfig<SideSizes>(itemPadding, padding),
      radius: mergeConfig<CornerSizes>(itemRadius, radius),
    },
  }
}
