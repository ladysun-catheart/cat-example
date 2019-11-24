import React from 'react'
import PropTypes from 'prop-types'
import { modalInfoBase } from '../../core/components/modal-premium'

const ModalDeleteCatInfo = props => {
  const ModalInfoBase = modalInfoBase()
  return (
    <ModalInfoBase
      {...props}
      title={'Deletion'}
      msg={'The cat was deleted successfully'}
      labelAction={'Close'}
    />
  )
}

ModalDeleteCatInfo.propTypes = {
  isVisible: PropTypes.bool,
  onAction: PropTypes.func
}

export default ModalDeleteCatInfo
