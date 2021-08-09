export enum HoverState {
  Base = 'base',
  Hover = 'hover',
  Active = 'active',
}

export enum StatusState {
  Inactive = 'inactive',
  Visited = 'visited',
  Selected = 'selected',
}

export type UIState = HoverState | StatusState

export type UIStatesConfig<T> = {
  [key in UIState]?: T
}

export type UIStates<T> = {
  [key in UIState]: T
}

const configToStates = <T, C>(
  defaults: UIStates<T>,
  states: UIStatesConfig<C>,
): UIStates<T> => {
  const determine = (state: UIState): T =>
    (states[state] || defaults[state]) as T
  return {
    [HoverState.Base]: determine(HoverState.Base),
    [HoverState.Hover]: determine(HoverState.Hover),
    [HoverState.Active]: determine(HoverState.Active),
    [StatusState.Inactive]: determine(StatusState.Inactive),
    [StatusState.Visited]: determine(StatusState.Visited),
    [StatusState.Selected]: determine(StatusState.Selected),
  }
}

const makeUIStatesFromBase = <T>(base: T): UIStates<T> => ({
  [HoverState.Base]: base,
  [HoverState.Hover]: base,
  [HoverState.Active]: base,
  [StatusState.Inactive]: base,
  [StatusState.Visited]: base,
  [StatusState.Selected]: base,
})

export const evalUIStatesConfigs = <Result, Config>(
  defaults: Result,
  base: UIStatesConfig<Config>,
  ...values: Array<UIStatesConfig<Config> | undefined>
): UIStates<Result> => {
  const states = makeUIStatesFromBase<Result>(defaults)
  let result: UIStates<Result> = configToStates<Result, Config>(states, base)
  values.forEach((value) => {
    if (value) {
      result = configToStates<Result, Config>(result, value)
    }
  })
  return result
}
