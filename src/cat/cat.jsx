import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';

const Cat = () => {
  return(
    <>
      <Row style={{marginTop: '20px'}}>
        <Col>
          <CatInfo />
        </Col>
        <Col>
          <CatList/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CatActions />
        </Col>
      </Row>
    </>
  );
}

export default Cat;