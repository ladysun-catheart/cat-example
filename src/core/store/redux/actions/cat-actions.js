import CatApi from './../../../apis/cat-api';

const actions = {
  SUCCESS_SELECT_CAT: 'SUCCESS_SELECT_CATTCH_CAT',
  SUCCESS_FILL_CAT_LIST: 'SUCCESS_FILL_CAT_LIST',
};

const successSelectCat = (cat) => ({
  type: actions.SUCCESS_SELECT_CAT,
  cat
});

const successCatList = (catList) => ({
  typw: actions.SUCCESS_FILL_CAT_LIST,
  catList
});

const selectCat = (idCat) => (dispatch) => CatApi.fetchCatById(idCat)
  .then(cat => dispatch(successSelectCat(cat)))
  .catch(err => console.error('error'));

const fillCatList = () => (dispatch) => CatApi.fetchCatList()
  .then(catList => dispatch(successCatList(catList)))
  .catch(err => console.error('error'));

const CatActions = {
  actions,
  selectCat,
  fillCatList
};

export default CatActions;