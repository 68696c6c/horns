import { Foundations, FoundationsConfig } from "./utils"
import * as Border from "./border"
import * as Colorway from "./colorway"
import * as Radius from "./radius"
import * as Typography from "./typography"
import * as Spacing from "./spacing"
import {
  // Anchor,
  // anchorConfig,
  // AnchorConfig,
  Button,
  buttonConfig,
  ButtonConfig,
  Control,
  controlConfig,
  ControlConfig,
  Heading,
  makeAnchorTokens,
  makeBodyTextTokens,
  makeButtonTokens,
  makeControlTokens,
  makeHeadingTokens,
  Text,
} from "./elements"
// import { Anchor, anchorConfig, Config } from "./elements/anchor"
import * as Anchor from "./elements/anchor"
import * as Card from "./elements/card"
import * as Icon from "./elements/icon"
import * as Notification from "./elements/notification"

export type Config = {
  foundations: FoundationsConfig
  elements: {
    anchor: Anchor.Config
    button: ButtonConfig
    card: Card.Config
    control: ControlConfig
    icon: Icon.Config
    notification: Notification.Config
  }
}
export type Theme = {
  anchor: Anchor.Element
  button: Button
  card: Card.Element
  control: Control
  heading: Heading
  icon: Icon.Element
  notification: Notification.Element
  text: Text
}
export const makeFoundations = ({
  border,
  colorway,
  radius,
  ...foundations
}: FoundationsConfig): Foundations => ({
  border: Border.makeFoundations(border),
  colorway: Colorway.makeFoundations(colorway),
  radius: Radius.makeFoundations(radius),
  ...foundations,
})
export const makeTheme = ({ foundations, elements }: Config): Theme => {
  const f = makeFoundations(foundations)
  return {
    anchor: makeAnchorTokens(f, elements.anchor),
    button: makeButtonTokens(f, elements.button),
    card: Card.makeTokens(f, elements.card),
    control: makeControlTokens(f, elements.control),
    heading: makeHeadingTokens(f),
    icon: Icon.makeTokens(f, elements.icon),
    notification: Notification.makeTokens(f, elements.notification),
    text: makeBodyTextTokens(f.typography),
  }
}
export const defaultConfig: Config = {
  foundations: {
    border: Border.defaultConfig,
    colorway: Colorway.defaultConfig,
    radius: Radius.defaultConfig,
    spacing: Spacing.defaultConfig,
    typography: Typography.defaultConfig,
  },
  elements: {
    anchor: Anchor.defaultConfig,
    button: buttonConfig,
    card: Card.defaultConfig,
    control: controlConfig,
    icon: Icon.defaultConfig,
    notification: Notification.defaultConfig,
  },
}
export const makeDefaultTheme = (): Theme => makeTheme(defaultConfig)
