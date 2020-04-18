import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalCreateCatInfo,
  ModalDeleteCatConfirm,
  ModalDeleteCatInfo,
  ModalUpdateCatInfo
} from '../cat-modals'

const CatModalContInfo = ({ dataModalDelete, setDataModalDelete, deleteCat, created, deleted, updated, pending, error, cleanCat }) => {
  return (
    <>
      <ModalDeleteCatConfirm
        isVisible={dataModalDelete.isVisible}
        onCancel={() => setDataModalDelete({...dataModalDelete, isVisible: false})}
        onAction={() => {
          setDataModalDelete({...dataModalDelete, isVisible: false})
          deleteCat(dataModalDelete.cat._id)
        }}
      />
      <ModalDeleteCatInfo
        isVisible={deleted}
        onAction={() => cleanCat({ deleted: false })}
      />
      <ModalUpdateCatInfo
        isVisible={updated}
        onAction={() => cleanCat({ updated: false })}
      />
      <ModalCreateCatInfo
        isVisible={created}
        onAction={() => cleanCat({ created: false })}
      />
    </>
  );
}

CatModalContInfo.propTypes = {
  dataModalDelete: PropTypes.object,
  setDataModalDelete: PropTypes.func,
  deleteCat: PropTypes.func,
  created: PropTypes.bool,
  deleted: PropTypes.bool,
  updated: PropTypes.bool,
  pending: PropTypes.bool,
  error: PropTypes.number,
  cleanCat: PropTypes.func
}

export default CatModalContInfo
