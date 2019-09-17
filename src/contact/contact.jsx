
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    user: '',
    mail: '',
    content: ''
  });
  const validateSchema = yup.object().shape({
    user: yup.string().required(),
    mail: yup.string().email().required(),
    content: yup.string().required()
  });
  const setValueForm = (value, name) => setContactInfo({ ...contactInfo, [name]: value });
  const handleSubmit = (event) => {
    validateSchema.isValid(contactInfo).then(valid => console.log(`Is valid?: ${valid}`));
    event.preventDefault();
    event.stopPropagation();
  };
  return ( 
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control 
          type="text" 
          placeholder="User" 
          value={contactInfo.user} 
          onChange={(event) => setValueForm(event.target.value, 'user')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          type="mail" 
          placeholder="Mail contact"
          value={contactInfo.mail} 
          onChange={(event) => setValueForm(event.target.value, 'mail')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          as="textarea" 
          placeholder="What do you want?"
          value={contactInfo.content} 
          onChange={(event) => setValueForm(event.target.value, 'content')}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Enviar</Button>
    </Form>
  );
}
 
export default Contact;