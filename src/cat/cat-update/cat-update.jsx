import React, { useState, useEffect } from 'react';
import CatForm from '../cat-form';
import CatApi from '../../core/apis/cat-api';
import CustomModal from '../../core/components/modal';
import ModalType from '../../core/components/modal/modal-type/modal-type';
import * as moment from 'moment';

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

const CatUpdate = ({ updateCat, idCat, goToCatList }) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [catState, setCatState] = useState({});
    const handlerSubmit = (cat, actions) => {
        const successHandler = () => goToCatList();
        const errorHandler = () => setVisibleModal(true);
        const finallyHandler = () => actions.setSubmitting(false);
        updateCat(cat, successHandler, errorHandler, finallyHandler);
    };
    useEffect(() => {
        CatApi.fetchCatById(idCat)
            .then(res => setCatState({
                ...res.data,
                birthday: moment(res.data.birthday).format('YYYY-MM-DD')
            }));
    }, [idCat]);
    return (
        <>
            <CatForm
                btnName={'Update'}
                onSubmit={handlerSubmit}
                cat={catState}
            />
            <ModalError
                isVisible={visibleModal}
                onCloseModal={() => setVisibleModal(false)}
            />
        </>
    );
}

export default CatUpdate;