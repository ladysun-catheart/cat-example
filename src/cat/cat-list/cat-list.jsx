import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import CatListPaginator from './cat-list-paginator';

const CatList = ({ catList, rows, catTotal, onChangePage }) => {
  return ( 
    <div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {catList.map(cat => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CatListPaginator 
        rows={rows} 
        catTotal={catTotal}
        onChangePage={onChangePage}
      />
    </div> 
  );
}

CatList.propTypes = {
  catList: PropTypes.array,
  rows: PropTypes.number,
  catTotal: PropTypes.number,
  onChangePage: PropTypes.func
};
 
export default CatList;