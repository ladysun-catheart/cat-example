import React from 'react';
import CatForm from '../cat-form';

const CatCreate = ({ insertCat, goToCatList, created }) => {
    const handlerSubmit = newCat => insertCat(newCat)
    console.log('CatCreate')
    created && goToCatList()
    const cat = {
        name: '',
        sex: 'male',
        description: ''
    }
    return (
        <CatForm
            cat={cat}
            btnName={'Insert'}
            onSubmit={handlerSubmit}
        />
    );
}

export default CatCreate;