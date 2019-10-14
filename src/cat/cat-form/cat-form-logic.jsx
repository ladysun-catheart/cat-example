import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import CatFormStructure from './cat-form-structure';

const CatFormLogic = props => {
  const validationSchema = {
    name: yup.string().required('The name is required'),
    sex: yup.string().required('The sex is required'),
    birthday: yup.date().required('The birthday is required'),
    description: yup.string().required('The description is required')
  };
  return (
    <Formik
      enableReinitialize
      initialValues={props.cat}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log('submit buttons')
      }}
      render={(propsFormik) => <CatFormStructure {...propsFormik} {...props} />}
    />
  );
};

CatFormLogic.propTypes = {
  cat: PropTypes.object,
  btnName: PropTypes.func
};

export default CatFormLogic;