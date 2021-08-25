import * as Base from './config'
import * as Elements from './elements'
import { DeepPartial } from './utils'

export interface Config extends DeepPartial<Base.Config> {
  name?: string
  elements?: Elements.Config
}

export interface Theme extends Base.Theme {
  readonly name: string
  readonly elements: Elements.Theme
}

export const make = (themeConfig?: Config): Theme => {
  const config: Config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  const base = Base.make(config)
  return {
    ...base,
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    elements: Elements.make(config.elements),
  }
}
