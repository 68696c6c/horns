const EVENT_PREFIX = 'ui'

export const getEventName = name => {
  return `${EVENT_PREFIX}:${name}`
}
