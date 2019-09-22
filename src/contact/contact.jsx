import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import {
  createSchemaForm,
  createSchemaValidationForm,
  setValueForm,
  handleSubmitForm
} from '../core/utils/form';

const Contact = () => {
  const schemaForm = {
    user: yup.string().required('The username is required'),
    mail: yup.string().email('This must be an email').required('The mail is required'),
    content: yup.string().required('The content is required')
  };
  const [contactInfo, setContactInfo] = useState(createSchemaForm(schemaForm));
  const validationSchema = createSchemaValidationForm(schemaForm);
  return ( 
    <Form noValidate onSubmit={(event) => handleSubmitForm(event, validationSchema, contactInfo, setContactInfo)}>
      <Form.Group>
        <Form.Control 
          type="text" 
          placeholder="User" 
          value={contactInfo.user.value} 
          onChange={(event) => setValueForm(event.target.value, 'user', contactInfo, setContactInfo)}
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
          onChange={(event) => setValueForm(event.target.value, 'mail', contactInfo, setContactInfo)}
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
          onChange={(event) => setValueForm(event.target.value, 'content', contactInfo, setContactInfo)}
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