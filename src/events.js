const EVENT_PREFIX = 'horns'

export const getEventName = name => {
  return `${EVENT_PREFIX}:${name}`
}

export const EVENT_SELECT_OPEN = `${EVENT_PREFIX}:select:open`
export const EVENT_SELECT_CHANGE = `${EVENT_PREFIX}:select:change`

export const EVENT_MULTISELECT_OPEN = `${EVENT_PREFIX}:multiselect:open`
export const EVENT_MULTISELECT_CHANGE = `${EVENT_PREFIX}:multiselect:change`

