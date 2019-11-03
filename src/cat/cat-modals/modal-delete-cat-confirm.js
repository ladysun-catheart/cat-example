import React from 'react'
import PropTypes from 'prop-types'
import { modalConfirmBase } from '../../core/components/modal-premium'

const ModalDeleteCatConfirm = props => {
  const ModalConfirmBase = modalConfirmBase()
  return (
    <ModalConfirmBase
      {...props}
      msg={'Do you want to delete this cat'}
      title={'Delete cat this cat?'}
      labelCancel={'Cancel'}
      labelAction={'Delete'}
    />
  )
}

ModalDeleteCatConfirm.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  cat: PropTypes.object,
  onCancel: PropTypes.func,
  onAction: PropTypes.func,
}

export default ModalDeleteCatConfirm