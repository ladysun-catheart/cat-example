import React, { useState, useLayoutEffect } from 'react';
import CatForm from '../cat-form';
import CatApi from '../../core/apis/cat-api';

const CatUpdate = props => {
    const [catState, setCatState] = useState({
        name: '',
        birthday: '',
        sex: '',
        description: ''
    });
    const handlerSend = () => { };
    useLayoutEffect(() => {
        CatApi.fetchCatById(1)
        .then(res => setCatState(res.data));
    }, []);
    return (
        <CatForm {...props} btnName={'Update'} cat={catState} />
    );
}

export default CatUpdate;