import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

const CatFormLogic = ({ children, btnName, cat, onSubmit }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('The name is required'),
    sex: yup.string().required('The sex is required'),
    birthday: yup.date().required('The birthday is required'),
    description: yup.string().required('The description is required')
  });
  return (
    <Formik
      enableReinitialize
      validateOnChange
      validateOnBlur
      initialValues={cat}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        onSubmit(values, actions.setErrors);
      }}
      render={(propsFormik) => React.cloneElement(children, { ...propsFormik, btnName })}
    />
  );
};

CatFormLogic.propTypes = {
  cat: PropTypes.object,
  btnName: PropTypes.func
};

export default CatFormLogic;