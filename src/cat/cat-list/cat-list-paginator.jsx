import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

const CatListPaginator = ({ rows, catTotal, onChangePage }) => {
  const [actualPage, setActualPage] = useState(1);
  const totalPages = catTotal / rows; 
  const isDisablePrevFirst = () => actualPage === 1;
  const isDisableNextLast = () => actualPage === totalPages;
  const getPages = () => [];
  const handlerPagItemClick = (page) => {
    setActualPage(page);
    onChangePage(page)
  };
  return(
    <Pagination>
      <Pagination.First 
        disabled={isDisablePrevFirst()} 
        onClick={() => handlerPagItemClick(1)}
      ></Pagination.First>
      <Pagination.Prev 
        disabled={isDisablePrevFirst()} 
        onClick={() => handlerPagItemClick(actualPage-1)}
      ></Pagination.Prev>
      {getPages().map(item => (
        <Pagination.Item 
        key={item} 
        onClick={() => handlerPagItemClick(item)}>
        {item}</Pagination.Item>
      ))}
      <Pagination.Next 
        disabled={isDisableNextLast()} 
        onClick={() => handlerPagItemClick(actualPage+1)}
      ></Pagination.Next>
      <Pagination.Last 
        disabled={isDisableNextLast()} 
        onClick={() => handlerPagItemClick(totalPages)
      }></Pagination.Last>
    </Pagination>
  );
};

CatListPaginator.propTypes = { 
    rows: PropTypes.number,
    catTotal: PropTypes.number,
    onChangePage: PropTypes.func
}
 
export default CatListPaginator;