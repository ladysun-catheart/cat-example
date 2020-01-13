import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomModal = ({isVisible, modalType, title, children, 
    acept, cancel, confirm, close, closeModal}) => (
    <Modal 
        show={isVisible}
        onHide={() => {
            close();
            closeModal();
        }
    }>
        <Modal.Header closeButton>
            <Modal.Title><FontAwesomeIcon icon={modalType && modalType.icon} /> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
            {modalType && modalType.buttons({acept, cancel, confirm, close}, closeModal)}
        </Modal.Footer>
    </Modal>
);

Modal.propTypes = {
    type: PropTypes.object,
    title: PropTypes.string,
    acept: PropTypes.func,
    cancel: PropTypes.func,
    confirm: PropTypes.func,
    close: PropTypes.func
};

export default CustomModal;