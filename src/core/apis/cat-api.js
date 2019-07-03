import axios from 'axios';

const FETCH_CAT_LIST = '/cat';
const FETCH_CAT_BY_ID = '/cat';

const fetchCatList = () => axios.get(FETCH_CAT_LIST);
const fetchCatById = (id) => axios.get(`${FETCH_CAT_BY_ID}/${id}`);

const CatApi = {
  fetchCatList,
  fetchCatById,
};

export default CatApi;