import classnames from "classnames"
import { IconType } from "react-icons"

import { Button as ThemeButton } from "@horns/theme"

import { getVariantClass } from "../Controls"
import * as styles from "../../theme.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  hasError?: boolean
  Icon1?: IconType
  Icon2?: IconType
  scale?: ThemeButton.ScaleVariant
  variant?: ThemeButton.Variant
}

export const Button = ({
  disabled,
  hasError,
  Icon1,
  Icon2,
  scale = "min",
  variant,
  children,
  className,
  ...others
}: ButtonProps) => (
  <button
    className={classnames(
      styles.button,
      scale,
      getVariantClass(variant, hasError, disabled),
      className
    )}
    {...others}
    disabled={disabled}
  >
    {Icon1 && <Icon1 />}
    {children}
    {Icon2 && <Icon2 />}
  </button>
)
