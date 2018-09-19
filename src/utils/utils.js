export const ENV_DEV = 'DEV'
export const ENV_PROD = 'PROD'

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
