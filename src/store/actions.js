import types from './types'

const setActiveSelect = value => {
  return {
    type: types.SET_ACTIVE_SELECT,
    value,
  }
}

export default {
  setActiveSelect,
}
