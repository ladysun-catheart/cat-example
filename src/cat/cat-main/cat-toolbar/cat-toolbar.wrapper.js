import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { CatActions } from '../../../core/store/redux/actions';
import CatToolbar from './cat-toolbar';

const mapDispatchToProps = dispatch => ({
  onClickSearch: str => dispatch(CatActions.searchCat(str))
})
const CatToolbarConnect = connect(null, mapDispatchToProps)(CatToolbar)

const CatToolbarWrapper = () => {
    const history = useHistory();
    const goToCatCreate = () => history.push('/cat/create');
    return (<CatToolbarConnect goToCatCreate={goToCatCreate} />);
}

export default CatToolbarWrapper;
