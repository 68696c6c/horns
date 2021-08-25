import {
  Breakpoint,
  Color,
  evalCornerSizesConfigs,
  evalShadows,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
  Font,
} from '../../config'
import { DeepPartial, evalConfigBooleans } from '../../utils'

import * as Interactive from '../interactive'

import * as Item from './item'

type Table<ItemType> = ItemType & {
  breakpoint: Breakpoint
  headerItem: DeepPartial<ItemType>
}

export interface Config extends Table<Interactive.Items<Item.Config>> {}

export interface Props extends Table<Interactive.Items<Item.Props>> {}

export interface Theme extends Table<Interactive.Items<Item.Theme>> {}

export const defaultConfig: Config = {
  ...Item.defaultConfig,
  breakpoint: Breakpoint.Mobile,
  currentItem: {
    color: Color.BgSecondary,
  },
  headerItem: {
    font: Font.Strong,
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
    headerItem: makeItem(base, input, input?.headerItem),
  }
}
