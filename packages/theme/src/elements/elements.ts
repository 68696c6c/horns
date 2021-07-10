import { Borders, BordersConfig } from '../borders'
import {
  CornerSizesConfig,
  SideValues,
  SideSizesConfig,
  CornerValues,
} from '../sizes'

export type ElementConfig = Required<{
  border: BordersConfig
  padding: SideSizesConfig
  radius: CornerSizesConfig
}>

export type ElementTheme = Required<{
  border: Borders
  padding: SideValues
  radius: CornerValues
}>
