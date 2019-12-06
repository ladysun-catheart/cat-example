import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';

const modalBase = (Title, Body, Actions) => {
  const hocComponent = ({ isVisible, onClose }) => (
    <Modal
      show={isVisible}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Title />
      </Modal.Header>
      <Modal.Body>
        <Body />
      </Modal.Body>
      <Modal.Footer>
        <Actions />
      </Modal.Footer>
    </Modal>
  );

  hocComponent.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
  }

  return hocComponent
}

export default modalBase