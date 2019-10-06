import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import CatListRow from './cat-list-row';
import CatListPaginator from './cat-list-paginator';
import CatApi from '../../core/apis/cat-api';
import { errorGlobalModalService } from '../../core/config/global-modal';

const CatList = ({ catList, catTotal, onClickCat, saveCatList, page, rows }) => {
  const getCatList = (pageSelected) => {
    CatApi.fetchCatList(pageSelected, rows)
        .then(res => saveCatList(res.data.catTotalStored, res.data.catList, pageSelected, rows))
        .catch(() => errorGlobalModalService.updateChecking('CAT_SECTION', 'CAT_LIST', 'Hubo un error, vuelvalo a intentar más tarde'));
  };
  useEffect(() => getCatList(page));
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
          {catList && catList.map(cat => <CatListRow key={cat.id} cat={cat} onClickCat={onClickCat} />)}
        </tbody>
      </Table>
      <CatListPaginator
        page={page} 
        rows={rows} 
        catTotal={catTotal}
        onChangePage={getCatList}
      />
    </div> 
  );
}

CatList.propTypes = {
  catList: PropTypes.array,
  catTotal: PropTypes.number,
  onClickCat: PropTypes.func,
  saveCatList: PropTypes.func,
  page: PropTypes.number,
  rows: PropTypes.number,
};
 
export default CatList;