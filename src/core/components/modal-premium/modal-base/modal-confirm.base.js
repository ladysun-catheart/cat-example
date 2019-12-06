import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import modalBase from './modal.base'

const modalInfoBase = () => {
  const hocComponent = ({ isVisible, onClose, title, msg, onCancel, onAction, labelCancel, labelAction }) => {

    const TitleComponent = () => <>{title}</>
    const BodyComponent = () => <>{msg}</>
    const ActionsComponent = () => (
      <>
        <Button onClick={onCancel}>{labelCancel}</Button>
        <Button onClick={onAction}>{labelAction}</Button>
      </>
    )
    const BaseModalComponent = modalBase(TitleComponent, BodyComponent, ActionsComponent)

    return (
      <BaseModalComponent
        isVisible={isVisible}
        onClose={onClose}
      />
    );
  }

  hocComponent.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    msg: PropTypes.string,
    onCancel: PropTypes.func,
    onAction: PropTypes.func,
    labelCancel: PropTypes.string,
    labelAction: PropTypes.string
  }

  return hocComponent
}

export default modalInfoBase