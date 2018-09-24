import types from './types'
import { INITIAL_STATE } from './utils'

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_SELECT: {
      return Object.assign({}, state, {
        activeSelect: action.value,
      })
    }
  }
}

export default reducer
