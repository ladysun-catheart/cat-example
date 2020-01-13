import React from 'react';
import { connect } from 'react-redux';
import CatMain from "./cat-main";
import { CatActions } from '../../core/store/redux/actions';
import { useHistory } from 'react-router';

// Redux
const mapStateToProps = state => ({
  catSearch: state.cat.string,
  page: state.cat.page,
  rows: state.cat.rows,
  created: state.cat.created,
  updated: state.cat.updated,
  deleted: state.cat.deleted,
  pending: state.cat.pending,
  error: state.cat.error
});;
const mapDispatchToProps = dispatch => ({
  getCatList: (page, rows, str) => dispatch(CatActions.getCatListFilter(page, rows, str)),
  getCat: id => dispatch(CatActions.getCat(id)),
  deleteCat: id => dispatch(CatActions.deleteCat(id)),
  updateCatCriteriaSearch: str => dispatch(CatActions.updateCatCriteriaSearch(str)),
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
