import { IconType } from "react-icons"
import classnames from "classnames"

import * as Element from "../../theme/elements/icon"
import { Scale } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type SvgProps = {
  children: React.ReactNode
}

export const Svg = ({ children }: SvgProps) => {
  return <svg>{children}</svg>
}

export type IconProps = {
  SVG: IconType
  scale?: Scale
  colorway?: Element.ColorwayVariant
}
export const Icon = ({ SVG, scale = "md", colorway }: IconProps) => {
  return <SVG className={classnames(styles.icon, colorway, scale)} />
}
