import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { validationCondition } from 'jest-validate/build/condition';

const Contact = () => {
  // utils create form structure
  const [contactInfo, setContactInfo] = useState({
    user: { value: '', msgError: '' },
    mail: { value: '', msgError: '' },
    content: { value: '', msgError: '' },
  });
  // utils create schema
  const validationSchema = yup.object().shape({
    user: yup.object().shape({ msgError: yup.string(), value: yup.string().required('The username is required')}),
    mail: yup.object().shape({ msgError: yup.string(), value: yup.string().email('This must be an email').required('The mail is required') }),
    content: yup.object().shape({ msgError: yup.string(), value: yup.string().required('The content is required')}), 
  });
  // utils setvalue
  const setValueForm = (value, name) => { 
    const contactInfoAux = { 
      ...contactInfo, 
      [name]: {...contactInfo[name], value} 
    };
    setContactInfo(contactInfoAux);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // utils rewind
    for(const key in contactInfo) {
      contactInfo[key].msgError = '';
    }
    // utils validation
    validationSchema.validate(contactInfo, {abortEarly: false}).catch(valid => {
      const contactInfoAux = {...contactInfo};
      valid.inner.forEach( rawVal => {
        const key = rawVal.path.split('.')[0];
        contactInfoAux[key].msgError = rawVal.message;
      });
      setContactInfo(contactInfoAux);
    });
  };

  return ( 
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control 
          type="text" 
          placeholder="User" 
          value={contactInfo.user.value} 
          onChange={(event) => setValueForm(event.target.value, 'user')}
        />
        <Form.Text className="text-muted">
          { contactInfo.user.msgError }
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control 
          type="mail" 
          placeholder="Mail contact"
          value={contactInfo.mail.value} 
          onChange={(event) => setValueForm(event.target.value, 'mail')}
        />
        <Form.Text className="text-muted">
          { contactInfo.mail.msgError }
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control 
          as="textarea" 
          placeholder="What do you want?"
          value={contactInfo.content.value} 
          onChange={(event) => setValueForm(event.target.value, 'content')}
        />
        <Form.Text className="text-muted">
          { contactInfo.content.msgError }
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">Enviar</Button>
    </Form>
  );
}
 
export default Contact;