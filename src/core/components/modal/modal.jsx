import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalType = {
    INFO: {
        name: 'INFO',
        icon: 'fa-info-circle',
        buttons: ({confirm}) => <Button variant="primary" onClick={confirm}>Cerrar</Button>
    },
    ALERT: {
        name: 'ALERT',
        icon: 'fa-exclamation-triangle',
        buttons: ({confirm}) => <Button variant="primary" onClick={confirm}>Cerrar</Button>
    },
    ERROR: {
        name: 'ERROR',
        icon: 'fa-times-circle',
        buttons: ({confirm}) => <Button variant="primary" onClick={confirm}>Cerrar</Button>
    },
    CONFIRM: {
        name: 'CONFIRM',
        icon: 'fa-times-circle',
        buttons: ({acept, cancel}) => (
            <>
            <Button variant="secondary" onClick={cancel}>Cancel</Button>
            <Button variant="primary" onClick={acept}>Acept</Button>
            </>
        )
    }
};
Object.freeze(ModalType);

const Modal = ({modalType, title, children: body, acept, cancel, confirm, close}) => (
    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title><FontAwesomeIcon icon={modalType.icon} /> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
            {modalType.buttons({acept, cancel, confirm, close})}
        </Modal.Footer>
    </Modal.Dialog>
);

Modal.propTypes = {
    type: PropTypes.object,
    title: PropTypes.string,
    acept: PropTypes.func,
    cancel: PropTypes.func,
    confirm: PropTypes.func,
    close: PropTypes.func
}

export default Modal;
export {
    ModalType,
};