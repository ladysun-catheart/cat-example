import Modal, { ModalType } from '../components/modal';
import GlobalModalService from '../global-modal/global-modal-service';
import GlobalModalCreator from '../global-modal/global-modal-creator';

const config = {
    PRE_SECTION: {
        isActive: false,
    },
    CAT_SECTION: {
        isActive: false,
        checkList: {
            CAT_LIST: { }
        }
    },
    CONTACT_SECTION: {
        isActive: false,
    }
};
const errorGlobalModalService = new GlobalModalService(config);
const ErrorGlobalModal = GlobalModalCreator(Modal, { modalType: ModalType.ERROR });

export {
    errorGlobalModalService,
    ErrorGlobalModal
};