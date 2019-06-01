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

export const isNumber = v => typeof v === 'number'

export const currencyToNumber = v => isNumber(v) ? v : Number(v.replace(/[^0-9.-]+/g,''))

export const numberToCurrency = value => {
  if (isUndefined(value)) {
    return '$0.00'
  }
  const replace = v => v.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  if (value < 0) {
    value = -1 * value
    return '-$' + replace(value)
  } else {
    return '$' + replace(value)
  }
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
