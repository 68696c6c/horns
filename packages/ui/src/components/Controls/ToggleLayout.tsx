import classnames from "classnames"

import { BaseControlProps, OptionsControlProps, BaseToggleProps } from "./utils"
import { Label, Span } from "../Text"
import * as styles from "../../theme.css"

export type ToggleLayoutProps = React.HTMLAttributes<HTMLDivElement> &
  BaseControlProps &
  OptionsControlProps & {
    renderToggle: (p: BaseToggleProps & { key: React.Key }) => React.ReactNode
  }

export const ToggleLayout = ({
  id: idProp,
  label: groupLabel,
  scale,
  children,
  message,
  hasError,
  disabled,
  options,
  name,
  renderToggle,
  className,
}: ToggleLayoutProps) => {
  const id = idProp || name
  return (
    <div
      className={classnames(
        styles.toggleGroupContainer,
        // getVariantClass("", hasError, disabled),
        scale,
        className
      )}
    >
      {children}
      {groupLabel && <Label scale={scale}>{groupLabel}</Label>}
      {options &&
        options.map(({ label, value }) => {
          const optionId = `${id}-${value}`
          return renderToggle({
            key: optionId,
            id: optionId,
            name,
            label,
            value,
            scale,
            hasError,
            disabled,
          })
        })}
      {message && <Span>{message}</Span>}
    </div>
  )
}
