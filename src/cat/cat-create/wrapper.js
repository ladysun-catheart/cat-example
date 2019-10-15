import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import CatCreate from './cat-create';
import { CatActions } from '../../core/store/redux/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
    insertCat: (newCat, successHandler,errorHandler, finallyHandler) => { 
        dispatch(CatActions.insertCat(
            newCat, 
            successHandler,
            errorHandler,
            finallyHandler
        ))
    }
});
const CatCreateConnect = connect(null, mapDispatchToProps)(CatCreate);

const CatCreateWrapper = props => {
    const history = useHistory();
    const goToCatList = () => history.push('/');
    return <CatCreateConnect {...props} goToCatList={goToCatList} />;
};
CatCreateWrapper.propTypes = {
    goToCatList: PropTypes.func
};

export default CatCreateWrapper;