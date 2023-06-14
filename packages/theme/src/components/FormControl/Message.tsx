import * as React from "react"
import classnames from "classnames"

import { ControlTextProps } from "./types"

import { getErrorClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type MessageProps = ControlTextProps &
  React.HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode
  }

export const Message = ({ children, hasError, ...others }: MessageProps) => {
  const errorClass = getErrorClass(hasError)
  return (
    <span className={classnames(styles.message, errorClass)} {...others}>
      {children}
    </span>
  )
}
