import classnames from "classnames"
import { IconType } from "react-icons"

import { BaseControlProps, getValueClass, getVariantClass } from "./utils"
import { Icon } from "../Icon"
import { Label, Span } from "../Text"
import * as styles from "../../theme.css"

export type LayoutProps = React.HTMLAttributes<HTMLDivElement> &
  BaseControlProps & {
    hasValue?: boolean
    Icon?: IconType
    ActionIcon?: IconType
    handleAction?: React.MouseEventHandler<HTMLButtonElement>
  }

export const Layout = ({
  id: idProp,
  name,
  disabled,
  hasError,
  label,
  message,
  scale = "md",
  hasValue,
  Icon: IconProp,
  ActionIcon,
  // TODO:
  // handleAction,
  children,
  className,
}: LayoutProps) => {
  const id = idProp || name
  return (
    <div
      className={classnames(
        styles.controlContainer,
        getValueClass(hasValue),
        scale,
        className
      )}
    >
      <div
        className={classnames(
          styles.control,
          getVariantClass("", hasError, disabled),
          scale
        )}
      >
        {IconProp && <Icon SVG={IconProp} />}
        <div className={classnames(styles.controlLabelContainer, scale)}>
          <Label htmlFor={id} scale={scale} className={styles.controlLabel}>
            {label}
          </Label>
          {children}
        </div>
        {ActionIcon && <Icon SVG={ActionIcon} />}
      </div>
      {message && <Span>{message}</Span>}
    </div>
  )
}
