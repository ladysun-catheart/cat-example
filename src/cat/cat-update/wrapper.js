import React from 'react';
import { useParams } from 'react-router';
import CatUpdate from './cat-update';

const CatUpdateWrapper = () => {
    const { idCat } = useParams();
    return <CatUpdate idCat={idCat} />;
};

export default CatUpdateWrapper;