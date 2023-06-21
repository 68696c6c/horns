import * as React from "react"
import classnames from "classnames"

import { MdAccountBox } from "react-icons/md"
import { RxHeartFilled } from "react-icons/rx"
import * as FormControl from "../FormControl"
import { useFormControl } from "../FormControl/state"
import { Options } from "./Options"

import { getErrorClass } from "../../theme/utils"
import * as styles from "../../theme/theme.css"

export const Select = ({
  id,
  name,
  label,
  hasError,
  scale = "md",
  message,
  disabled,
  // type,
  value,
  placeholder,
  onChange,
  options,
  ...others
}: FormControl.SelectProps) => {
  const errorClass = getErrorClass(hasError)
  const { hasDisplayValue, handleChange } = useFormControl({
    type: "select",
    value,
  })
  return (
    <FormControl.IconLayout
      id={id}
      name={name}
      label={label}
      scale={scale}
      hasError={hasError}
      message={message}
      hasValue={hasDisplayValue}
      // Icon1={MdAccountBox}
      // Icon2={RxHeartFilled}
      // hasValue={hasDisplayValue}
    >
      <select
        {...others}
        // value={value}
        placeholder={placeholder}
        className={classnames(
          styles.controlInput,
          // styles.controlIconInput,
          styles.controlSelect,
          errorClass,
          scale
        )}
        onChange={(e) => {
          handleChange(e.target.value)
          if (onChange) onChange(e)
        }}
      >
        <Options placeholder={placeholder} options={options} />
      </select>
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
