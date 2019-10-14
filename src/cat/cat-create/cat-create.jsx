import React from 'react';
import CatForm from '../cat-form';
import CatApi from '../../core/apis/cat-api';

const CatCreate = ({ goToCatList }) => {
    const handlerSubmit = newCat => {
        CatApi.createCat(newCat)
            .then(res => goToCatList())
            .catch(err => console.log(err));
    };
    return (
        <CatForm btnName={'Insert'} onSubmit={handlerSubmit} />
    );
}

export default CatCreate;