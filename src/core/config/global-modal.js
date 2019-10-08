import Modal, { ModalType } from '../components/modal';
import GlobalModalService from '../global-modal/global-modal-service';

const config = {
    PRE_SECTION: {},
    CAT_SECTION: {
        checkList: [ 'CAT_LIST' ]
    },
    CONTACT_SECTION: {}
};
const errorGlobalModalService = new GlobalModalService(config);
const ErrorGlobalModal = errorGlobalModalService.getGlobalModal(Modal, { modalType: ModalType.ERROR });

export {
    errorGlobalModalService,
    ErrorGlobalModal
};