import classnames from "classnames"
import { IconType } from "react-icons"

import { Anchor as ThemeAnchor, Scale } from "@horns/theme"

import * as styles from "../../theme.css"

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  Icon1?: IconType
  Icon2?: IconType
  scale?: Scale
  variant?: ThemeAnchor.Variant
}

export const Anchor = ({
  Icon1,
  Icon2,
  scale = "md",
  variant,
  children,
  className,
  ...others
}: AnchorProps) => (
  <a
    className={classnames(styles.anchor, variant, scale, className)}
    {...others}
  >
    {Icon1 && <Icon1 />}
    {children}
    {Icon2 && <Icon2 />}
  </a>
)
