import * as React from "react"
import classnames from "classnames"

import { ControlTextProps } from "./types"

import { getErrorClass, getValueClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type LabelProps = ControlTextProps &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode
    hasValue?: boolean
    hasIcons?: boolean
    isControlLabel?: boolean
  }

export const Label = ({
  children,
  hasError,
  hasValue,
  scale,
  hasIcons,
  isControlLabel,
  ...others
}: LabelProps) => {
  console.log("label has value: ", hasValue)
  return (
    <label
      className={classnames(
        // styles.label,
        styles.label,
        scale,
        getValueClass(hasValue),
        getErrorClass(hasError),
        // getIconLabelClass(hasIcons),
        // getControlLabelClass(isControlLabel)
        isControlLabel ? styles.controlLabel : null
      )}
      {...others}
    >
      {children}
    </label>
  )
}
