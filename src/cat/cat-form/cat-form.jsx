import React from 'react';
import CatFormLogic from './cat-form-logic';
import CatFormStructure from './cat-form-structure';

const CatForm = props => (
    <CatFormLogic {...props} >
        <CatFormStructure />
    </CatFormLogic>
);

export default CatForm;