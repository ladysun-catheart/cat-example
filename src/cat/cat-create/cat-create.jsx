import React, { useState } from 'react';
import CatForm from '../cat-form';
import CatApi from '../../core/apis/cat-api';
import CustomModal from '../../core/components/modal';
import ModalType from '../../core/components/modal/modal-type/modal-type';

const ModalError = ({ isVisible, onCloseModal }) => (
    <CustomModal
        isVisible={isVisible}
        modalType={ModalType.ERROR}
        title={'Error'}
        confirm={onCloseModal}
        close={onCloseModal}
        closeModal={onCloseModal}
    >
        There is an error in the server :/
    </CustomModal>
);

const CatCreate = ({ goToCatList }) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const handlerSubmit = (newCat, actions) => {
        CatApi.createCat(newCat)
            .then(res => goToCatList())
            .catch(err => setVisibleModal(true))
            .finally(() => actions.setSubmitting(false));
    };
    return (
        <>
            <CatForm
                btnName={'Insert'}
                onSubmit={handlerSubmit}
            />
            <ModalError
                isVisible={visibleModal}
                onCloseModal={() => setVisibleModal(false)}
            />
        </>
    );
}

export default CatCreate;