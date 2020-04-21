import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalDeleteCatConfirm,
} from '../cat-modals'

const CatModalContInfo = ({
  isVisibleDeleteCatConfirm,
  onCancelDeleteCatConfirm,
  onActionDeleteCatConfirm,
}) => {
  return (
    <>
      <ModalDeleteCatConfirm
        isVisible={isVisibleDeleteCatConfirm}
        onCancel={onCancelDeleteCatConfirm}
        onAction={onActionDeleteCatConfirm}
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
