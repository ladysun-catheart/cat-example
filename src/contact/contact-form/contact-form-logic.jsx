import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

const ContactFormLogic = ({ children, onSubmit }) => {
  const validationSchema = yup.object().shape({
    user: yup.string().required('The user is required'),
    mail: yup.string().email().required('The mail is required'),
    content: yup.string().required('The content is required'),
  });
  const handlerSubmit = (msg, actions) => {
    onSubmit(msg, actions);
  }
  return (
    <Formik
      enableReinitialize
      validateOnChange
      validateOnBlur
      initialValues={{
        user: '',
        mail: '',
        content: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handlerSubmit}
      render={propsFormik => React.cloneElement(children, { ...propsFormik })}
    />
  );
};

ContactFormLogic.propTypes = {
  onSubmit: PropTypes.func
};

export default ContactFormLogic;
