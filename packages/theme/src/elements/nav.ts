import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Color } from '../colors'
import { ShadowType } from '../shadows'
import { Size, evalCornerSizesConfigs, evalSideSizesConfigs } from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

import {
  ElementConfig,
  ElementProps,
  ThemeElement,
  evalBooleanProp,
} from './elements'

type NavItemConfig = Omit<
  ElementConfig,
  'outlined' | 'shadowed' | 'shadowType' | 'typographic'
>

export interface NavConfig extends ElementConfig {
  currentItem?: NavItemConfig
}

export interface NavProps extends ElementProps {
  currentItem?: ElementProps
}

export interface NavTheme extends ThemeElement {
  currentItem: ThemeElement
}

const defaultCurrentItem: NavItemConfig = {
  border: {
    bottom: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  color: Color.Selected,
  cursor: Cursor.Default,
  font: Font.Compact,
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
  color: Color.BgPrimary,
  cursor: Cursor.Pointer,
  font: Font.Compact,
  outlined: false,
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.None,
  },
  shadowed: false,
  shadowType: ShadowType.Box,
  typographic: false,
  currentItem: defaultCurrentItem,
}

export const makeNav = (input?: NavProps): NavTheme => {
  const border = evalSideBordersConfigs(defaultNav.border, input?.border)
  const outlined = evalBooleanProp(defaultNav.outlined, 'outlined', input)
  const padding = evalSideSizesConfigs(defaultNav.padding, input?.padding)
  const radius = evalCornerSizesConfigs(defaultNav.radius, input?.radius)
  const shadow = input?.shadowed ? defaultNav.shadowType : ShadowType.None
  const { typographic } = defaultNav

  const item = input?.currentItem
  const itemPadding = evalSideSizesConfigs(padding, item?.padding)
  const itemRadius = evalCornerSizesConfigs(radius, item?.radius)

  return {
    border,
    color: input?.color || defaultNav.color,
    cursor: input?.cursor || defaultNav.cursor,
    font: input?.font || defaultNav.font,
    outlined,
    padding,
    shadow,
    radius,
    typographic,
    currentItem: {
      border: evalSideBordersConfigs(
        defaultNav.border,
        defaultCurrentItem.border,
        input?.border,
        item?.border,
      ),
      color: item?.color || input?.color || defaultCurrentItem.color,
      cursor: item?.cursor || input?.cursor || defaultCurrentItem.cursor,
      font: item?.font || input?.font || defaultCurrentItem.font,
      outlined,
      padding: evalSideSizesConfigs(defaultCurrentItem.padding, itemPadding),
      shadow,
      radius: evalCornerSizesConfigs(defaultCurrentItem.radius, itemRadius),
      typographic,
    },
  }
}
