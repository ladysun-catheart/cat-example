import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../core/components/table';

const columnList = [
  { id: 'id', label: 'Id' },
  { id: 'name', label: 'Nombre' },
];

const CatList = ({ catList, catTotal, onChangePage, onClickCat, page, rows, actionList }) => (
  <Table
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
  catList: PropTypes.array,
  catTotal: PropTypes.number,
  onChangePage: PropTypes.func,
  onClickCat: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
  actionList: PropTypes.array,
};

export default CatList;