import classnames from "classnames"

import { Scale, Surface } from "@horns/theme"

import * as styles from "../../theme.css"

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  scale?: Scale
  variant?: Exclude<Surface.Variant, "prominent" | "prominentAlt">
}

export const Card = ({
  scale = "md",
  variant,
  children,
  className,
  ...others
}: CardProps) => (
  <div
    className={classnames(styles.card, variant, scale, className)}
    {...others}
  >
    {children}
  </div>
)
