import React from 'react';
import { useToasts } from 'react-toast-notifications';
import * as moment from 'moment';
import CatForm from '../cat-form';

const CatUpdate = ({cat, updated, updateCat, goToCatList, error}) => {
    const { addToast } = useToasts()
    const handlerSubmit = (cat, actions) => updateCat(cat)
    updated && goToCatList()
    error && addToast(error, { appearance: 'error' })
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
