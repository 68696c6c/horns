import { SideBorders, SideBordersConfig } from '../borders'
import { Color } from '../colors'
import {
  CornerSizes,
  CornerSizesConfig,
  SideSizes,
  SideSizesConfig,
} from '../sizes'
import { Font } from '../typography'
import { Cursor } from '../utils'

export interface ElementConfig {
  color: Color
  cursor: Cursor
  border: SideBordersConfig
  font: Font
  padding: SideSizesConfig
  radius: CornerSizesConfig
}

export interface ElementTheme {
  color: Color
  cursor: Cursor
  border: SideBorders
  font: Font
  padding: SideSizes
  radius: CornerSizes
}
