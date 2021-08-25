import {
  BorderStyle,
  Breakpoint,
  Color,
  evalCornerSizesConfigs,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
  evalShadows,
  Size,
} from '../../config'
import { Cursor, DeepPartial, evalConfigBooleans } from '../../utils'

import * as Interactive from '../interactive'

import * as Item from './item'

type Nav<
  ItemType extends Interactive.Config | Interactive.Props | Interactive.Theme,
> = ItemType & {
  breakpoint: Breakpoint
}

export interface Config extends Nav<Interactive.Items<Item.Config>> {}

export interface Props extends Nav<Interactive.Items<Item.Props>> {}

export interface Theme extends Nav<Interactive.Items<Item.Theme>> {}

export const defaultConfig: Config = {
  ...Item.defaultConfig,
  breakpoint: Breakpoint.Mobile,
  currentItem: {
    border: {
      bottom: {
        width: Size.Tiny,
        style: BorderStyle.Solid,
      },
    },
    color: Color.Selected,
    cursor: Cursor.Default,
  },
}

const makeItem = (
  base: Item.Theme,
  input?: DeepPartial<Config>,
  item?: DeepPartial<Item.Config>,
): Item.Theme => ({
  border: evalSideBordersConfigs(base.border, input?.border, item?.border),
  color: item?.color || base.color,
  cursor: item?.cursor || base.cursor,
  font: item?.font || base.font,
  outlined: evalConfigBooleans(base.outlined, 'outlined', item),
  padding: evalSideSizesConfigs(base.padding, item?.padding),
  radius: evalCornerSizesConfigs(base.radius, item?.radius),
  shadow: evalShadows(
    defaultConfig.shadowType,
    defaultConfig.shadowed,
    input,
    item,
  ),
  typographic: base.typographic,
})

export const make = (input?: DeepPartial<Config>): Theme => {
  const base = Item.make(input)
  return {
    ...base,
    breakpoint: input?.breakpoint || defaultConfig.breakpoint,
    currentItem: makeItem(base, input, input?.currentItem),
  }
}
