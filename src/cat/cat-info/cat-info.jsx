import React from 'react';
import CatInfoFilled from './cat-info-filled';
import CatInfoEmpty from './cat-info-empty';

const CatInfo = ({cat}) => ( 
  cat ? <CatInfoFilled cat={cat} /> : <CatInfoEmpty />
);
 
export default CatInfo;