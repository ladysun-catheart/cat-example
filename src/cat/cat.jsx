import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';
import { errorGlobalModalService } from '../core/config/global-modal';
import CatToolbar from './cat-toolbar';
import {
  ModalCreateCatInfo,
  ModalDeleteCatConfirm,
  ModalDeleteCatInfo,
  ModalServerErrorInfo,
  ModalUpdateCatInfo
} from './cat-modals'

const globalModalConfig = () => (
  errorGlobalModalService.updateGlobalModalProps({
    title: 'Cat list error',
    close: () => { },
    confirm: () => { },
    closeModal: () => errorGlobalModalService.closeModal(),
    // body: ({checkList}) => <p>Número de errores: {checkList.length}</p>
  })
);

const Cat = ({ getCatList, getCat, deleteCat, cleanCat, goToCatUpdate, page, rows }) => {
  const [dataModalDelete, setDataModalDelete] = useState({ isVisible: false, cat: null });
  const actionList = [
    { name: 'Modificar', handlerClick: cat => goToCatUpdate(cat) },
    { name: 'Borrar', handlerClick: cat => setDataModalDelete({ isVisible: true, cat }) },
  ];

  useEffect(() => {
    globalModalConfig();
    getCatList(page, rows);
  }, [page, rows]);

  return (
    <>
      <Row>
        <CatToolbar onClickSearch={null} />
      </Row>
      <Row>
        <Col>
          <CatInfo cat={cat} />
        </Col>
        <Col>
          <CatList
            onChangePage={(pageSelected, rows) => getCatList(pageSelected, rows)}
            onClickCat={getCat}
            catList={catList}
            catTotal={catTotal}
            page={page}
            rows={rows}
            actionList={actionList}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <CatActions />
        </Col>
      </Row>
      <ModalDeleteCatConfirm
        isVisible={dataModalDelete.isVisible}
        onClose={() => setDataModalDelete({ isVisible: false, cat: null })}
        cat={dataModalDelete.cat}
        onCancel={() => { }}
        onAction={() => deleteCat(dataModalDelete.cat.id)}
      />
      <CatModalInform />
    </>
  );
}

Cat.propTypes = {
  getCatList: PropTypes.func,
  getCat: PropTypes.func,
  deleteCat: PropTypes.func,
  goToCatUpdate: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number
}

const CatModalInform = ({ created, updated, deleted, pending, error }) => {
  return (
    <>
      <ModalDeleteCatInfo
        isVisible={deleted}
        onClose={() => cleanCat({ deleted: false })}
        onAction={() => { }}
      />
      <ModalUpdateCatInfo
        isVisible={updated}
        onClose={() => cleanCat({ updated: false })}
        onAction={() => { }}
      />
      <ModalCreateCatInfo
        isVisible={created}
        onClose={() => cleanCat({ created: false })}
        onAction={() => { }}
      />
      <ModalServerErrorInfo
        isVisible={error !== 0}
        onClose={() => cleanCat({ error: 0 })}
        onAction={() => { }}
      />
    </>
  );
}

Cat.propTypes = {
  created: PropTypes.bool,
  updated: PropTypes.bool,
  deleted: PropTypes.bool,
  pending: PropTypes.bool,
  error: PropTypes.number
}

export default Cat;