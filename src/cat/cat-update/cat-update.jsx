import React, { useEffect } from 'react';
import CatForm from '../cat-form';

const CatUpdate = ({cat, updated, updateCat, goToCatList}) => {
    const handlerSubmit = (cat, actions) => updateCat(cat)
    updated && goToCatList()
    return (
        <CatForm
            btnName={'Update'}
            onSubmit={handlerSubmit}
            cat={cat}
        />
    )
}

export default CatUpdate
