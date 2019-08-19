import Cat from './../../../model/Cat';
import CatActions from './../actions/cat-actions';

const initialState = {
  catSelected: new Cat(),
  catListFinded: [],
  catTotalStored: undefined
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