const success = action => `${action}_FULFILLED`
const error = action => `${action}_REJECTED`
const pending = action => `${action}_PENDING`

export {
  success,
  error,
  pending
}