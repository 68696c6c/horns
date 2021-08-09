import { BorderStyle, evalSideBordersConfigs } from '../borders'
import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { evalCornerSizesConfigs, evalSideSizesConfigs, Size } from '../sizes'
import { Font } from '../typography'
import {
  HoverState,
  StatusState,
  evalUIStatesConfigs,
  UIStatesConfig,
} from '../utils'

import {
  ElementConfig,
  ElementConfigState,
  ElementTheme,
  ElementThemeState,
} from './elements'

export const defaultLinks: ElementConfig = {
  border: {
    all: {
      width: Size.None,
      style: BorderStyle.None,
    },
  },
  color: Colorway.Typography,
  cursor: Cursor.Pointer,
  font: Font.Link,
  padding: {
    all: Size.None,
  },
  radius: {
    all: Size.None,
  },
  states: {
    [HoverState.Hover]: {
      color: Colorway.Primary,
    },
    [HoverState.Active]: {
      color: Colorway.Secondary,
    },
    [StatusState.Visited]: {
      color: Colorway.Secondary,
    },
  },
}

export const makeLinks = (config?: Partial<ElementConfig>): ElementTheme => {
  const base: ElementThemeState = {
    color: config?.color || defaultLinks.color,
    cursor: config?.cursor || defaultLinks.cursor,
    border: evalSideBordersConfigs(defaultLinks.border, config?.border),
    font: config?.font || defaultLinks.font,
    padding: evalSideSizesConfigs(defaultLinks.padding, config?.padding),
    radius: evalCornerSizesConfigs(defaultLinks.radius, config?.radius),
  }
  return {
    ...base,
    states: evalUIStatesConfigs<ElementThemeState, ElementConfigState>(
      base,
      defaultLinks.states as UIStatesConfig<ElementConfigState>,
      config?.states,
    ),
  }
}
