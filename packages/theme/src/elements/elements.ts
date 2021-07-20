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

export interface ElementConfig {
  color: Colorway
  cursor: Cursor
  border: SideBordersConfig
  font: Font
  padding: SideSizesConfig
  radius: CornerSizesConfig
}

export interface ElementTheme {
  color: Colorway
  cursor: Cursor
  border: SideBorders
  font: Font
  padding: SideSizes
  radius: CornerSizes
}
