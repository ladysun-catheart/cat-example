import React, { useState } from 'react';
import ContactMsg from './contact-msg';
import ContactForm from './contact-form';

const Contact = () => {
  const [msg, setMsg] = useState({
    flag: false,
    title: '',
    content: ''
  });
  const handleOnSend = () => {
    setMsg({
      flag: true,
      title: 'Mensaje Enviado',
      content: 'El mensaje ha sido enviado correctamente'
    });
  }
  return msg.flag ? 
    <ContactMsg 
      msgTitle={msg.title} 
      msgContent={msg.content} />
    : <ContactForm 
      onSend={handleOnSend} />;
};
 
export default Contact;