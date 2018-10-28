const OPTIONS = [
  {
    label: 'One',
    value: 1,
  },
  {
    label: 'Two',
    value: 2,
  },
  {
    label: 'Three',
    value: 3,
  },
]

const filterOptions = (value, callback) => {
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

export default filterOptions

const STRING_OPTIONS = [
  {
    label: 'First Option',
    value: '40294d64-2d44-4831-a364-c5b189bf0a9e',
  },
  {
    label: 'Second Option',
    value: '55e6ffbe-c034-4755-b6c0-86c6a9bada62',
  },
  {
    label: 'Third Option',
    value: '2402ef98-1f67-4834-8b89-7ae8ede7b8bf',
  },
]

export const filterStringOptions = (value, callback) => {
  setTimeout(() => {
    if (value === '') {
      return callback(STRING_OPTIONS)
    } else {
      const result = STRING_OPTIONS.filter(option => {
        return option.label.toLowerCase().includes(value.toLowerCase())
      })
      callback(result)
    }
  }, 1000)
}
