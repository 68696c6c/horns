import { safeGetValue } from './utils'

export const ERROR_CLASS = 'error'

const defaultInputs = {
  borderWidth: '2px',
}

class InputsConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    this.borderWidth = safeGetValue(config, 'borderWidth', defaultInputs.borderWidth)

    console.log('InputsConfig', this)
  }
}

export default InputsConfig
