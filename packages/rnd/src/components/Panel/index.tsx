import * as React from "react"
import classnames from "classnames"
import { MdClose } from "react-icons/md"

import * as Element from "../../theme/elements/card"
import { Scale } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Element.Variant | "prominent"
  scale?: Scale
  headline?: React.ReactNode
}

export const Panel = ({
  children,
  variant,
  scale = "md",
  headline,
  ...others
}: PanelProps) => {
  return (
    <div className={classnames(styles.panel, variant, scale)} {...others}>
      {headline && (
        <header className={classnames(styles.panelHeader, variant, scale)}>
          {headline}
        </header>
      )}
      <div className={classnames(styles.panelBody, variant, scale)}>
        {children}
      </div>
    </div>
  )
}
