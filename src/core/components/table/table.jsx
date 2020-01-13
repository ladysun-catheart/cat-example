import React from 'react';
import TestIds from '../../config/test-ids'
import PropTypes from 'prop-types';
import TableBS from 'react-bootstrap/Table';
import TableRow from './table-row';
import TablePaginator from './table-paginator';

const Table = ({ actionList, columnList, dataList, dataTotal, onChangePage, onClickRow, page, rows, 'data-testid': dataTestid }) => {
  return (
    <div data-testid={dataTestid}>
      <TableBS striped bordered hover>
        <thead>
          <tr>
            {columnList.map(column => <th>{column.label}</th>)}
            {actionList && <th />}
          </tr>
        </thead>
        <tbody>
          {dataList && dataList.map(data => (
            <TableRow
              data-testid={`${dataTestid}${TestIds.row}`}
              actionList={actionList}
              columnList={columnList}
              key={data.id}
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
  )
};

Table.propTypes = {
  'data-testid': PropTypes.string,
  actionList: PropTypes.array,
  columnList: PropTypes.array,
  dataList: PropTypes.array,
  dataTotal: PropTypes.number,
  onChangePage: PropTypes.func,
  onClickRow: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
};

export default Table;