import _cloneDeep from 'lodash.clonedeep'
import _merge from 'lodash.merge'

export const mergeConfig = <T>(
  defaultConfig: T,
  providedConfig?: Partial<T>,
): T => _merge(_cloneDeep(defaultConfig), providedConfig)
