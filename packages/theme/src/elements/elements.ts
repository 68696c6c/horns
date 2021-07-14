import { SideBorders, SideBordersConfig } from '../borders'
import {
  CornerSizes,
  CornerSizesConfig,
  SideSizes,
  SideSizesConfig,
} from '../sizes'

export type ElementConfig = Required<{
  border: SideBordersConfig
  padding: SideSizesConfig
  radius: CornerSizesConfig
}>

export type ElementTheme = Required<{
  border: SideBorders
  padding: SideSizes
  radius: CornerSizes
}>
