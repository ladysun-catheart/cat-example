import AxiosNeko from './AxiosNeko'

const FETCH_CAT_LIST = 'http://localhost:9001/cat/all'
const FETCH_CAT_BY_ID = 'http://localhost:9001/cat'
const CREATE_CAT = 'http://localhost:9001/cat'
const UPDATE_CAT = 'http://localhost:9001/cat'
const DELETE_CAP = 'http://localhost:9001/cat'
const SEARCH_CAT = 'http://localhost:9001/cat/filter'

const axiosNekoCat = new AxiosNeko()
const fetchAllCatList = () => axiosNekoCat.get(`${FETCH_CAT_LIST}`)
const fetchCatList = (page, rows) => axiosNekoCat.get(`${FETCH_CAT_LIST}/${page}/${rows}`)
const fetchCatById = id => axiosNekoCat.get(`${FETCH_CAT_BY_ID}/${id}`)
const createCat = cat => axiosNekoCat.post(`${CREATE_CAT}`, cat)
const updateCat = cat => axiosNekoCat.put(`${UPDATE_CAT}`, cat)
const deleteCat = id => axiosNekoCat.delete(`${DELETE_CAP}/${id}`)
const searchCat = (str, page, rows) => axiosNekoCat.post(`${SEARCH_CAT}`, { str, page, rows })

const CatApi = {
  fetchAllCatList,
  fetchCatList,
  fetchCatById,
  createCat,
  updateCat,
  deleteCat,
  searchCat
}

export default CatApi
