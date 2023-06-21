import classnames from "classnames"

import * as Element from "../../theme/elements/anchor"
import { ActionProps } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ActionProps & {
    variant?: Element.AnchorVariant
  }

export const Anchor = ({
  children,
  Icon1,
  Icon2,
  variant,
  scale = "md",
  ...others
}: AnchorProps) => (
  <a {...others} className={classnames(styles.anchor, variant, scale)}>
    {Icon1 && <Icon1 />}
    {children}
    {Icon2 && <Icon2 />}
  </a>
)
