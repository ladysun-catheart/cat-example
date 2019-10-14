import React from 'react';
import { useHistory } from 'react-router';
import CatCreate from './cat-create';

const CatCreateWrapper = props => {
    const history = useHistory();
    const goToCatList = () => history.push('/');
    return <CatCreate {...props} goToCatList={goToCatList}/>;
};

export default CatCreateWrapper;