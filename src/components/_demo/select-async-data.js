const OPTIONS = [
  {
    label: 'One',
    value: '1',
  },
  {
    label: 'Two',
    value: '2',
  },
  {
    label: 'Three',
    value: '3',
  },
]

export const filterOptions = value => {
  OPTIONS.filter(option => {
    return option.value === value
  })
}

const loadOptions = (value, callback) => {
  setTimeout(() => {
    callback(OPTIONS)
  }, 1000)
}

export default loadOptions
