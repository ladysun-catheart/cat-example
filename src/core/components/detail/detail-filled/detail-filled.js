import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

const DetailFilled = ({ title, subtitle, description }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

DetailFilled.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
  description: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ])
};

export default DetailFilled;