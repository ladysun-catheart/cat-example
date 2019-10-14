import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const CatFormStructure = ({
  values,
  btnName,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" id="name" onChange={handleChange} onBlur={handleBlur} defaultValue={values.name} />
          <Form.Text className="text-muted">
            {errors.name && touched.name && errors.name}
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>Birthday</Form.Label>
        <Col sm={10}>
          <Form.Control type="date" id="birthday" onChange={handleChange} onBlur={handleBlur} />
          <Form.Text className="text-muted">
            {errors.birthday && touched.birthday && errors.birthday}
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
            onChange={handleChange} onBlur={handleBlur}
          />
          <Form.Check
            type="radio"
            label="Female"
            name="sex"
            onChange={handleChange} onBlur={handleBlur}
          />
          <Form.Text className="text-muted">
            {errors.sex && touched.sex && errors.sex}
          </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" id="description" onChange={handleChange} onBlur={handleBlur} />
        <Form.Text className="text-muted">
          {errors.description && touched.description && errors.description}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>{btnName}</Button>
    </Form>
  );
}

export default CatFormStructure;