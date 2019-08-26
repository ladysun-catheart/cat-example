import axios from 'axios';

const FETCH_CAT_LIST = 'http://localhost:9000/cat/list';
const FETCH_CAT_BY_ID = 'http://localhost:9000/cat';

const fetchCatList = (page, rows) => axios.get(`${FETCH_CAT_LIST}/${page}/${rows}`);
const fetchCatById = (id) => axios.get(`${FETCH_CAT_BY_ID}/${id}`);

const CatApi = {
  fetchCatList,
  fetchCatById,
};

export default CatApi;