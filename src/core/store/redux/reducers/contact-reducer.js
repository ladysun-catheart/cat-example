import {actions} from '../actions/contact-actions'
import {
  success,
  error,
  pending
} from './utils'
import {
  successMsg,
  errorMsg
} from '../../../literals/msgs'
import Error from '../../../config/error-code'

const initialState = {
  msg: null,
  pending: false,
  error: 0,
};

function reducer(state = initialState, {type, payload}) {
  let nextState = {}
  switch(type) {
    case success(actions.SEND_MESSAGE):
    nextState = {...state, msg: {...successMsg}, pending: false}
    break
    case error(actions.SEND_MESSAGE):
    nextState = {...state, msg: {...errorMsg}, pending: false}
    break
    case pending(actions.SEND_MESSAGE):
    nextState = {...state, pending: true, error: 0}
    break
    case actions.CLEAN_CONTACT:
    nextState = {...state, msg: null, error: 0}
    break
    default:
    nextState = {...state}
  }
  return nextState;
}

export default reducer;
