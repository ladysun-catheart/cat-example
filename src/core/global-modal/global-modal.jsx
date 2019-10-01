import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GlobalModal = (ModalComponent) => {

    const ModalWrapper = ({ isVisible, observer, ...props }) => {
        const [isVisible, setVisible] = useState(false);
        observer.subscribe(() => setVisible(true));
        return isVisible ? <ModalComponent {...props} /> : null;
    };

    ModalWrapper.propTypes = {
        isVisible: PropTypes.bool,
        observer: PropTypes.object
    };

    return ModalWrapper;
};

export default GlobalModal;