import * as React from "react"
import classnames from "classnames"

import { InputProps } from "./types"
import { Label } from "./Label"

import * as styles from "../../theme/theme.css"

export const Toggle = ({
  id,
  label,
  scale,
  hasError,
  // name,
  // value,
  // type,
  ...attrs
}: InputProps) => {
  return (
    <div className={classnames(styles.toggleContainer, scale)}>
      <input
        // type={type}
        id={id}
        {...attrs}
        // name={name}
        // value={value}
        className={classnames(styles.toggleInput)}
      />
      <Label
        htmlFor={id}
        scale={scale}
        hasError={hasError}
        // className={classnames(
        //   styles.label,
        //   scale,
        //   // getValueClass(hasValue),
        //   getErrorClass(hasError)
        //   // getIconLabelClass(hasIcons),
        //   // getControlLabelClass(isControlLabel)
        // )}
      >
        {label}
      </Label>
      {/* <Label htmlFor={id} scale={scale}> */}
      {/*  {label} */}
      {/* </Label> */}
    </div>
  )
}
