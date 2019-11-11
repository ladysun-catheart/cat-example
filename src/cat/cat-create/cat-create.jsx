import React from 'react';
import CatForm from '../cat-form';

const CatCreate = ({ insertCat, goToCatList, created }) => {
    const handlerSubmit = newCat => insertCat(newCat)
    created && goToCatList()
    return (
        <CatForm
            btnName={'Insert'}
            onSubmit={handlerSubmit}
        />
    );
}

export default CatCreate;