import { isUndefined } from '../utils/utils'

class Base {
  static argD(args, key, defval) {
    return isUndefined(args) || isUndefined(args[key]) ? defval : args[key]
  }
}

export default Base
