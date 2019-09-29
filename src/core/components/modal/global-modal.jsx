import React from 'react';
import Modal from './modal';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    isVisible: state.modal.bool,
    modalType: state.modal.modalType,
    title: state.modal.title,
    body: state.modal.body,
    acept: state.modal.acept,
    cancel: state.modal.cancel,
    confirm: state.modal.confirm,
    close: state.modal.close
});
const WrapperModal = (props) => (
    props.isVisible ? <Modal {...props} /> : null
);
const GlobalModal = connect(mapStateToProps)(WrapperModal);

export default GlobalModal;