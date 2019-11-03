import React from 'react';
import { connect } from 'react-redux';
import Cat from "./cat";
import { CatActions } from '../core/store/redux/actions';
import { useHistory } from 'react-router';

// Redux
const mapStateToProps = state => ({
  page: state.cat.page,
  rows: state.cat.rows,
  pending: state.cat.pending,
  error: state.cat.error
});;
const mapDispatchToProps = dispatch => ({
  getCatList: (page, rows) => dispatch(CatActions.getCatList(page, rows)),
  getCat: id => dispatch(CatActions.getCat(id)),
  deleteCat: id => dispatch(CatActions.deleteCat(id)),
  cleanCat: cleanProps => dispatch(CatActions.cleanCat(cleanProps))
});
const CatConnect = connect(mapStateToProps, mapDispatchToProps)(Cat);

// React-router
const CatCreateWrapper = props => {
    const history = useHistory();
    const goToCatUpdate = cat => history.push(`/cat/${cat.id}/update`);
    return <CatConnect {...props} goToCatUpdate={goToCatUpdate} />;
};

export default CatCreateWrapper;