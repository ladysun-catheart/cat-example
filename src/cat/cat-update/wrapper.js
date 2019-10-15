import React from 'react';
import { useParams } from 'react-router';
import CatUpdate from './cat-update';

const CatUpdateWrapper = props => {
    const { idCat } = useParams();
    return <CatUpdate {...props} idCat={idCat} />;
};

export default CatUpdateWrapper;