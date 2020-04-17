import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { CatActions } from '../../../core/store/redux/actions';
import CatToolbar from './cat-toolbar';

const CatToolbarWrapper = props => {
    const history = useHistory();
    const goToCatCreate = () => history.push('/cat/create');
    return (<CatToolbar {...props} goToCatCreate={goToCatCreate} />);
}

export default CatToolbarWrapper;
