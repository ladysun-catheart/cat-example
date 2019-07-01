import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';

class Cat extends React.Component {

  render() {
    return (
      <>
        <Row>
          <Col><CatInfo /></Col>
          <Col><CatList /></Col>
        </Row>
        <Row>
          <Col><CatActions /></Col>
        </Row>
      </>
    );
  }

}
 
export default Cat;