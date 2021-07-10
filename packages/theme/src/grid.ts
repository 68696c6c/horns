import { Size, Sizes } from './sizes'
import { mergeConfig } from './utils'

export interface GridConfig {
  gap: Size
  columnMin: string
}

const defaultConfig: GridConfig = {
  gap: Size.Small,
  columnMin: '280px',
}

export type Grid = Required<{
  gap: string
  columnMin: string
}>

export const makeGrid = (sizes: Sizes, config?: Partial<GridConfig>): Grid => {
  const merged = mergeConfig<GridConfig>(defaultConfig, config)
  return {
    gap: sizes[merged.gap],
    columnMin: merged.columnMin,
  }
}
