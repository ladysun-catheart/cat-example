import Cat, {CatSex} from './../../../model/Cat';
import CatActions from './../actions/cat-actions';

const initialState = {
  catSelected: null,
  catListFinded: [],
  catTotalStored: 0,
};

function reducer(state = initialState, {type, cat, catTotalStored, catListFinded}) {
  let nextState = {};
  switch(type) {
    case CatActions.actions.SUCCESS_SELECT_CAT:
      nextState = {...state, cat};
      break;
    case CatActions.actions.SUCCESS_FILL_CAT_LIST:
      nextState = {...state, catTotalStored, catListFinded};
      break;
    default:
      nextState = {...state};
  }
  return nextState;
}

export default reducer;