import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import CatInfo from './cat-info'
import CatList from './cat-list'
import CatActions from '../cat-actions'
import CatToolbar from './cat-toolbar'
import CatModalContInfo from './cat-main.modals'

const CatMain = ({ getCatList, getCat, deleteCat, cleanCat, goToCatUpdate, page, rows, created, updated, deleted, pending, error }) => {
  const [dataModalDelete, setDataModalDelete] = useState({ isVisible: false, cat: null });
  const actionList = [
    { name: 'Modificar', handlerClick: cat => goToCatUpdate(cat) },
    { name: 'Borrar', handlerClick: cat => setDataModalDelete({ isVisible: true, cat }) },
  ];

  useEffect(() => {
    getCatList(page, rows);
  }, [page, rows, deleted]);

  return (
    <>
      <Row>
        <CatToolbar onClickSearch={null} />
      </Row>
      <Row>
        <Col>
          <CatInfo />
        </Col>
        <Col>
          <CatList
            onChangePage={(pageSelected, rows) => getCatList(pageSelected, rows)}
            onClickCat={cat => getCat(cat.id)}
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
      <CatModalContInfo
        dataModalDelete={dataModalDelete}
        setDataModalDelete={setDataModalDelete}
        deleteCat={deleteCat}
        created={created}
        updated={updated}
        deleted={deleted}
        pending={pending}
        error={error}
        cleanCat={cleanCat}
      />
    </>
  );
}

CatMain.propTypes = {
  getCatList: PropTypes.func,
  getCat: PropTypes.func,
  deleteCat: PropTypes.func,
  cleanCat: PropTypes.func,
  goToCatUpdate: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
  created: PropTypes.bool,
  updated: PropTypes.bool,
  deleted: PropTypes.bool,
  pending: PropTypes.bool,
  error: PropTypes.number
}

export default CatMain;
