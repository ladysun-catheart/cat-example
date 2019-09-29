const ModalActions = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
};

// {modalType, title, body, acept, cancel, confirm, close}
const openModal = (config) => ({
    type: ModalActions.OPEN_MODAL,
    ...config
});

export {
    ModalActions,
    openModal
};