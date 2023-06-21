import * as React from "react"

import * as FormControl from "../FormControl"
import { Toggle } from "../FormControl/Toggle"

export type CheckboxProps = Omit<FormControl.ToggleProps, "type">

export const Checkbox = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  options,
  ...others
}: CheckboxProps) => {
  return (
    <FormControl.ToggleGroupLayout
      id={id}
      type="checkbox"
      name={name}
      label={label}
      scale={scale}
      hasError={hasError}
      options={options}
      renderOption={(optionProps) => (
        <Toggle type="checkbox" {...optionProps} />
      )}
    />
  )
}
