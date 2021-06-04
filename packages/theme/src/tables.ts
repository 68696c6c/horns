import { SideSizeOptions, Size } from './sizes'

export type Tables = {
  padding: SideSizeOptions
}

export const defaultTables: Tables = {
  padding: {
    all: Size.XSmall,
  },
}
