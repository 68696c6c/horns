import {
  OptionsControlProps,
  Toggle,
  ToggleLayout,
  BaseToggleProps,
} from "../Controls"

export type CheckboxProps = BaseToggleProps & OptionsControlProps

export const Checkbox = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  options,
}: CheckboxProps) => (
  <ToggleLayout
    id={id}
    name={name}
    label={label}
    scale={scale}
    hasError={hasError}
    options={options}
    renderToggle={(optionProps) => <Toggle type="checkbox" {...optionProps} />}
  />
)
