import {
  BorderFoundation,
  BorderFoundations,
  BorderFoundationsConfig,
  BorderTokens,
  FoundationConfig,
} from "./utils"

export const makeBorderConfig = (
  f: FoundationConfig,
  config: BorderFoundation
): BorderTokens => ({
  borderWidth: f[config.borderWidth],
  borderStyle: config.borderStyle,
})
export const makeFoundations = ({
  widths,
  borders,
}: BorderFoundationsConfig): BorderFoundations => ({
  thin: makeBorderConfig(widths, borders.thin),
  medium: makeBorderConfig(widths, borders.medium),
  thick: makeBorderConfig(widths, borders.thick),
})
export const defaultConfig: BorderFoundationsConfig = {
  widths: {
    "00": "0px",
    "01": "1px",
    "02": "2px",
    "03": "3px",
    "04": "4px",
    "05": "5px",
    "06": "6px",
    "07": "7px",
    "08": "8px",
    "09": "9px",
    "10": "10px",
  },
  borders: {
    thin: {
      borderWidth: "01",
      borderStyle: "solid",
    },
    medium: {
      borderWidth: "02",
      borderStyle: "solid",
    },
    thick: {
      borderWidth: "04",
      borderStyle: "solid",
    },
  },
}
