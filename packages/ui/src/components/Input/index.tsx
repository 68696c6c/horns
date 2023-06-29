import classnames from "classnames"

import {
  getVariantClass,
  InputProps,
  Layout,
  useControlState,
} from "../Controls"
import * as styles from "../../theme.css"

export const Input = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  message,
  disabled,
  type = "text",
  value,
  placeholder,
  onChange,
  ...others
}: InputProps) => {
  const variantClass = getVariantClass("", hasError, disabled)
  const { hasDisplayValue, handleChange } = useControlState({
    type,
    value,
    placeholder,
  })
  return (
    <Layout
      id={id}
      name={name}
      label={label}
      scale={scale}
      message={message}
      hasValue={hasDisplayValue}
      hasError={hasError}
      disabled={disabled}
    >
      <input
        {...others}
        value={value}
        placeholder={placeholder}
        className={classnames(styles.controlInput, variantClass, scale)}
        type={type}
        onChange={(e) => {
          handleChange(e.target.value)
          if (onChange) onChange(e)
        }}
        disabled={disabled}
      />
    </Layout>
  )
}
