import BordersConfig from './borders'
import ColorsConfig from './colors'
import ColorsInteractiveConfig from './colors-interactive'
import InputsConfig from './inputs'
import TypographyConfig from './typography'
import SpacingConfig from './spacing'
import GridConfig from './grid'
import RadiusConfig from './radius'
import NavItemsConfig from './nav-items'
import LinksConfig from './links'
import ButtonsConfig from './buttons'
import MapsConfig from './maps'
import { safeGetValue } from './utils'

class Theme {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    // Read values from config object and initialize sub-configs.
    const configColors = safeGetValue(config, 'colors', {})
    this.colors = new ColorsConfig(configColors)
    this.colorsInteractive = new ColorsInteractiveConfig(this.colors)

    const configInputs = safeGetValue(config, 'inputs', {})
    this.inputs = new InputsConfig(configInputs)

    const configTypography = safeGetValue(config, 'typography', {})
    this.typography = new TypographyConfig(configTypography)

    const configSpacing = safeGetValue(config, 'spacing', {})
    this.spacing = new SpacingConfig(this.typography, configSpacing)

    const configBorders = safeGetValue(config, 'borders', {})
    this.borders = new BordersConfig(this.spacing, configBorders)

    const configGrid = safeGetValue(config, 'navItems', {})
    this.grid = new GridConfig(this.spacing, configGrid)

    const configRadius = safeGetValue(config, 'radius', {})
    const cr = new RadiusConfig(this.spacing, configRadius)
    this.radius = cr.getRadius()

    const configNavItems = safeGetValue(config, 'navItems', {})
    this.navItems = new NavItemsConfig(this.colors, this.spacing, configNavItems)

    const configLinks = safeGetValue(config, 'links', {})
    this.links = new LinksConfig(this.colors, configLinks)

    const configButtons = safeGetValue(config, 'buttons', {})
    this.buttons = new ButtonsConfig(this.spacing, cr, this.typography, configButtons)

    const configMap = safeGetValue(config, 'map', {})
    this.map = new MapsConfig(this.colors, configMap)
  }
}

export default Theme
