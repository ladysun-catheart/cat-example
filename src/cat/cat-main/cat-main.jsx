import React, { useState, useEffect } from 'react'
import TestIds from '../../core/config/test-ids'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import CatInfo from './cat-info'
import CatList from './cat-list'
import CatActions from '../cat-actions'
import CatToolbar from './cat-toolbar'
import CatModalContInfo from './cat-main.modals'

const CatMain = ({
   getCatList, 
   getCat, 
   deleteCat, 
   cleanCat, 
   goToCatUpdate, 
   catSearch, 
   page, 
   rows, 
   created, 
   updated, 
   deleted
  }) => {
  const [cat, setCat] = useState(null)
  const [firstRender, setFirstRender] = useState(true)
  const [isVisibleCreateCatInfo, setIsVisibleCreateCatInfo] = useState(false)
  const [isVisibleDeleteCatConfirm, setIsVisibleDeleteCatConfirm] = useState(false)
  const [isVisibleDeleteCatInfo, setIsVisibleDeleteCatInfo] = useState(false)
  const [isVisibleUpdateCatInfo, setIsVisibleUpdateCatInfo] = useState(false)
  const actionList = [
    { id: 'edit', name: 'Modificar', handlerClick: cat => goToCatUpdate(cat) },
    {
      id: 'delete', name: 'Borrar', handlerClick: cat => {
        setIsVisibleDeleteCatConfirm(true)
        setCat(cat)
      }
    },
  ];

  useEffect(() => {
    if (created) {
      setIsVisibleCreateCatInfo(true)
    }
    else if (deleted) {
      setIsVisibleDeleteCatInfo(true)
    }
    else if (updated) {
      setIsVisibleUpdateCatInfo(true)
    }
    (updated || deleted || firstRender) && getCatList('', page, rows);
    firstRender && setFirstRender(false);
    (created || updated || deleted) && cleanCat({created: false, updated: false, deleted: false});
  }, [firstRender, created, updated, deleted])

  return (
    <>
      <Row>
        <CatToolbar
          onClickSearch={str => getCatList(str, 1, 10)}
        />
      </Row>
      <Row>
        <Col>
          <CatInfo data-testid={TestIds.catInfoMain} />
        </Col>
        <Col>
          <CatList
            data-testid={TestIds.catListMain}
            onChangePage={(pageSelected, rows) => getCatList(catSearch, pageSelected, rows)}
            onClickCat={cat => getCat(cat._id)}
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
        isVisibleCreateCatInfo={isVisibleCreateCatInfo}
        isVisibleDeleteCatConfirm={isVisibleDeleteCatConfirm}
        isVisibleDeleteCatInfo={isVisibleDeleteCatInfo}
        isVisibleUpdateCatInfo={isVisibleUpdateCatInfo}
        onActionCreateCatInfo={() => setIsVisibleCreateCatInfo(false)}
        onCancelDeleteCatConfirm={() => setIsVisibleDeleteCatConfirm(false)}
        onActionDeleteCatConfirm={() => {
          deleteCat(cat._id)
          setIsVisibleDeleteCatConfirm(false)
          setIsVisibleDeleteCatInfo(true)
        }}
        onActionDeleteCatInfo={() => setIsVisibleDeleteCatInfo(false)}
        onActionUpdateCatInfo={() => setIsVisibleUpdateCatInfo(false)}
      />
    </>
  );
}

CatMain.propTypes = {
  getCatList: PropTypes.func,
  getCat: PropTypes.func,
  deleteCat: PropTypes.func,
  updateCatCriteriaSearch: PropTypes.func,
  cleanCat: PropTypes.func,
  goToCatUpdate: PropTypes.func,
  catSearch: PropTypes.string,
  page: PropTypes.number,
  rows: PropTypes.number,
  created: PropTypes.bool,
  updated: PropTypes.bool,
  deleted: PropTypes.bool,
}

export default CatMain;
