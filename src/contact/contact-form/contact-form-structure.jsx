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
          {touched.user && errors.user}
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
          {touched.mail && errors.mail}
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
          {touched.content && errors.content}
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
