import {
  SideBorders,
  SideBordersConfig,
  Color,
  ShadowType,
  CornerSizes,
  CornerSizesConfig,
  SideSizes,
  SideSizesConfig,
  Font,
} from '../config'
import { Cursor, DeepPartial } from '../utils'

export interface Config {
  color: Color
  cursor: Cursor
  border: SideBordersConfig
  font: Font
  padding: SideSizesConfig
  radius: CornerSizesConfig
  shadowed: boolean
  shadowType: ShadowType
}

export interface Props extends DeepPartial<Omit<Config, 'shadowType'>> {
  visible: boolean
}

export interface Theme {
  color: Color
  cursor: Cursor
  border: SideBorders
  font: Font
  padding: SideSizes
  shadow: ShadowType
  radius: CornerSizes
}
