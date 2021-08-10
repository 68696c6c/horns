export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',

  Action = 'action',
  Prominent = 'prominent',
  Selected = 'selected',

  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',

  Dark = 'dark',
  Neutral = 'neutral',
  Light = 'light',

  BgPrimary = 'bg',
  BgSecondary = 'bg2',
  Typography = 'typography',
}

export type BaseColor = Omit<
  Color,
  | Color.Action
  | Color.Prominent
  | Color.Selected
  | Color.BgPrimary
  | Color.BgSecondary
  | Color.Typography
>

export type BrandColor =
  | Color.Primary
  | Color.Secondary
  | Color.Tertiary
  | Color.Action
  | Color.Prominent
  | Color.Selected

export type NotificationColor =
  | Color.Success
  | Color.Info
  | Color.Warning
  | Color.Danger

export type SurfaceColor = Color.BgPrimary | Color.BgSecondary

export enum Swatch {
  Base = 'base',
  Alt = 'alt',
  Readable = 'readable',
}

export type Swatches = {
  [key in Swatch]: string
}
