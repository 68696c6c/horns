import * as React from "react"
import classnames from "classnames"

import { MdClose } from "react-icons/md"
import * as Element from "../../theme/elements/notification"
import { Scale } from "../../theme/utils"
import * as styles from "../../theme/theme.css"
import { Button } from "../Button"
import { CloseButton } from "../IconButton"

export type NotificationProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Element.Variant
  scale?: Scale
  headline?: React.ReactNode
}

export const Notification = ({
  children,
  variant,
  scale = "md",
  headline,
  ...others
}: NotificationProps) => {
  return (
    <div
      className={classnames(styles.notification, variant, scale)}
      {...others}
    >
      <header className={classnames(styles.notificationHeadline)}>
        {headline && <div>{headline}</div>}
        <CloseButton scale={scale} />
        {/* <Button Icon1={MdClose} variant="background" scale="icon" /> */}
      </header>
      {children}
    </div>
  )
}
