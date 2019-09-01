import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import CatListPaginator from './cat-list-paginator';

const CatListRow = ({cat, onClickCat}) => {
  let [styleRow, setStyleRow] = useState({ cursor: 'default'});
  return (
    <tr
      style={styleRow} 
      onClick={() => onClickCat(cat)} 
      onMouseEnter={() => setStyleRow({ cursor: 'pointer'})} 
      onMouseLeave={() => setStyleRow({ cursor: 'default'})}
    >
      <td>{cat.id}</td>
      <td>{cat.name}</td>
    </tr>
  );
};

const CatList = ({ catList, rows, catTotal, onClickCat, onChangePage }) => {
  return ( 
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {catList.map(cat => <CatListRow key={cat.id} cat={cat} onClickCat={onClickCat} />)}
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