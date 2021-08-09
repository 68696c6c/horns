import { SideBorders, SideBordersConfig } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import {
  CornerSizes,
  CornerSizesConfig,
  SideSizes,
  SideSizesConfig,
} from '../sizes'
import { Font } from '../typography'
import { UIStates, UIStatesConfig } from '../utils'

export type ElementConfigState = Partial<Omit<ElementConfig, 'states'>>

export interface ElementConfig {
  // TODO: "color" should be used to set a single, static color.  Colorway should be used to apply a pre-determined set of colors for different states etc.
  color: Colorway
  cursor: Cursor
  border: SideBordersConfig
  font: Font
  padding: SideSizesConfig
  radius: CornerSizesConfig
  states?: UIStatesConfig<ElementConfigState>
}

export type ElementThemeState = Omit<ElementTheme, 'states'>

export interface ElementTheme {
  color: Colorway
  cursor: Cursor
  border: SideBorders
  font: Font
  padding: SideSizes
  radius: CornerSizes
  states?: UIStates<ElementThemeState>
}
