import { ModalActions } from '../actions/modal-actions';
import { ModalType } from '../../../components/modal';

const initialState = {
    isVisible: false,
    modalType: ModalType.INFO,
    title: '',
    body: '',
    acept: () => { },
    cancel: () => { },
    confirm: () => { },
    close: () => { }
};

function reducer(state = initialState, { type, modalType, title, body, acept, cancel, confirm, close }) {
    let newState = {};
    switch (type) {
        case ModalActions.OPEN_MODAL:
            newState = { ...state, isVisible: true, modalType, title, body, acept, cancel, confirm, close };
            break;
        case ModalActions.CLOSE_MODAL:
            newState = { ...initialState };
            break;
    };
    return newState;
};

export default reducer;