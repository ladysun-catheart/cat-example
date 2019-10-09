import React from 'react';
import PropTypes from 'prop-types';
import * as TableBS from 'react-bootstrap/Table';
import TableRow from './table-row';
import TablePaginator from './table-paginator';

const Table = ({ columnList, dataList, dataTotal, onChangePage, onClickRow, page, rows }) => (
  <div>
    <TableBS striped bordered hover>
      <thead>
        <tr>
          {columnList.map(column => <th>{ column.label }</th>)}
        </tr>
      </thead>
      <tbody>
        {dataList && dataList.map(data => (
          <TableRow
            columnList={columnList}
            key={data.id}
            columnList={columnList}
            data={data}
            onClick={onClickRow}
          />)
        )}
      </tbody>
    </TableBS>
    <TablePaginator
      page={page}
      rows={rows}
      dataTotal={dataTotal}
      onChangePage={onChangePage}
    />
  </div>
);

Table.propTypes = {
  columnList: PropTypes.array,
  dataList: PropTypes.array,
  dataTotal: PropTypes.number,
  onChangePage: PropTypes.func,
  onClickRow: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
};

export default Table;