import classnames from "classnames"

import { Label } from "../Text"
import { BaseToggleProps } from "./utils"
import * as styles from "../../theme.css"

export type ToggleProps = BaseToggleProps & {
  type: "checkbox" | "radio"
}

export const Toggle = ({ id, label, scale = "md", ...others }: ToggleProps) => (
  <div className={classnames(styles.toggleContainer, scale)}>
    <input {...others} id={id} className={classnames(styles.toggleInput)} />
    <Label htmlFor={id} scale={scale}>
      {label}
    </Label>
  </div>
)
