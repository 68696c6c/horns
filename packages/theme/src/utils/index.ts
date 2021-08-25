export { CornersConfig, Corners, Corner, configToCorners } from './corners'
export { Cursor } from './cursors'
export { default as DeepPartial } from './deep-partial'
export { HoverState, StatusState, UIState } from './ui-states'
export { mergeConfig } from './merge'
export { SidesConfig, Sides, Side, configToSides } from './sides'

export const evalConfigBooleans = <T extends Record<string, any>>(
  defaultValue: boolean,
  key: keyof T,
  ...configs: Array<T | undefined>
): boolean => {
  let result = defaultValue
  configs.forEach((config) => {
    if (config && typeof config[key] === 'boolean') {
      result = config[key]
    }
  })
  return result
}
