import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GlobalModalCreator = (ModalComponent, observer, modalProps01) => {

    const ModalWrapper = () => {
        const [modalProps, setModalProps] = useState({ ...modalProps01 });
        observer.subscribe(newModalProps => setModalProps({ ...modalProps, ...newModalProps }));
        return modalProps.isVisible ? (
            <ModalComponent {...modalProps}>
                {modalProps.body()}
            </ModalComponent>
        ) : null;
    };

    ModalWrapper.propTypes = {
        isVisible: PropTypes.bool,
        observer: PropTypes.object
    };

    return ModalWrapper;
};

export default GlobalModalCreator;