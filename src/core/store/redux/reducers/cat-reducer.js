import Cat, {CatSex} from './../../../model/Cat';
import CatActions from './../actions/cat-actions';

const initialState = {
  catSelected: null,
  page: 1,
  rows: 10,
  catListFinded: [],
  catTotalStored: 0,
};

function reducer(state = initialState, {type, cat, catTotalStored, catListFinded, page, rows}) {
  let nextState = {};
  switch(type) {
    case CatActions.actions.SUCCESS_SELECT_CAT:
      nextState = {...state, catSelected: cat};
      break;
    case CatActions.actions.SUCCESS_FILL_CAT_LIST:
      nextState = {...state, catTotalStored, catListFinded, page, rows};
      break;
    default:
      nextState = {...state};
  }
  return nextState;
}

export default reducer;