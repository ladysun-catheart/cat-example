import axios from 'axios'

const FETCH_CAT_LIST = 'http://localhost:9000/cat/list'
const FETCH_CAT_BY_ID = 'http://localhost:9000/cat'
const CREATE_CAT = 'http://localhost:9000/cat'
const UPDATE_CAT = 'http://localhost:9000/cat'
const DELETE_CAP = 'http://localhost:9000/cat'

const fetchAllCatList = () => axios.get(`${FETCH_CAT_LIST}`).then(res => new Promise(resolve => resolve(res.data)))
const fetchCatList = (page, rows) => axios.get(`${FETCH_CAT_LIST}/${page}/${rows}`).then(res => new Promise(resolve => resolve(res.data)))
const fetchCatById = id => axios.get(`${FETCH_CAT_BY_ID}/${id}`).then(res => new Promise(resolve => resolve(res.data)))
const createCat = cat => axios.post(`${CREATE_CAT}`, cat).then(res => new Promise(resolve => resolve(res.data)))
const updateCat = cat => axios.put(`${UPDATE_CAT}`, cat).then(res => new Promise(resolve => resolve(res.data)))
const deleteCat = id => axios.delete(`${DELETE_CAP}/${id}`)

const CatApi = {
  fetchAllCatList,
  fetchCatList,
  fetchCatById,
  createCat,
  updateCat,
  deleteCat
}

export default CatApi
