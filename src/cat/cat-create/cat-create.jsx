import React from 'react';
import { useToasts } from 'react-toast-notifications';
import * as moment from 'moment';
import CatForm from '../cat-form';

const CatCreate = ({ insertCat, goToCatList, created, error }) => {
    const { addToast } = useToasts()
    const handlerSubmit = newCat => insertCat(newCat)
    created && goToCatList()
    error && addToast(error, { appearance: 'error' })
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