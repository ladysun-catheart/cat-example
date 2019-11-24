import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import CatCreate from './cat-create'
import { CatActions } from '../../core/store/redux/actions'

// Redux
const mapStateToProps = state => ({
    created: state.cat.created
})
const mapDispatchToProps = dispatch => ({
    insertCat: newCat => dispatch(CatActions.createCat(newCat)),
})
const CatCreateConnect = connect(mapStateToProps, mapDispatchToProps)(CatCreate);

// React-router
const CatCreateWrapper = props => {
    const history = useHistory();
    const goToCatList = () => history.push('/');
    return <CatCreateConnect {...props} goToCatList={goToCatList} />;
}

export default CatCreateWrapper
