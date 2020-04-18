import React, { useEffect } from 'react';
import { CatUpdateWrapper as CatUpdate } from './cat-update.wrapper';

const CatPreUpdate = ({ getCat, idCat }) => {
    useEffect(() => {
        getCat(idCat)
    }, [getCat, idCat])
    return <CatUpdate />
}

export default CatPreUpdate
