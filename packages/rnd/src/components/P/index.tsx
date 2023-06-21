import classnames from "classnames"

import { BodyFont, Scale } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type PProps = React.HTMLAttributes<HTMLParagraphElement> & {
  font?: BodyFont
  scale?: Scale
  children: React.ReactNode
}

export const P = ({ font = "body1", scale = "md", children }: PProps) => {
  return <p className={classnames(styles.text, font, scale)}>{children}</p>
}
