import React from 'react'
import PropTypes from 'prop-types'
import { modalInfoBase } from '../../core/components/modal-premium'

const ModalCreateCatInfo = props => {
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

ModalCreateCatInfo.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onAction: PropTypes.func
}

export default ModalCreateCatInfo