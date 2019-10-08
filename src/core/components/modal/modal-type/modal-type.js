import ModalTypeButtons from './modal-type-buttons';
import { faInfoCircle, faExclamationTriangle, faTimesCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ModalType = {
    INFO: {
        name: 'INFO',
        icon: faInfoCircle,
        buttons: ModalTypeButtons.info
    },
    ALERT: {
        name: 'ALERT',
        icon: faExclamationTriangle,
        buttons: ModalTypeButtons.alert
    },
    ERROR: {
        name: 'ERROR',
        icon: faTimesCircle,
        buttons: ModalTypeButtons.error
    },
    CONFIRM: {
        name: 'CONFIRM',
        icon: faQuestionCircle,
        buttons: ModalTypeButtons.confirm
    }
};
Object.freeze(ModalType);

export default ModalType;