import {
  evalCornerSizesConfigs,
  evalShadows,
  evalSideBordersConfigs,
  evalSideSizesConfigs,
} from '../../config'
import { DeepPartial, evalConfigBooleans } from '../../utils'

import * as Interactive from '../interactive'

import * as Item from './item'

export interface Config extends Interactive.Items<Item.Config> {}

export interface Props extends Interactive.Items<Item.Props> {}

export interface Theme extends Interactive.Items<Item.Theme> {}

export const defaultConfig: Config = {
  ...Item.defaultConfig,
  currentItem: {
    marker: {},
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
  marker: item?.marker || base.marker,
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
    currentItem: makeItem(base, input, input?.currentItem),
  }
}
