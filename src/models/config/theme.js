import ColorsConfig from './colors'
import InputsConfig from './inputs'
import LinksConfig from './links'
import NavItemsConfig from './nav-items'
import RadiusConfig from './radis'
import SpacingConfig from './spacing'
import GridConfig from './grid'
import TypographyConfig from './typography'
import { safeGetValue } from './utils'

class ThemeConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    // Read values from config object and initialize sub-configs.
    const configColors = safeGetValue(config, 'colors', {})
    this.colors = new ColorsConfig(configColors)

    const configInputs = safeGetValue(config, 'inputs', {})
    this.inputs = new InputsConfig(configInputs)

    const configTypography = safeGetValue(config, 'typography', {})
    this.typography = new TypographyConfig(configTypography)

    const configSpacing = safeGetValue(config, 'spacing', {})
    this.spacing = new SpacingConfig(this.typography, configSpacing)

    const configGrid = safeGetValue(config, 'navItems', {})
    this.grid = new GridConfig(this.spacing, configGrid)

    const configNavItems = safeGetValue(config, 'navItems', {})
    this.navItems = new NavItemsConfig(this.colors, this.spacing, configNavItems)

    const configRadius = safeGetValue(config, 'radius', {})
    this.radius = new RadiusConfig(this.spacing, configRadius)

    const configLinks = safeGetValue(config, 'links', {})
    this.links = new LinksConfig(this.colors, configLinks)
    /** ============================================================================================================= */

    const configLinkDecorations = safeGetValue(config, 'linkDecorations', {})
    this.linkDecorations = {
      default: safeGetValue(configLinkDecorations, 'default', 'none'),
      hover: safeGetValue(configLinkDecorations, 'hover', 'none'),
      active: safeGetValue(configLinkDecorations, 'active', 'none'),
    }

    const map = safeGetValue(config, 'map', {})
    this.map = {
      backgroundColor: safeGetValue(map, 'backgroundColor', 'neutral'),
      stateColor: safeGetValue(map, 'stateColor', 'primary'),
      stateColorHover: safeGetValue(map, 'stateColorHover', 'tertiary-light'),
      stateColorActive: safeGetValue(map, 'stateColorActive', 'tertiary-dark'),
      stateLineColor: safeGetValue(map, 'stateLineColor', 'background'),
      stateLineColorHover: safeGetValue(map, 'stateLineColorHover', 'background'),
      stateLineColorActive: safeGetValue(map, 'stateLineColorActive', 'background'),
      labelColor: safeGetValue(map, 'labelColor', 'light'),
      labelColorHover: safeGetValue(map, 'labelColorHover', 'dark'),
      labelColorActive: safeGetValue(map, 'labelColorActive', 'dark'),
    }
  }
}

export default ThemeConfig
