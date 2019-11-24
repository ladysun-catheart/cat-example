import React from 'react'
import PropTypes from 'prop-types'
import { modalInfoBase } from '../../core/components/modal-premium'

const ModalUpdateCatInfo = props => {
  const ModalInfoBase = modalInfoBase()
  return (
    <ModalInfoBase
      {...props}
      title={'Update'}
      msg={'The cat was saved successfully'}
      labelAction={'Close'}
    />
  )
}

ModalUpdateCatInfo.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onAction: PropTypes.func
}

export default ModalUpdateCatInfo