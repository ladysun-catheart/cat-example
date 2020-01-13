import ContactApi from './../../../apis/contact-api';

const actions = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  CLEAN_CONTACT: 'CLEAN_CONTACT'
}

const sendMessage = msg => ({
  type: actions.SEND_MESSAGE,
  payload: ContactApi.insertContact(msg)
})

const cleanContact = () => ({
  type: actions.CLEAN_CONTACT
})

export {
  actions,
  sendMessage,
  cleanContact
}
