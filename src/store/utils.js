import actions from './actions'
import { isUndefined } from '../utils/utils'

export const INITIAL_STATE = {
  activeSelect: '',
}

const safeGetValue = (state, key, defValue) => {
  return isUndefined(state) || isUndefined(state[key]) ? defValue : state[key]
}

export const mapStateToProps = state => {
  return {
    activeSelect: safeGetValue(state, 'activeSelect', '')
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setActiveSelect: (id) => {
      dispatch(actions.setActiveSelect(id))
    }
  }
}
