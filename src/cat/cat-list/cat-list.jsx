import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import CatListRow from './cat-list-row';
import CatListPaginator from './cat-list-paginator';

const CatList = ({ catList, catTotal, onChangePage, onClickCat, page, rows }) => (
  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {catList && catList.map(cat => <CatListRow key={cat.id} cat={cat} onClickCat={onClickCat} />)}
      </tbody>
    </Table>
    <CatListPaginator
      page={page}
      rows={rows}
      catTotal={catTotal}
      onChangePage={onChangePage}
    />
  </div>
);

CatList.propTypes = {
  catList: PropTypes.array,
  catTotal: PropTypes.number,
  onChangePage: PropTypes.func,
  onClickCat: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
};

export default CatList;