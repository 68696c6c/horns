const EVENT_PREFIX = 'horns'

export const getEventName = name => {
  return `${EVENT_PREFIX}:${name}`
}

export const EVENT_SELECT_OPEN = `${EVENT_PREFIX}:select:open`
export const EVENT_SELECT_CHANGE = `${EVENT_PREFIX}:select:change`

export const EVENT_MULTISELECT_OPEN = `${EVENT_PREFIX}:multiselect:open`
export const EVENT_MULTISELECT_CHANGE = `${EVENT_PREFIX}:multiselect:change`

export const EVENT_MENU_OPEN = `${EVENT_PREFIX}:menu:open`
export const EVENT_MENU_CLOSE = `${EVENT_PREFIX}:menu:close`
export const EVENT_MENU_CLOSE_OTHERS = `${EVENT_PREFIX}:menu:closeOthers`

export const EVENT_HEADER_STICK = `${EVENT_PREFIX}:header:stick`
export const EVENT_HEADER_UNSTICK = `${EVENT_PREFIX}:header:unstick`
