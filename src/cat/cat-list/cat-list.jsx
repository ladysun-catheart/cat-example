import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import CatListPaginator from './cat-list-paginator';
import CatApi from '../../core/apis/cat-api';
import { CatActions } from '../../core/store/redux/actions';

const CatListRow = ({cat, onClickCat}) => {
  const [styleRow, setStyleRow] = useState({ cursor: 'default'});
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

CatListRow.propTypes = {
  cat: PropTypes.object,
  onClickCat: PropTypes.func
};

const CatList = ({ catList, catTotal, onClickCat, saveCatList }) => {
  const getCatList = (page) => {
    CatApi.fetchCatList(page, 10)
        .then(res => saveCatList(res.data.catTotalStored, res.data.catList));
  };
  useEffect(() => {
    getCatList(1);
    return () => saveCatList(0, [])
  }, []);
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
        rows={10} 
        catTotal={catTotal}
        onChangePage={getCatList}
      />
    </div> 
  );
}

CatList.propTypes = {
  catList: PropTypes.array,
  catTotal: PropTypes.number,
  onClickCat: PropTypes.func
};
 
export default CatList;