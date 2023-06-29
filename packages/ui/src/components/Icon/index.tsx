import classnames from "classnames"
import { IconType } from "react-icons"

import { Icon as ThemeIcon } from "@horns/theme"

import * as styles from "../../theme.css"

export type IconProps = React.SVGAttributes<SVGElement> & {
  SVG: IconType
  variant?: ThemeIcon.Variant
}

export const Icon = ({ SVG, variant, className, ...attrs }: IconProps) => (
  <SVG className={classnames(styles.icon, variant, className)} {...attrs} />
)
