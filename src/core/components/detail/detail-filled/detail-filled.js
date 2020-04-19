import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Card } from 'react-bootstrap';

const DetailsActions = ({ actionList }) => (
  <Card.Body>
    <ButtonToolbar>
      {actionList.map(btn => <Button key={btn.id} style={{marginRight: '5px'}} onClick={btn.handlerClick}>{btn.name}</Button>)}
    </ButtonToolbar>
  </Card.Body>
);

const DetailFilled = ({ actionList, title, subtitle, description, 'data-testid': dataTestid  }) => (
  <Card data-testid={dataTestid}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    {actionList && <DetailsActions actionList={actionList} />}
  </Card>
);

DetailFilled.propTypes = {
  'data-testid': PropTypes.string,
  actionList: PropTypes.func,
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