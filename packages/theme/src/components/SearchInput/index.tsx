import * as React from "react"
import classnames from "classnames"
import { RxEnvelopeClosed, RxHeartFilled } from "react-icons/rx"
import { MdMailOutline, MdAccountBox } from "react-icons/md"

import * as FormControl from "../FormControl"
import { useFormControl } from "../FormControl/state"

import { getErrorClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export type SearchInputProps = Omit<FormControl.InputProps, "type">
export const SearchInput = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  message,
  // type,
  value,
  placeholder,
  onChange,
  ...others
}: SearchInputProps) => {
  const errorClass = getErrorClass(hasError)
  const { hasDisplayValue, handleChange } = useFormControl({
    type: "search",
    value,
    placeholder,
  })
  return (
    <FormControl.IconLayout
      id={id}
      name={name}
      label={label}
      scale={scale}
      hasError={hasError}
      message={message}
      Icon1={MdAccountBox}
      Icon2={RxHeartFilled}
      hasValue={hasDisplayValue}
    >
      <input
        {...others}
        value={value}
        placeholder={placeholder}
        className={classnames(
          styles.controlInput,
          // styles.controlIconInput,
          errorClass,
          scale
        )}
        type="search"
        onChange={(e) => {
          handleChange(e.target.value)
          if (onChange) onChange(e)
        }}
      />
    </FormControl.IconLayout>
  )
}
