import React from 'react';
import CatForm from '../cat-form';

const CatCreate = () => {
    const handlerSubmit = newCat => {
        console.log(newCat);
    };
    return (
        <CatForm btnName={'Insert'} onSubmit={handlerSubmit} />
    );
}

export default CatCreate;