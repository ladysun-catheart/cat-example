import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GlobalModalCreator = (ModalComponent, modalProps01) => {

    const ModalWrapper = ({ observer }) => {
        const [modalProps, setModalProps] = useState({...modalProps01});
        observer.subscribe(newModalProps => setModalProps({...modalProps, ...newModalProps}));
        return modalProps.isVisible ? <ModalComponent {...modalProps} /> : null;
    };

    ModalWrapper.propTypes = {
        isVisible: PropTypes.bool,
        observer: PropTypes.object
    };

    return ModalWrapper;
};

export default GlobalModalCreator;