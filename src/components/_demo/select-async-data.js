import { isUndefined } from '../../utils/utils'

const filterOptions = inputValue => {
  const options = [
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
  options.filter(i => {
    if (isUndefined(inputValue)) {
      return false
    }
    return i.label.toLowerCase().includes(inputValue.toLowerCase())
  })
}

const getOptions = () => {
  return [
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
}

export const loadOptionsPromise = inputValue => {
  console.log('promise options value', inputValue)
  new Promise(resolve => {
    setTimeout(() => {
      resolve(getOptions);
    }, 1000);
  })
}

const loadOptions = (inputValue, callback) => {
  console.log('callback options value', inputValue)
  setTimeout(() => {
    callback([
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
    ])
  }, 1000)
}

export default loadOptions
