import * as React from "react"
import classnames from "classnames"

import * as FormControl from "../FormControl"
import { useFormControl } from "../FormControl/state"

import { getErrorClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export const Input = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  message,
  disabled,
  type,
  value,
  placeholder,
  onChange,
  ...others
}: FormControl.InputProps) => {
  const errorClass = getErrorClass(hasError)
  const { hasDisplayValue, handleChange } = useFormControl({
    type,
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
      // Icon1={MdAccountBox}
      // Icon2={RxHeartFilled}
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
        type={type}
        onChange={(e) => {
          handleChange(e.target.value)
          if (onChange) onChange(e)
        }}
      />
    </FormControl.IconLayout>
  )
  // const errorClass = getErrorClass(hasError)
  // const { hasDisplayValue, handleChange } = useFormControl({
  //   type,
  //   value,
  //   placeholder,
  // })
  // return (
  //   <FormControl.DefaultLayout
  //     id={id}
  //     name={name}
  //     label={label}
  //     scale={scale}
  //     message={message}
  //     hasError={hasError}
  //     hasValue={hasDisplayValue}
  //     disabled={disabled}
  //   >
  //     <input
  //       {...others}
  //       type={type}
  //       value={value}
  //       placeholder={placeholder}
  //       className={classnames(
  //         styles.control,
  //         styles.controlContainerDefault,
  //         scale,
  //         errorClass,
  //         disabled
  //       )}
  //       disabled={disabled}
  //       onChange={(e) => {
  //         handleChange(e.target.value)
  //         if (onChange) onChange(e)
  //       }}
  //     />
  //   </FormControl.DefaultLayout>
  // )
}
