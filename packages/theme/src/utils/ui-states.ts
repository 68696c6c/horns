export enum UIState {
  Base = 'base',
  Hover = 'hover',
  Active = 'active',
  Inactive = 'inactive',
  Visited = 'visited',
  Selected = 'selected',
}

export type HoverState = UIState.Base | UIState.Hover | UIState.Active

export type StatusState = UIState.Inactive | UIState.Visited | UIState.Selected
