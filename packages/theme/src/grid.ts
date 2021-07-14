import { Size } from './sizes'
import { mergeConfig } from './utils'

export interface GridConfig {
  gap: Size
  columnMin: string
}

const defaultConfig: GridConfig = {
  gap: Size.Small,
  columnMin: '280px',
}

export type Grid = Required<GridConfig>

export const makeGrid = (config?: Partial<GridConfig>): Grid =>
  mergeConfig<GridConfig>(defaultConfig, config)
