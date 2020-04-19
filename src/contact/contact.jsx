import React, { useEffect } from 'react'
import ContactMsg from './contact-msg'
import ContactForm from './contact-form'

const Contact = ({ sendMessage, cleanContact, msg }) => {
  useEffect(() => { 
    cleanContact()
  }, [cleanContact])
  return msg ?
    <ContactMsg
      msgTitle={msg.title}
      msgContent={msg.content}
      formContent={msg.contact}
      reloadForm={() => cleanContact()} />
    : <ContactForm
      onSubmit={msg => sendMessage(msg)}
    />;
}
export default Contact
