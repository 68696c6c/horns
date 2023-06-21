import { MdClose } from "react-icons/md"
import * as React from "react"
import classnames from "classnames"
import { IconType } from "react-icons"
import { BiX } from "react-icons/bi"
import { Button } from "../Button"
import * as styles from "../../theme/theme.css"
import { getErrorClass, Scale } from "../../theme/utils"
import { Icon } from "../Icon"
import * as Element from "../../theme/elements/icon"

export type IconButtonProps = {
  SVG?: IconType
  colorway?: Element.ColorwayVariant
  disabled?: boolean
  hasError?: boolean
  scale?: Scale
}

export const IconButton = ({
  SVG,
  colorway,
  hasError,
  scale = "md",
  disabled,
  ...others
}: IconButtonProps) => {
  return (
    <button
      className={classnames(
        styles.iconButton,
        colorway,
        scale,
        getErrorClass(hasError)
      )}
      {...others}
      disabled={disabled}
    >
      {SVG && <Icon SVG={SVG} scale={scale} colorway={colorway} />}
    </button>
  )
}

export const CloseButton = ({ SVG = BiX, ...props }: IconButtonProps) => (
  <Icon SVG={SVG} {...props} />
)
