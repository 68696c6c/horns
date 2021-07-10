import _cloneDeep from 'lodash.clonedeep'
import _merge from 'lodash.merge'

export const mergeConfig = <T>(
  defaultConfig: Required<T>,
  providedConfig?: Partial<T>,
): Required<T> => _merge(_cloneDeep(defaultConfig), providedConfig)
