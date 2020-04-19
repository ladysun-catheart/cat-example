import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../core/components/table';

const columnList = [
  { id: 'name', label: 'Nombre' },
];

const CatList = ({ catList, catTotal, onChangePage, onClickCat, page, rows, actionList, 'data-testid': dataTestid }) => (
  <Table
    data-testid={dataTestid}
    actionList={actionList}
    columnList={columnList}
    dataList={catList}
    dataTotal={catTotal}
    onChangePage={onChangePage}
    onClickRow={onClickCat}
    page={page}
    rows={rows}
  />
);

CatList.propTypes = {
  'data-testid': PropTypes.string,
  catList: PropTypes.array,
  catTotal: PropTypes.number,
  onChangePage: PropTypes.func,
  onClickCat: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
  actionList: PropTypes.array,
};

export default CatList;