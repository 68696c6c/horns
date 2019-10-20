import { safeGetValue } from './utils'

const defaultInputs = {
  borderWidth: '2px',
}

class InputsConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    this.borderWidth = safeGetValue(config, 'borderWidth', defaultInputs.borderWidth)

    console.log('inputs config', this)
  }
}

export default InputsConfig
