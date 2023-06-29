import { OptionsControlProps } from "../Controls"

export type OptionsProps = OptionsControlProps & {
  placeholder?: string
}

export const Options = ({ placeholder, options }: OptionsProps) => {
  const renderOptions = () =>
    options && (
      <>
        {/* Since selects default to the first enabled option, this empty option is used to create an invisible default selection. */}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option style={{ display: "none" }} />
        {options.map(({ label, value }) => (
          <option key={`${label}-${value}`} value={value}>
            {label}
          </option>
        ))}
      </>
    )
  if (placeholder) {
    return <optgroup label={placeholder}>{renderOptions()}</optgroup>
  }
  return <>{renderOptions()}</>
}
