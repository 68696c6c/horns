import {
  Anchor,
  anchorConfig,
  AnchorConfig,
  borderFoundationConfig,
  Button,
  buttonConfig,
  ButtonConfig,
  Control,
  ControlConfig,
  controlConfig,
  Foundations,
  FoundationsConfig,
  makeAnchorTokens,
  makeBorderFoundations,
  makeButtonTokens,
  makeControlTokens,
  makeRadiusFoundations,
  radiusFoundationsConfig,
  spacingFoundations,
  typographyConfig,
} from "./utils"
import * as Colorway from "./colorway"

export type Config = {
  foundations: FoundationsConfig
  elements: {
    anchor: AnchorConfig
    button: ButtonConfig
    control: ControlConfig
  }
}
export type Theme = {
  anchor: Anchor
  button: Button
  control: Control
}
export const makeFoundations = ({
  border,
  colorway,
  radius,
  ...foundations
}: FoundationsConfig): Foundations => ({
  border: makeBorderFoundations(border),
  colorway: Colorway.makeColorwayFoundations(colorway),
  radius: makeRadiusFoundations(radius),
  ...foundations,
})
export const makeTheme = ({ foundations, elements }: Config): Theme => {
  const f = makeFoundations(foundations)
  return {
    anchor: makeAnchorTokens(f, elements.anchor),
    button: makeButtonTokens(f, elements.button),
    control: makeControlTokens(f, elements.control),
  }
}
export const defaultConfig: Config = {
  foundations: {
    border: borderFoundationConfig,
    colorway: Colorway.defaultConfig,
    radius: radiusFoundationsConfig,
    spacing: spacingFoundations,
    typography: typographyConfig,
  },
  elements: {
    anchor: anchorConfig,
    button: buttonConfig,
    control: controlConfig,
  },
}
export const makeDefaultTheme = (): Theme => makeTheme(defaultConfig)
