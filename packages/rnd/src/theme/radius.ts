import * as CSS from "csstype"

import {
  FoundationConfig,
  RadiusConfig,
  RadiusFoundation,
  RadiusFoundations,
  RadiusTokens,
} from "./utils"

export const makeRadiusConfig = (
  f: FoundationConfig<CSS.Property.BorderRadius>,
  config: RadiusFoundation
): RadiusTokens => ({
  borderTopLeftRadius: f[config.borderTopLeftRadius],
  borderTopRightRadius: f[config.borderTopRightRadius],
  borderBottomLeftRadius: f[config.borderBottomLeftRadius],
  borderBottomRightRadius: f[config.borderBottomRightRadius],
})
export const makeFoundations = ({
  radii,
  corners,
}: RadiusConfig): RadiusFoundations => ({
  round: makeRadiusConfig(radii, corners.round),
  normal: makeRadiusConfig(radii, corners.normal),
  sharp: makeRadiusConfig(radii, corners.sharp),
})
export const defaultConfig: RadiusConfig = {
  radii: {
    "00": "0px",
    "01": "1px",
    "02": "2px",
    "03": "3px",
    "04": "4px",
    "05": "5px",
    "06": "6px",
    "07": "7px",
    "08": "8px",
    "09": "10%",
    "10": "50%",
  },
  corners: {
    round: {
      borderTopLeftRadius: "09",
      borderTopRightRadius: "09",
      borderBottomLeftRadius: "09",
      borderBottomRightRadius: "09",
    },
    normal: {
      borderTopLeftRadius: "04",
      borderTopRightRadius: "04",
      borderBottomLeftRadius: "04",
      borderBottomRightRadius: "04",
    },
    sharp: {
      borderTopLeftRadius: "00",
      borderTopRightRadius: "00",
      borderBottomLeftRadius: "00",
      borderBottomRightRadius: "00",
    },
  },
}
