import { BordersConfig, BorderStyle } from './borders'
import { CornerSizeOptions, SideSizeOptions, Size } from './sizes'

export type ControlsConfig = {
  border: BordersConfig
  padding: SideSizeOptions
  radius: CornerSizeOptions
}

export const defaultControls: ControlsConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  padding: {
    all: Size.XSmall,
  },
  radius: {
    all: Size.Tiny,
  },
}

export const defaultButtons: ControlsConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: BorderStyle.Solid,
    },
  },
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
}
