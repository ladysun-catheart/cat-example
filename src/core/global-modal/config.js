import Modal, { ModalType } from '../components/modal';
import GlobalModalService from './global-modal-service';
import GlobalModalCreator from './global-modal-creator';

const config = {
    PRE_SECTION: {
        isActive: false,
    },
    CAT_SECTION: {
        isActive: false,
        checkList: {
            CAT_LIST: { info: 'this section is wrong' }
        }
    },
    CONTACT_SECTION: {
        isActive: false,
    }
};
const globalModalService = new GlobalModalService(config, ModalType.ERROR);
const GlobalModal = GlobalModalCreator(Modal);

export {
    globalModalService,
    GlobalModal
};