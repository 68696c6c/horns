import * as React from "react"

import { Scale } from "../../theme/utils"

export type ControlProps = {
  id?: string
  name: string
  scale?: Scale
  hasError?: boolean
  label: string
  message?: string
}
export type ControlTextProps = {
  scale?: Scale
  hasError?: boolean
}
export type Option = {
  label: string
  value?: string | number
}
export type OptionProps = ControlProps & Option & { key: React.Key }
export type OptionsControlProps = ControlProps & {
  options: Option[]
}
export type OptionsLayoutProps = {
  renderOption: (p: OptionProps) => React.ReactNode
}
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  ControlProps
export type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> &
  OptionsControlProps
export type SelectProps = OptionsControlProps &
  React.SelectHTMLAttributes<HTMLSelectElement>
export type FormControlProps<T> = React.HTMLAttributes<HTMLDivElement> &
  T & {
    hasValue?: boolean
  }
export type FormControlType =
  | InputProps["type"]
  | ToggleProps["type"]
  | "select"
  | "multiselect"
