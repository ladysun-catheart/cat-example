import { actions } from './../actions/cat-actions';
import {
  success,
  error,
  pending
} from './utils'
import Error from '../../../config/error-code'

const initialState = {
  actual: null,
  page: 1,
  rows: 6,
  catList: [],
  catTotalStored: 0,
  catSearch: '',
  pending: false,
  error: null,
  created: false,
  updated: false,
  deleted: false
};

function reducer(state = initialState, { type, payload }) {
  let nextState = {}
  switch (type) {

    //GET_CAT_LIST
    case success(actions.GET_CAT_LIST):
      nextState = { ...state, catList: payload.res, page: payload.page, rows: payload.rows, catTotalStored: payload.total, pending: false }
      break;
    case error(actions.GET_CAT_LIST):
      nextState = { ...state, catList: [], catTotalStored: 0, page: 1, rows: 10, pending: false, error: payload.err.code };
      break;
    case pending(actions.GET_CAT_LIST):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //GET_CAT
    case success(actions.GET_CAT):
      nextState = { ...state, cat: payload.res, pending: false }
      break;
    case error(actions.GET_CAT):
      nextState = { ...state, cat: null, pending: false, error: payload.err.code };
      break;
    case pending(actions.GET_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //DELETE_CAT
    case success(actions.DELETE_CAT):
      nextState = { ...state, pending: false, deleted: true }
      break;
    case error(actions.DELETE_CAT):
      nextState = { ...state, pending: false, error: payload.err.code };
      break;
    case pending(actions.DELETE_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //CREATE_CAT
    case success(actions.CREATE_CAT):
      nextState = { ...state, pending: false, created: true, cat: payload.res }
      break;
    case error(actions.CREATE_CAT):
      nextState = { ...state, pending: false, error: Error.CAT_NOT_CREATED };
      break;
    case pending(actions.CREATE_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //UPDATE_CAT
    case success(actions.UPDATE_CAT):
      nextState = { ...state, pending: false, updated: true, cat: payload.res }
      break;
    case error(actions.UPDATE_CAT):
      nextState = { ...state, pending: false, error: Error.CAT_NOT_UPDATED };
      break;
    case pending(actions.UPDATE_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //GET_CAT_LIST_FILTER
    case success(actions.GET_CAT_LIST_FILTER):
      nextState = { ...state, catList: payload.res, page: payload.page, rows: payload.rows, catTotalStored: payload.total, pending: false }
      break;
    case error(actions.GET_CAT_LIST_FILTER):
      nextState = { ...state, catList: [], catTotalStored: 0, page: 1, rows: 10, pending: false, error: payload.err.code };
      break;
    case pending(actions.GET_CAT_LIST_FILTER):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //UPDATE_CAT_CRITERIA_SEARCH
    //CLEAN
    case actions.UPDATE_CAT_CRITERIA_SEARCH:
    case actions.CLEAN_CAT:
      nextState = { ...state, ...payload }
      break;

    //DEFAULT
    default:
      nextState = { ...state };

  }
  return nextState;
}

export default reducer;
export {
  initialState,
  reducer
}