import classnames from "classnames"
import {
  MdCheckCircleOutline,
  MdClose,
  MdErrorOutline,
  MdInfoOutline,
  MdOutlineCircleNotifications,
  MdWarningAmber,
} from "react-icons/md"

import { Scale, Message, BodyFont } from "@horns/theme"

import { IconType } from "react-icons"
import { Button } from "../Button"
import { Icon } from "../Icon"
import * as styles from "../../theme.css"

export type NotificationProps = React.HTMLAttributes<HTMLDivElement> & {
  font?: Extract<BodyFont, "body1" | "body2" | "body3">
  scale?: Scale
  title?: React.ReactNode
  variant?: Message.Variant
}

export const Notification = ({
  font = "body1",
  scale = "md",
  title,
  variant,
  children,
  className,
  ...others
}: NotificationProps) => {
  let SVG: IconType
  switch (variant) {
    case "success":
      SVG = MdCheckCircleOutline
      break
    case "warning":
      SVG = MdWarningAmber
      break
    case "danger":
      SVG = MdErrorOutline
      break
    case "info":
      SVG = MdInfoOutline
      break
    default:
      SVG = MdOutlineCircleNotifications
  }
  return (
    <div
      className={classnames(
        styles.notification,
        font,
        variant,
        scale,
        className
      )}
      {...others}
    >
      <Icon SVG={SVG} />
      <div className={classnames(styles.notificationBody)}>
        {title && (
          <strong className={classnames(styles.notificationTitle)}>
            {title}
          </strong>
        )}
        {children}
      </div>
      <Button Icon1={MdClose} scale="min" />
    </div>
  )
}
