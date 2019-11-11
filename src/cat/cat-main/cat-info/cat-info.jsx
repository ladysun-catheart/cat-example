import React from 'react'
import PropTypes from 'prop-types'
import { CatInfo as CatInfoCompo } from '../../components'

const CatInfo = ({ cat }) => {
  return (
    <CatInfoCompo cat={cat} />
  );
}

export default CatInfo;