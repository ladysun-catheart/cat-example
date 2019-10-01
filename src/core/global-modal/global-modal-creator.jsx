import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GlobalModalCreator = (ModalComponent) => {

    const ModalWrapper = ({ observer }) => {
        const [modalProps, setModalProps] = useState({});
        // observer.subscribe(modalProps => setModalProps(modalProps));
        return <ModalComponent {...modalProps} />;
    };

    ModalWrapper.propTypes = {
        isVisible: PropTypes.bool,
        observer: PropTypes.object
    };

    return ModalWrapper;
};

export default GlobalModalCreator;