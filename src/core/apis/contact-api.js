import axios from 'axios';

const FETCH_CONTACT_LIST = 'http://localhost:9000/contact/list';
const POST_CONTACT = 'http://localhost:9000/contact';

const fetchAllContactList = (page, rows) => axios.get(`${FETCH_CONTACT_LIST}`);
const fetchContactList = (page, rows) => axios.get(`${FETCH_CONTACT_LIST}/${page}/${rows}`);
const insertContact = (contact) => axios.post(`${POST_CONTACT}`, contact);

const ContactApi = {
    fetchAllContactList,
    fetchContactList,
    insertContact,
};

export default ContactApi;