import * as React from "react"

import { InputProps, SelectProps, ToggleProps } from "../FormControl"
import { Input } from "../Input"
import { Select } from "../Select"
import { SearchInput, SearchInputProps } from "../SearchInput"
import { Checkbox, CheckboxProps } from "../Checkbox"

// export type ControlProps = (
//   | Omit<InputProps, "type">
//   | Omit<ToggleProps, "type">
//   | SelectProps
// ) & {
//   type:
//     | InputProps["type"]
//     | ToggleProps["type"]
//     | "search"
//     | "select"
//     | "multiselect"
// }
export type ControlProps =
  | InputProps
  | ToggleProps
  | (SelectProps & {
      type: "select" | "multiselect"
    })
export const Control = ({ type, ...others }: ControlProps) => {
  switch (type) {
    case "checkbox":
      return <Checkbox {...(others as CheckboxProps)} />
    case "search":
      return <SearchInput {...(others as SearchInputProps)} />
    case "select":
      return <Select {...(others as SelectProps)} />
    case "multiselect":
      return <Select {...(others as SelectProps)} multiple />
    default:
      return (
        <Input
          type={type as InputProps["type"]}
          {...(others as Omit<InputProps, "type">)}
        />
      )
  }
}
