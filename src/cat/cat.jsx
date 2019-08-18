import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CatApi from '../core/apis/cat-api';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';

class Cat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      catList: []
    };
  }

  componentDidMount() {
    CatApi.fetchCatList()
      .then( res => this.setState({catList: res.data}))
  }

  render() {
    return (
      <>
        <Row>
          <Col><CatInfo /></Col>
          <Col><CatList catList={this.state.catList} /></Col>
        </Row>
        <Row>
          <Col><CatActions /></Col>
        </Row>
      </>
    );
  }

}
 
export default Cat;