import merge from "lodash.merge"

import * as Border from "./border"
import * as Colorway from "./colorway"
import * as Line from "./line"
import * as Outline from "./outline"
import * as Radius from "./radius"
import * as Scale from "./scale"
import * as Spacing from "./spacing"
import * as Typography from "./typography"
import * as Typography2 from "./typography2"

import * as Anchor from "./elements/anchor"
import * as Button from "./elements/button"
import * as Control from "./elements/control"
import * as Heading from "./elements/heading"
import * as Icon from "./elements/icon"
import * as Message from "./elements/message"
import * as Surface from "./elements/surface"
import * as Text from "./elements/text"

import { DeepPartial } from "./types"
import { FoundationsConfig, makeFoundations } from "./foundations"

type BaseTheme<A, B, C, H, I, M, S, T> = {
  anchor: A
  button: B
  control: C
  heading: H
  icon: I
  message: M
  // navItem: N
  surface: S
  text: T
}

export type ElementsConfig = BaseTheme<
  Anchor.Config,
  Button.Config,
  Control.Config,
  Heading.Config,
  Icon.Config,
  Message.Config,
  Surface.Config,
  Text.Config
>

export type Config = {
  foundations: FoundationsConfig
  elements: ElementsConfig
}

export type Theme = BaseTheme<
  Anchor.Element,
  Button.Element,
  Control.Element,
  Heading.Element2,
  Icon.Element,
  Message.Element,
  Surface.Element,
  Text.Element2
>

export const defaultConfig: Config = {
  foundations: {
    border: Border.defaultConfig,
    colorway: Colorway.defaultConfig,
    line: Line.defaultConfig,
    outline: Outline.defaultConfig,
    radius: Radius.defaultConfig,
    scale: Scale.defaultConfig,
    spacing: Spacing.defaultConfig,
    typography: Typography.defaultConfig,
    typography2: Typography2.defaultConfig,
  },
  elements: {
    anchor: Anchor.defaultConfig,
    button: Button.defaultConfig,
    control: Control.defaultConfig,
    heading: Heading.defaultConfig,
    icon: Icon.defaultConfig,
    message: Message.defaultConfig,
    surface: Surface.defaultConfig,
    text: Text.defaultConfig,
  },
}

export type PartialConfig = DeepPartial<Config>

export const makeTheme = (config: PartialConfig): Theme => {
  const { foundations, elements } = merge<Config, PartialConfig>(
    defaultConfig,
    config
  )
  const f = makeFoundations(foundations)
  return {
    anchor: Anchor.makeElement(f, elements.anchor),
    button: Button.makeElement(f, elements.button),
    control: Control.makeElement(f, elements.control),
    // heading: Heading.makeElement(f),
    heading: Heading.makeElement2(f, elements.heading),
    icon: Icon.makeElement(f, elements.icon),
    message: Message.makeElement(f, elements.message),
    surface: Surface.makeElement(f, elements.surface),
    // text: Text.makeElement(f),
    text: Text.makeElement2(f, elements.text),
  }
}

export const makeDefaultTheme = (): Theme => makeTheme(defaultConfig)
