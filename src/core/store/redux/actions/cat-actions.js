import CatApi from './../../../apis/cat-api';

const actions = {
  SUCCESS_SELECT_CAT: 'SUCCESS_SELECT_CATTCH_CAT',
  SUCCESS_FILL_CAT_LIST: 'SUCCESS_FILL_CAT_LIST',
  AFTER_INSERTED_CAT: 'INSERTED_CAT',
};

const catSelected = (cat) => ({
  type: actions.SUCCESS_SELECT_CAT,
  cat
});

const persistCatList = (catTotalStored, catListFinded, page, rows) => ({
  type: actions.SUCCESS_FILL_CAT_LIST,
  catTotalStored,
  catListFinded,
  page,
  rows
});

const insertCat = (newCat, successHandler, errorHandler, finallyHandler) => (dispatch) => (
  CatApi.createCat(newCat)
    .then(() => CatApi.fetchCatList(1, 10))
    .then(res => {
      dispatch(persistCatList(res.data.catTotal, res.data.catList, 1, 10));
      dispatch(catSelected(newCat));
      successHandler();
    })
    .catch(() => errorHandler())
    .finally(() => finallyHandler())
);

const updateCat = (newCat, successHandler, errorHandler, finallyHandler) => (dispatch) => (
  CatApi.updateCat(newCat)
    .then(() => CatApi.fetchCatList(1, 10))
    .then(res => {
      dispatch(persistCatList(res.data.catTotal, res.data.catList, 1, 10));
      dispatch(catSelected(newCat));
      successHandler();
    })
    .catch(() => errorHandler())
    .finally(() => finallyHandler())
);

const CatActions = {
  actions,
  catSelected,
  persistCatList,
  insertCat,
  updateCat
};

export default CatActions;