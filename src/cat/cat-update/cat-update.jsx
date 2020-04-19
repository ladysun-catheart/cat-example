import React from 'react';
import * as moment from 'moment';
import CatForm from '../cat-form';

const CatUpdate = ({cat, updated, updateCat, goToCatList}) => {
    const handlerSubmit = (cat, actions) => updateCat(cat)
    updated && goToCatList()
    const catToUpdate = {
        ...cat,
        birthday: moment().format('YYYY-MM-DD'),
    }
    return (
        cat && <CatForm
            btnName={'Update'}
            onSubmit={handlerSubmit}
            cat={catToUpdate}
        />
    )
}

export default CatUpdate
