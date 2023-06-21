import * as React from "react"
import classnames from "classnames"
import { MdClose } from "react-icons/md"

import * as Element from "../../theme/elements/card"
import { Scale } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

import { Button } from "../Button"

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Element.Variant
  scale?: Scale
}

export const Card = ({
  children,
  variant,
  scale = "md",
  ...others
}: CardProps) => {
  return (
    <div className={classnames(styles.card, variant, scale)} {...others}>
      {children}
    </div>
  )
}
