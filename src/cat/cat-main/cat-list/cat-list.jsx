import React from 'react'
import PropTypes from 'prop-types'
import { CatList as CatListCompo } from '../../components'

const CatList = ({ catList, catTotal, onChangePage, onClickCat, page, rows, actionList }) => {
  return (
    <CatListCompo
      catList={catList}
      catTotal={catTotal}
      onChangePage={onChangePage}
      onClickCat={onClickCat}
      page={page}
      rows={rows}
      actionList={actionList}
    />
  );
}

export default CatList;