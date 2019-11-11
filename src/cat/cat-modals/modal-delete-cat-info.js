import React from 'react'
import PropTypes from 'prop-types'
import { modalInfoBase } from '../../core/components/modal-premium'

const ModalDeleteCatInfo = props => {
  const ModalInfoBase = modalInfoBase()
  return (
    <ModalInfoBase
      {...props}
      title={'Creation'}
      msg={'The cat was created successfully'}
      labelAction={'Close'}
    />
  )
}

ModalDeleteCatInfo.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onAction: PropTypes.func
}

export default ModalDeleteCatInfo