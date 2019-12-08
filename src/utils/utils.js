export const ENV_DEV = 'DEV'
export const ENV_PROD = 'PROD'

export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const isUndefined = val => {
  return typeof val === 'undefined'
}

export const formatDate = dateString => {
  const date = new Date(Date.parse(dateString))
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

export const isArray = arr => {
  return arr.constructor === Array
}

export const isComponentType = (component, type) =>
  component.type.displayName === type ||
  component.type.name === type ||
  component.props.mdxType === type

export const isNumber = v => typeof v === 'number'

export const toNumber = v =>
  isNumber(v) ? v : Number(v.replace(/[^0-9.-]+/g, ''))

export const numberToCurrency = value => {
  if (isUndefined(value)) {
    return '$0.00'
  }
  // Round the number to a two decimal places and convert it to a string, then add commas to it.
  const replace = v => v.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  if (value < 0) {
    const val = -1 * value
    return `-$${replace(val)}`
  }
  return `$${replace(value)}`
}

export const arrayRemoveByValue = (arr, value) => {
  const index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

// Debounce a function call.
export const debounce = (fn, delay) => {
  let timer = null
  return function () {
    let context = this, args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

// Run a function first before debouncing any additional calls.
export const debounceFirst = (fn, delay) => {
  let timer = 0
  return function () {
    let context = this, args = arguments
    if ((timer + delay - Date.now()) < 0) {
      fn.apply(context, args)
      timer = Date.now();
    }
  }
}

export const getParentByClassName = (element, className) => {
  do {
    element = element.parentElement
  } while (element !== null && !element.classList.contains(className))
  return element
}

/**
 * Return a CSS property value as a unit-less integer.
 * @param cssVal
 * @returns {*}
 */
export const valueToInt = cssVal => {
  return cssVal
    .replace('px', '')
    .replace('rem', '')
    .replace('em', '')
    .replace('vw', '')
    .replace('vh', '')
}
