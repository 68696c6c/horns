import { IconType } from "react-icons"

import { Scale } from "@horns/theme"
import * as React from "react"

export const errorClass = "error"
export const getErrorClass = (hasError?: boolean) => {
  return hasError ? errorClass : ""
}

export const valueClass = "has-value"
export const getValueClass = (hasValue?: boolean) => {
  return hasValue ? valueClass : ""
}

export const getVariantClass = (
  fallback?: string,
  hasError?: boolean,
  disabled?: boolean
): string | undefined => {
  if (disabled) return "disabled"
  if (hasError) return errorClass
  return fallback
}

export type BaseControlProps = {
  name: string
  disabled?: boolean
  hasError?: boolean
  label?: string
  message?: string
  scale?: Scale
}

// export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> &
//   BaseControlProps &
//   Option & { key: React.Key }
// export type OptionProps = ToggleProps & { key: React.Key }

export type Option = {
  label: string
  value?: string | number
}

export type OptionsControlProps = {
  options: Option[]
}

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  BaseControlProps & {
    type?: Exclude<
      React.InputHTMLAttributes<HTMLInputElement>["type"],
      "checkbox" | "radio"
    >
  }

export type BaseToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  BaseControlProps
// & {
//   type: "checkbox" | "radio"
// }

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  BaseControlProps &
  OptionsControlProps

export type ControlType =
  | React.InputHTMLAttributes<HTMLInputElement>["type"]
  | "select"
  | "multiselect"

export type ControlProps = Omit<
  InputProps | BaseToggleProps | SelectProps,
  "name"
> & {
  type: ControlType
}
