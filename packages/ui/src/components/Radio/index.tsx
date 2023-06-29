import {
  OptionsControlProps,
  Toggle,
  ToggleLayout,
  BaseToggleProps,
} from "../Controls"

export type RadioProps = BaseToggleProps & OptionsControlProps

export const Radio = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  options,
}: RadioProps) => (
  <ToggleLayout
    id={id}
    name={name}
    label={label}
    scale={scale}
    hasError={hasError}
    options={options}
    renderToggle={(optionProps) => <Toggle type="radio" {...optionProps} />}
  />
)
