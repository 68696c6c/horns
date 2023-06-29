import classnames from "classnames"

import { Scale, Surface } from "@horns/theme"

import * as styles from "../../theme.css"

export type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
  headline?: React.ReactNode
  scale?: Scale
  variant?: Surface.Variant
}

export const Panel = ({
  headline,
  scale = "md",
  variant,
  children,
  className,
  ...others
}: PanelProps) => (
  <div
    className={classnames(styles.panel, variant, scale, className)}
    {...others}
  >
    <header className={classnames(styles.panelHeader, variant, scale)}>
      {headline}
    </header>
    <div className={classnames(styles.panelBody, variant, scale)}>
      {children}
    </div>
  </div>
)
