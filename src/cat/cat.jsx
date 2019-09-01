import React from 'react';
import PropTypes from 'prop-types';
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
    this.rows = 10;
    this.getCatList = this.getCatList.bind(this);
  }

  componentDidMount() {
    this.getCatList(1);
  }

  getCatList(page) {
    CatApi.fetchCatList(page, this.rows)
      .then(res => this.props.persistCatList(res.data.catTotalStored, res.data.catList))
  }

  render() {
    return (
      <>
        <Row style={{marginTop: '20px'}}>
          <Col><CatInfo /></Col>
          <Col>
            <CatList
              onChangePage={(page) => this.getCatList(page)}
              rows={this.rows}
            />
          </Col>
        </Row>
        <Row>
          <Col><CatActions /></Col>
        </Row>
      </>
    );
  }

}

Cat.propTypes = {
  persistCatList: PropTypes.func
};
 
export default Cat;