import * as React from "react"
import classnames from "classnames"

import { ButtonVariant } from "../../theme/elements"
import { ActionProps, getErrorClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ActionProps & {
    variant?: ButtonVariant
    hasError?: boolean
  }

export const Button = ({
  children,
  Icon1,
  Icon2,
  variant,
  scale = "md",
  disabled,
  hasError,
  ...others
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        styles.button,
        variant,
        scale,
        getErrorClass(hasError)
      )}
      {...others}
      disabled={disabled}
    >
      {Icon1 && <Icon1 />}
      {children}
      {Icon2 && <Icon2 />}
    </button>
  )
}
