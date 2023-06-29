import * as React from "react"

import { ControlProps } from "./utils"

// export type ControlStateProps = React.InputHTMLAttributes<
//   HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
// > & {
//   type: ControlType
// }

// todo: replace id prop with htmlFor to avoid multiple id confusion
export type ControlState = {
  hasDisplayValue: boolean
  handleChange: (displayValue: string) => void
}

export const useControlState = ({
  type,
  value,
  placeholder,
}: ControlProps): ControlState => {
  const [forcePlaceholder, setForcePlaceholder] = React.useState<boolean>()
  const [hasDisplayValue, setHasDisplayValue] = React.useState<boolean>(
    !!(value || placeholder)
  )

  const handleChange = React.useCallback(
    (displayValue: string) => {
      if (displayValue || placeholder || forcePlaceholder) {
        console.log("has value")
        setHasDisplayValue(true)
      } else {
        console.log("no value")
        setHasDisplayValue(false)
      }
    },
    [forcePlaceholder, placeholder]
  )

  React.useEffect(() => {
    const forced = forcePlaceholder ? " " : ""
    handleChange((value || placeholder || forced) as string)
  }, [value, placeholder, forcePlaceholder, handleChange])

  React.useEffect(() => {
    // These native input types need to always show the label in the "has value" state to avoid overlapping text.
    switch (type) {
      case "color":
      case "datetime-local":
      case "date":
      case "image":
      case "file":
      case "month":
      case "time":
      case "range":
      case "week":
        setForcePlaceholder(true)
        break
      default:
        setForcePlaceholder(false)
    }
  }, [type])

  return { hasDisplayValue, handleChange }
}
