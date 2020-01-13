import React from 'react'
import TestIds from '../../../core/config/test-ids'
import PropTypes from 'prop-types'
import { CatList as CatListCompo } from '../../components'

const CatList = ({ catList, catTotal, onChangePage, onClickCat, page, rows, actionList, 'data-testid': dataTestid }) => {
  return (
    <CatListCompo
      data-testid={dataTestid}
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