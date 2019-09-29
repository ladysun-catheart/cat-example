import React, { useState } from 'react';
import {
  emptyMsg,
  successMsg,
  errorMsg
} from './msgs';
import ContactMsg from './contact-msg';
import ContactForm from './contact-form';
import ContactApi from '../core/apis/contact-api';

const Contact = () => {
  const [msg, setMsg] = useState(emptyMsg);
  const handleOnSend = (contact) => {
    ContactApi.insertContact(contact)
      .then((res) => {
        const contact = { ...res.data };
        delete contact.id;
        setMsg({ ...successMsg, contact })
      })
      .catch(() => setMsg({...errorMsg}));
  };
  return msg.flag ? 
    <ContactMsg 
      msgTitle={msg.title} 
      msgContent={msg.content}
      formContent={msg.contact}
      reloadForm={() => setMsg(emptyMsg)} />
    : <ContactForm 
      onSend={handleOnSend} />;
};
 
export default Contact;