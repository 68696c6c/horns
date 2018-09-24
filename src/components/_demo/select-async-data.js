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

export const filterOptions = (value, callback) => {
  setTimeout(() => {
    if (value === '') {
      return callback(OPTIONS)
    } else {
      const result = OPTIONS.filter(option => {
        return option.label.toLowerCase().includes(value.toLowerCase())
      })
      callback(result)
    }
  }, 1000)
}

const loadOptions = (value, callback) => {
  setTimeout(() => {
    callback(OPTIONS)
  }, 1000)
}

export default loadOptions
