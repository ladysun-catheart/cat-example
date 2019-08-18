import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CatApi from '../core/apis/cat-api';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';

class Cat extends React.Component {

  componentDidMount() {
    CatApi.fetchCatList()
      .then( catList => )
  }

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