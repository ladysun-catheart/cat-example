import axios from 'axios';

const FETCH_CAT_LIST = 'http://localhost:9000/cat/list';
const FETCH_CAT_BY_ID = 'http://localhost:9000/cat';

const fetchAllCatList = (page, rows) => axios.get(`${FETCH_CAT_LIST}`);
const fetchCatList = (page, rows) => axios.get(`${FETCH_CAT_LIST}/${page}/${rows}`);
const fetchCatById = (id) => axios.get(`${FETCH_CAT_BY_ID}/${id}`);

const CatApi = {
  fetchAllCatList,
  fetchCatList,
  fetchCatById,
};

export default CatApi;