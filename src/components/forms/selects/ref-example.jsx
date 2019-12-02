import React from 'react'

import Select from './select'

const SelectRefExample = props => {
  const ref = React.createRef()
  return (
    <Select
      {...props}
      ref={ref}
      onChange={() => { console.log('selected value', ref.current.value) }}
    >
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </Select>
  )
}

export default SelectRefExample
