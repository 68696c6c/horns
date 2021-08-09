import _cloneDeep from 'lodash.clonedeep'
import _merge from 'lodash.merge'

import DeepPartial from './deep-partial'

export const mergeConfig = <T>(
  defaultConfig: Required<T>,
  providedConfig?: DeepPartial<T>,
): Required<T> => _merge(_cloneDeep(defaultConfig), providedConfig)
