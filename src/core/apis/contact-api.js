import AxiosNeko from './AxiosNeko'

const FETCH_CONTACT_LIST = 'http://localhost:9001contact/list'
const POST_CONTACT = 'http://localhost:9001/contact'

const axiosNekoCat = new AxiosNeko()
const fetchAllContactList = (page, rows) => axiosNekoCat.get(`${FETCH_CONTACT_LIST}`)
const fetchContactList = (page, rows) => axiosNekoCat.get(`${FETCH_CONTACT_LIST}/${page}/${rows}`)
const insertContact = (contact) => axiosNekoCat.post(`${POST_CONTACT}`, contact)

const ContactApi = {
    fetchAllContactList,
    fetchContactList,
    insertContact,
};

export default ContactApi
