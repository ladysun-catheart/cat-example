// import CatApi from './../../../apis/cat-api';

const actions = {
  SUCCESS_SELECT_CAT: 'SUCCESS_SELECT_CATTCH_CAT',
  SUCCESS_FILL_CAT_LIST: 'SUCCESS_FILL_CAT_LIST',
};

const catSelected = (cat) => ({
  type: actions.SUCCESS_SELECT_CAT,
  cat
});

const persistCatList = (catTotalStored, catListFinded) => ({
  type: actions.SUCCESS_FILL_CAT_LIST,
  catTotalStored,
  catListFinded
});

/* const selectCat = (idCat) => (dispatch) => CatApi.fetchCatById(idCat)
  .then(cat => dispatch(catSelected(cat)))
  .catch(err => console.error('error'));

const fillCatList = () => (dispatch) => CatApi.fetchCatList()
  .then(catList => dispatch(saveCatList(catList)))
  .catch(err => console.error('error')); */

const CatActions = {
  actions,
  catSelected,
  persistCatList
};

export default CatActions;