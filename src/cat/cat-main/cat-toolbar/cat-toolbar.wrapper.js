import React from 'react';
import { useHistory } from 'react-router';
import CatToolbar from './cat-toolbar';

const CatToolbarWrapper = props => {
    const history = useHistory();
    const goToCatCreate = () => history.push('/cat/create');
    return (<CatToolbar {...props} goToCatCreate={goToCatCreate} />);
}

export default CatToolbarWrapper;
