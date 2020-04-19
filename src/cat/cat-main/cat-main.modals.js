import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalCreateCatInfo,
  ModalDeleteCatConfirm,
  ModalDeleteCatInfo,
  ModalUpdateCatInfo
} from '../cat-modals'

const CatModalContInfo = ({ 
  isVisibleCreateCatInfo, 
  isVisibleDeleteCatConfirm,
  isVisibleDeleteCatInfo, 
  isVisibleUpdateCatInfo,
  onActionCreateCatInfo,
  onCancelDeleteCatConfirm,
  onActionDeleteCatConfirm,
  onActionDeleteCatInfo,
  onActionUpdateCatInfo,
}) => {
  return (
    <>
      <ModalCreateCatInfo
        isVisible={isVisibleCreateCatInfo}
        onAction={onActionCreateCatInfo}
        onClose={() => {}}
      />
      <ModalDeleteCatConfirm
        isVisible={isVisibleDeleteCatConfirm}
        onCancel={onCancelDeleteCatConfirm}
        onAction={onActionDeleteCatConfirm}
      />
      <ModalDeleteCatInfo
        isVisible={isVisibleDeleteCatInfo}
        onAction={onActionDeleteCatInfo}
        onClose={() => {}}
      />
      <ModalUpdateCatInfo
        isVisible={isVisibleUpdateCatInfo}
        onAction={onActionUpdateCatInfo}
        onClose={() => {}}
      />
    </>
  );
}

CatModalContInfo.propTypes = {
  isVisibleCreateCatInfo: PropTypes.bool,  
  isVisibleCatUpdate: PropTypes.bool,  
  isVisibleDeleteCatConfirm: PropTypes.bool, 
  isVisibleDeleteCatInfo: PropTypes.bool, 
  isVisibleUpdateCatInfo: PropTypes.bool, 
  onActionCreateCatInfo: PropTypes.func,
  onCancelDeleteCatConfirm: PropTypes.func,
  onActionDeleteCatConfirm: PropTypes.func,
  onActionDeleteCatInfo: PropTypes.func,
  onActionUpdateCatInfo: PropTypes.func,
}

export default CatModalContInfo
