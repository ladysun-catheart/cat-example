import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';
import CatApi from '../core/apis/cat-api';
import { errorGlobalModalService } from '../core/config/global-modal';

const globalModalConfig = () => (
  errorGlobalModalService.updateGlobalModalProps({
    title: 'Cat List error',
    close: () => { }, 
    confirm: () => { },
    closeModal: () => errorGlobalModalService.closeModal(),
    // body: ({checkList}) => <p>Número de errores: {checkList.length}</p>
  })
);

const Cat = ({ saveCatList, onClickCat, cat, catList, catTotal, page, rows }) => {
  const getCatList = (pageSelected, rows) => {
    CatApi.fetchCatList(pageSelected, rows)
        .then(res => saveCatList(res.data.catTotalStored, res.data.catList, pageSelected, rows))
        .catch(() => errorGlobalModalService.updateChecking('CAT_SECTION', 'CAT_LIST', 'Hubo un error, vuelvalo a intentar más tarde'));
  };
  useEffect(() => {
    globalModalConfig();
    getCatList(page, rows);
  }, []);
  return(
    <>
      <Row>
        <Col>
          <CatInfo cat={cat} />
        </Col>
        <Col>
          <CatList 
            onChangePage={getCatList} 
            onClickCat={onClickCat} 
            catList={catList} 
            catTotal={catTotal} 
            page={page} 
            rows={rows} 
          />
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

Cat.propTypes = {
  saveCatList: PropTypes.func,
  onClickCat: PropTypes.func,
}

export default Cat;