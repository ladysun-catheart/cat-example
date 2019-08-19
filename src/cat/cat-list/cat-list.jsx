import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

const CatListPagination = ({ catList }) => {
  const isVisibleFirst = () => {};
  const isVisiblePrev = () => {};
  const isVisibleNext = () => {};
  const isVisibleLast = () => {};
  const getPages = () => {};
  return(
    <Pagination>
      <Pagination.First></Pagination.First>
      <Pagination.Prev></Pagination.Prev>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next></Pagination.Next>
      <Pagination.Last></Pagination.Last>
    </Pagination>
  );
};

const CatList = ({ catList, catTotal, onChangePage }) => {
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
            <tr>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CatListPagination catList />
    </div> 
  );
}

CatList.propTypes = {
  catList: PropTypes.array,
  catTotal: PropTypes.number,
  onChangePage: PropTypes.func
};
 
export default CatList;