import CatApi from './../../../apis/cat-api';

const actions = {
  GET_CAT_LIST: 'GET_CAT_LIST',
  GET_CAT: 'GET_CAT',
  CREATE_CAT: 'CREATE_CAT',
  DELETE_CAT: 'DELETE_CAT',
  UPDATE_CAT: 'UPDATE_CAT',
  CLEAN_CAT: 'CLEAN_CAT'
};

const getCatList = (page, rows) => ({
  type: actions.GET_CAT_LIST,
  payload: CatApi.fetchCatList(page, rows)
    .then(res => new Promise({...res, page, rows}))
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

export {
  actions,
  getCatList,
  getCat,
  deleteCat,
  createCat,
  updateCat,
  cleanCat
}