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

export type UIState = HoverState | StatusState.Inactive
