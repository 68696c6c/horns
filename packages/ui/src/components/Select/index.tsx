import classnames from "classnames"

import {
  getVariantClass,
  Layout,
  SelectProps,
  useControlState,
} from "../Controls"
import { Options } from "./Options"
import * as styles from "../../theme.css"

export const Select = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  message,
  disabled,
  value,
  placeholder,
  onChange,
  options,
  ...others
}: SelectProps) => {
  const variantClass = getVariantClass("", hasError, disabled)
  const { hasDisplayValue, handleChange } = useControlState({
    type: "select",
    value,
  })
  return (
    <Layout
      id={id}
      name={name}
      label={label}
      scale={scale}
      hasError={hasError}
      message={message}
      hasValue={hasDisplayValue}
      className={styles.controlSelectContainer}
    >
      <select
        {...others}
        id={id}
        placeholder={placeholder}
        className={classnames(
          styles.controlInput,
          styles.controlSelect,
          variantClass,
          scale
        )}
        onChange={(e) => {
          handleChange(e.target.value)
          if (onChange) onChange(e)
        }}
      >
        <Options placeholder={placeholder} options={options} />
      </select>
    </Layout>
  )
}
