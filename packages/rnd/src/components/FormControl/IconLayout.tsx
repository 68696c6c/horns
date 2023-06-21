import * as React from "react"
import { IconType } from "react-icons"
import classnames from "classnames"

import { FormControlProps, InputProps, SelectProps } from "./types"
import { Label } from "./Label"
import { Message } from "./Message"

import { getErrorClass, getValueClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type IconLayoutProps = FormControlProps<InputProps | SelectProps> & {
  Icon1?: IconType
  Icon2?: IconType
  IconAction?: IconType
  handleAction?: React.MouseEventHandler<HTMLButtonElement>
}
export const IconLayout = ({
  id: idProp,
  label,
  name,
  message,
  hasError,
  className,
  scale = "md",
  Icon1,
  Icon2,
  children,
  disabled,
  hasValue,
  ...others
}: IconLayoutProps) => {
  const id = idProp || name
  const errorClass = getErrorClass(hasError)
  const disabledClass = disabled ? "disabled" : ""
  return (
    <div
      className={classnames(
        styles.controlContainer,
        getValueClass(hasValue),
        className,
        errorClass,
        scale,
        disabledClass
      )}
    >
      <div
        className={classnames(
          styles.control,
          // styles.controlContainerIcons,
          className,
          errorClass,
          scale
        )}
      >
        {Icon1 && <Icon1 />}
        <div className={classnames(styles.controlLabelContainer, scale)}>
          <Label
            htmlFor={id}
            hasError={hasError}
            hasValue={hasValue}
            scale={scale}
            hasIcons
            isControlLabel
          >
            {label}
          </Label>
          {children}
        </div>
        {Icon2 && <Icon2 />}
      </div>
      {message && (
        <Message className={className} hasError={hasError}>
          {message}
        </Message>
      )}
    </div>
  )
}
