import { actions } from './../actions/cat-actions';
import {
  success,
  error,
  pending
} from './utils'
import * as Error from '../../../config/error-code'

const initialState = {
  catSelected: null,
  page: 1,
  rows: 10,
  catList: [],
  catTotalStored: 0,
  pending: false,
  error: 0,
  created: false,
  updated: false,
  deleted: false
};

function reducer(state = initialState, { cat, catList, catTotalStored, page, rows }) {
  let nextState = {}
  switch (type) {

    //GET_ALL_CATS
    case success(actions.GET_ALL_CATS):
      nextState = { ...state, catList, catTotalStored, page, rows, pending: false }
      break;
    case error(actions.GET_ALL_CATS):
      nextState = { ...state, catList: [], catTotalStored: 0, page: 1, rows: 10, pending: false, error: Error.CAT_LIST_NOT_FETCHED };
      break;
    case pending(actions.GET_ALL_CATS):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //GET_CAT
    case success(actions.GET_CAT):
      nextState = { ...state, cat, pending: false }
      break;
    case error(actions.GET_CAT):
      nextState = { ...state, cat: {}, pending: false, error: Error.CAT_NOT_FETCHED };
      break;
    case pending(actions.GET_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //DELETE_CAT
    case success(actions.DELETE_CAT):
      nextState = { ...state, pending: false, deleted: true }
      break;
    case error(actions.DELETE_CAT):
      nextState = { ...state, pending: false, error: Error.CAT_NOT_DELETED };
      break;
    case pending(actions.DELETE_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //CREATE_CAT
    case success(actions.CREATE_CAT):
      nextState = { ...state, pending: false, created: true }
      break;
    case error(actions.CREATE_CAT):
      nextState = { ...state, pending: false, error: Error.CAT_NOT_CREATED };
      break;
    case pending(actions.CREATE_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //UPDATE_CAT
    case success(actions.UPDATE_CAT):
      nextState = { ...state, pending: false, updated: true }
      break;
    case error(actions.UPDATE_CAT):
      nextState = { ...state, pending: false, error: Error.CAT_NOT_UPDATED };
      break;
    case pending(actions.UPDATE_CAT):
      nextState = { ...state, pending: true, error: 0 };
      break;

    //CLEAN
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