import { Size } from './sizes'

export type Grid = {
  gap: Size
  columnMin: string
}

export const defaultGrid: Grid = {
  gap: Size.Small,
  columnMin: '280px',
}
