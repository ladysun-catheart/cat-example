import React from 'react'
import { CatInfo as CatInfoCompo } from '../../components'

const CatInfo = ({ cat, 'data-testid': dataTestid }) => {
  return (
    <CatInfoCompo data-testid={dataTestid} cat={cat} />
  );
}

export default CatInfo;