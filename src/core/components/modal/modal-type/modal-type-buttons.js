import React from 'react';
import Button from 'react-bootstrap/Button';

const info = ({ confirm }, closeModal) => (
    <Button
        variant="primary"
        onClick={() => {
            confirm();
            closeModal()
        }}>
        Cerrar
        </Button>
);
const alert = ({ confirm }, closeModal) => (
    <Button
        variant="primary"
        onClick={() => {
            confirm();
            closeModal();
        }}
    >
        Cerrar
        </Button>
);
const error = ({ confirm }, closeModal) => (
    <Button
        variant="primary"
        onClick={() => {
            confirm();
            closeModal()
        }}
    >
        Cerrar
        </Button>
);
const confirm = ({ cancel, acept }, closeModal) => (
    <>
        <Button
            variant="secondary"
            onClick={() => {
                cancel();
                closeModal();
            }}
        >
            Cancel
            </Button>
        <Button
            variant="primary"
            onClick={() => {
                acept();
                closeModal();
            }}
        >
            Acept
            </Button>
    </>
);

const ModalTypeButtons = {
    info,
    alert,
    error,
    confirm
}

export default ModalTypeButtons;