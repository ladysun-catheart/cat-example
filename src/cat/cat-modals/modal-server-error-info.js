import React from 'react'
import PropTypes from 'prop-types'
import { modalInfoBase } from '../../core/components/modal-premium'

const ModalServerErrorInfo = props => {
  const ModalInfoBase = modalInfoBase()
  return (
    <ModalInfoBase
      {...props}
      title={'Error'}
      msg={'There was a server error. Try again later.'}
      labelAction={'Close'}
    />
  )
}

ModalServerErrorInfo.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onAction: PropTypes.func
}

export default ModalServerErrorInfo