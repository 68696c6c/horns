import classnames from "classnames"

import { BodyFont, Scale } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type SpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  font?: BodyFont
  scale?: Scale
  children: React.ReactNode
}

export const Span = ({ font = "body1", scale = "md", children }: SpanProps) => {
  return (
    <span className={classnames(styles.text, font, scale)}>{children}</span>
  )
}
