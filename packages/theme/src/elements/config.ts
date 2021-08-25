import * as Blocks from './blocks'
import * as Clickables from './clickables'
import * as Controls from './controls'
import * as Layouts from './layouts'
import * as Lists from './lists'
import * as Navs from './navs'
import * as Notifications from './notifications'
import * as Surfaces from './surfaces'
import * as Tables from './tables'
import { DeepPartial, mergeConfig } from '../utils'

export interface Config {
  blocks: Blocks.Config
  buttons: Clickables.Config
  controls: Controls.Config
  layouts: Layouts.Config
  lists: Lists.Config
  links: Clickables.Config
  navs: Navs.Config
  notifications: Notifications.Config
  surfaces: Surfaces.Config
  tables: Tables.Config
}

export interface Theme {
  blocks: Blocks.Theme
  buttons: Clickables.Theme
  controls: Controls.Theme
  layouts: Layouts.Theme
  lists: Lists.Theme
  links: Clickables.Theme
  navs: Navs.Theme
  notifications: Notifications.Theme
  surfaces: Surfaces.Theme
  tables: Tables.Theme
}

export const defaultConfig: Config = {
  blocks: Blocks.defaultConfig,
  buttons: Clickables.defaultButtonsConfig,
  controls: Controls.defaultConfig,
  layouts: Layouts.defaultConfig,
  links: Clickables.defaultLinksConfig,
  lists: Lists.defaultConfig,
  navs: Navs.defaultConfig,
  notifications: Notifications.defaultConfig,
  surfaces: Surfaces.defaultConfig,
  tables: Tables.defaultConfig,
}

export const make = (input?: DeepPartial<Config>): Theme => {
  const config = mergeConfig(defaultConfig, input)
  return {
    blocks: Blocks.make(config.blocks),
    buttons: Clickables.makeButtons(config.buttons),
    controls: Controls.make(config.controls),
    layouts: Layouts.make(config.layouts),
    links: Clickables.makeLinks(config.links),
    lists: Lists.make(config.lists),
    navs: Navs.make(config.navs),
    notifications: Notifications.make(config.notifications),
    surfaces: Surfaces.make(config.surfaces),
    tables: Tables.make(config.tables),
  }
}
