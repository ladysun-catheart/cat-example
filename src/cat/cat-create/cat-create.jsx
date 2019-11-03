import React, { useState } from 'react';
import CatForm from '../cat-form';

const CatCreate = ({ insertCat, goToCatList, saved }) => {
    const [visibleModal, setVisibleModal] = useState(false)
    const handlerSubmit = newCat => insertCat(newCat)
    return (
        <>
            <CatForm
                btnName={'Insert'}
                onSubmit={handlerSubmit} 
            />
        </>
    );
}

export default CatCreate;