import React, { useState } from 'react';
import CatForm from '../cat-form';
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

const CatCreate = ({ insertCat, goToCatList }) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const handlerSubmit = (newCat, actions) => {
        const successHandler = () => goToCatList();
        const errorHandler = () => setVisibleModal(true);
        const finallyHandler = () => actions.setSubmitting(false);
        insertCat(newCat, successHandler, errorHandler, finallyHandler);
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