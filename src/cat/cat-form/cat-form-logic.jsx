import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as moment from 'moment';

const CatFormLogic = ({ children, btnName, cat, onSubmit }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('The name is required'),
    sex: yup.string().required('The sex is required'),
    birthday: yup.date().required('The birthday is required'),
    description: yup.string().required('The description is required')
  });
  const handlerSubmit = (cat, actions) => {
    const catParse = { ...cat, birthday: moment(cat.birthday, 'YYYY-MM-DD').valueOf() };
    onSubmit(catParse, actions);
  }
  return (
    <Formik
      enableReinitialize
      validateOnChange
      validateOnBlur
      initialValues={cat}
      validationSchema={validationSchema}
      onSubmit={handlerSubmit}
      render={propsFormik => React.cloneElement(children, { ...propsFormik, btnName })}
    />
  );
};

CatFormLogic.propTypes = {
  btnName: PropTypes.string,
  cat: PropTypes.object,
  onSubmit: PropTypes.func
};

export default CatFormLogic;