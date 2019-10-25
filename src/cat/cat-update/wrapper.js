import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import CatUpdate from './cat-update';
import { CatActions } from '../../core/store/redux/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCat: (newCat, successHandler,errorHandler, finallyHandler) => { 
        dispatch(CatActions.updateCat(
            newCat, 
            successHandler,
            errorHandler,
            finallyHandler
        ))
    }
});
const CatCreateConnect = connect(null, mapDispatchToProps)(CatUpdate);

const CatUpdateWrapper = () => {
    const { idCat } = useParams();
    const history = useHistory();
    const goToCatList = () => history.push('/');
    return <CatCreateConnect idCat={idCat} goToCatList={goToCatList} />;
};

CatUpdateWrapper.propTypes = {
    goToCatList: PropTypes.func
};

export default CatUpdateWrapper;