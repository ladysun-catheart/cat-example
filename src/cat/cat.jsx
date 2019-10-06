import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';
import { errorGlobalModalService } from '../core/config/global-modal';

const Cat = () => {
  useEffect(() => {
    errorGlobalModalService.updateGlobalModalProps({
      title: 'Cat List error',
      close: () => { }, 
      confirm: () => { },
      closeModal: () => errorGlobalModalService.closeModal(),
      // body: ({checkList}) => <p>Número de errores: {checkList.length}</p>
    });
  }, []);
  return(
    <>
      <Row>
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