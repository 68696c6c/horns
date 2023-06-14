import * as React from "react"

import * as FormControl from "../FormControl"
import { Toggle } from "../FormControl/Toggle"

export type RadioProps = Omit<FormControl.ToggleProps, "type">

export const Radio = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  options,
  ...others
}: RadioProps) => {
  return (
    <FormControl.ToggleGroupLayout
      id={id}
      type="radio"
      name={name}
      label={label}
      scale={scale}
      hasError={hasError}
      options={options}
      renderOption={(optionProps) => <Toggle type="radio" {...optionProps} />}
    />
  )
}
