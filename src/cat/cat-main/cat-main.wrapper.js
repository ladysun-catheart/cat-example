import React from 'react';
import { connect } from 'react-redux';
import CatMain from "./cat-main";
import { CatActions } from '../../core/store/redux/actions';
import { useHistory } from 'react-router';

// getCatList, getCat, deleteCat, cleanCat, goToCatUpdate, page, rows, created, updated, deleted, pending, error

// Redux
const mapStateToProps = state => ({
  page: state.cat.page,
  rows: state.cat.rows,
  created: state.cat.created,
  updated: state.cat.updated,
  deleted: state.cat.deleted,
  pending: state.cat.pending,
  error: state.cat.error
});;
const mapDispatchToProps = dispatch => ({
  getCatList: (page, rows) => dispatch(CatActions.getCatList(page, rows)),
  getCat: id => dispatch(CatActions.getCat(id)),
  deleteCat: id => dispatch(CatActions.deleteCat(id)),
  cleanCat: cleanProps => dispatch(CatActions.cleanCat(cleanProps))
});
const CatMainConnect = connect(mapStateToProps, mapDispatchToProps)(CatMain);

// React-router
const CatCreateWrapper = props => {
    const history = useHistory();
    const goToCatUpdate = cat => history.push(`/cat/${cat.id}/update`);
    return <CatMainConnect {...props} goToCatUpdate={goToCatUpdate} />;
};

export default CatCreateWrapper;