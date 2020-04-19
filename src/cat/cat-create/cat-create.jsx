import React from 'react';
import * as moment from 'moment';
import CatForm from '../cat-form';

const CatCreate = ({ insertCat, goToCatList, created }) => {
    const handlerSubmit = newCat => insertCat(newCat)
    created && goToCatList()
    const cat = {
        name: '',
        sex: 'male',
        birthday: moment().format('YYYY-MM-DD'),
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