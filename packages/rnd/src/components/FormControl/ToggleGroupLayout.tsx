import * as React from "react"
import classnames from "classnames"

import {
  ControlProps,
  FormControlProps,
  Option,
  OptionProps,
  OptionsLayoutProps,
  ToggleProps,
} from "./types"
import { Label } from "./Label"
import { Message } from "./Message"

import * as styles from "../../theme/theme.css"

// export type ToggleGroupLayoutProps = ControlProps &
//   ToggleProps & {
//     label?: string
//     options: Option[]
//     renderOption: (p: OptionProps) => React.ReactNode
//     children: React.ReactNode
//   }
export const ToggleGroupLayout = ({
  id: idProp,
  label: groupLabel,
  scale,
  children,
  message,
  hasError,
  options,
  name,
  renderOption,
  className,
}: FormControlProps<ToggleProps> & OptionsLayoutProps) => {
  const id = idProp || name
  const errorClass = hasError ? "error" : ""
  return (
    <div
      className={classnames(
        // styles.controlContainer,
        styles.toggleGroupContainer,
        className,
        errorClass,
        scale
      )}
    >
      {children}
      {groupLabel && (
        <Label
          scale={scale}
          hasError={hasError}
          // className={classnames(
          //   styles.label,
          //   scale,
          //   // getValueClass(hasValue),
          //   getErrorClass(hasError)
          //   // getIconLabelClass(hasIcons),
          //   // getControlLabelClass(isControlLabel)
          // )}
        >
          {groupLabel}
        </Label>
      )}
      {options &&
        options.map(({ label, value }) => {
          const optionId = `${id}-${value}`
          return renderOption({
            // ...others,
            key: optionId,
            id: optionId,
            name,
            label,
            value,
            scale,
          })
        })}
      {message && <Message hasError={hasError}>{message}</Message>}
    </div>
  )
}
