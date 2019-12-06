import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';

const ContactForm = ({
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => {
  const schemaForm = {
    user: yup.string().required('The username is required'),
    mail: yup.string().email('This must be an email').required('The mail is required'),
    content: yup.string().required('The content is required')
  };
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="User"
          id="user"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Text className="text-muted">
          {errors.user && errors.user}
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="mail"
          placeholder="Mail contact"
          id="mail"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Text className="text-muted">
          {errors.mail && errors.mail}
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="What do you want? :)"
          id="content"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Text className="text-muted">
          {errors.content && errors.content}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" >Enviar</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default ContactForm;
