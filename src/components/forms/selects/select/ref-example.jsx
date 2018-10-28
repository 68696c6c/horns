import React from 'react'
import SelectAsync from './async'
import Select from './select'

export const AsyncRefExample = ({ filterOptions }) => {
  const ref = React.createRef()
  return (
    <SelectAsync
      ref={ref}
      filterOptions={filterOptions}
      label="Ref Example (see console)"
      placeholder="Placeholder Text"
      name="placeholder"
      onChange={() => { console.log('selected value', ref.current.value) }}
    />
  )
}

export const SelectRefExample = props => {
  const ref = React.createRef()
  return (
    <Select
      ref={ref}
      label="Ref Example (see console)"
      placeholder="Placeholder Text"
      name="placeholder"
      onChange={() => { console.log('selected value', ref.current.value) }}
    >
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </Select>
  )
}


