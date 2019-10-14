import React, { useState, useLayoutEffect } from 'react';
import CatForm from '../cat-form';
import CatApi from '../../core/apis/cat-api';
import * as moment from 'moment';

const CatUpdate = ({ idCat }) => {
    const [catState, setCatState] = useState({
        name: '',
        birthday: '',
        sex: '',
        description: ''
    });
    const handlerSend = () => { };
    useLayoutEffect(() => {
        CatApi.fetchCatById(idCat)
            .then(res => setCatState({
                ...res.data,
                birthday: moment(res.data.birthday).format('YYYY-MM-DD')
            }));
    }, []);
    return (
        <CatForm btnName={'Update'} cat={catState} />
    );
}

export default CatUpdate;