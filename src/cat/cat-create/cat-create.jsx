import React from 'react';
import CatForm from '../cat-form';

const CatCreate = props => {
    const handlerSend = () => {};
    return (
        <CatForm {...props} btnName={'Insert'} />
    );
}

export default CatCreate;