import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'react-bootstrap';

const CatFormStructure = ({
  btnName,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => {
  console.log(values)
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
          <Form.Text className="text-muted">
            {errors.name && errors.name}
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>Birthday</Form.Label>
        <Col sm={10}>
          <Form.Control type="date" id="birthday" value="2018-07-22" onChange={handleChange} onBlur={handleBlur} />
          <Form.Text className="text-muted">
            {errors.birthday && errors.birthday}
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2}>Gender</Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Male"
            name="sex"
            value="male"
            checked={values.sex === 'male'}
            onChange={handleChange} onBlur={handleBlur}
          />
          <Form.Check
            type="radio"
            label="Female"
            name="sex"
            value="female"
            checked={values.sex  === 'female'}
            onChange={handleChange} onBlur={handleBlur}
          />
          <Form.Text className="text-muted">
            {errors.sex && errors.sex}
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" id="description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
        <Form.Text className="text-muted">
          {errors.description && errors.description}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>{btnName}</Button>
    </Form>
  );
}

CatFormStructure.propTypes = {
  btnName: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
};

export default CatFormStructure;