import CatApi from './../../../apis/cat-api';

const actions = {
  GET_CAT_LIST: 'GET_CAT_LIST',
  GET_CAT: 'GET_CAT',
  CREATE_CAT: 'CREATE_CAT',
  DELETE_CAT: 'DELETE_CAT',
  UPDATE_CAT: 'UPDATE_CAT',
  CLEAN_CAT: 'CLEAN_CAT',
  GET_CAT_LIST_FILTER: 'GET_CAT_LIST_FILTER',
  UPDATE_CAT_CRITERIA_SEARCH: 'UPDATE_CAT_CRITERIA_SEARCH'
};

const getCatList = (page, rows) => ({
  type: actions.GET_CAT_LIST,
  payload: CatApi.fetchCatList(page, rows)
    .then(data => new Promise(resolve => resolve({ ...data, page, rows })))
})

const getCat = id => ({
  type: actions.GET_CAT,
  payload: CatApi.fetchCatById(id)
})

const deleteCat = id => ({
  type: actions.DELETE_CAT,
  payload: CatApi.deleteCat(id)
})

const createCat = cat => ({
  type: actions.CREATE_CAT,
  payload: CatApi.createCat(cat)
})

const updateCat = cat => ({
  type: actions.UPDATE_CAT,
  payload: CatApi.updateCat(cat)
})

const cleanCat = cleanProps => ({
  type: actions.CLEAN_CAT,
  payload: cleanProps
})

const getCatListFilter = (str = '', page, rows) => ({
  type: actions.GET_CAT_LIST_FILTER,
  payload: CatApi.searchCat(str, page, rows)
    .then(data => Promise.resolve({ ...data, page, rows }))
})


export {
  actions,
  getCatList,
  getCat,
  deleteCat,
  createCat,
  updateCat,
  cleanCat,
  getCatListFilter,
}
