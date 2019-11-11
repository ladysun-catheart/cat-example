import React from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { CatPreUpdate, CatUpdate } from './cat-update'
import { CatActions } from '../../core/store/redux/actions'

// Redux
const mapDispatchToPropsPU = dispatch => ({
    getCat: idCat => dispatch(CatActions.getCat(idCat))
})
const CatPreUpdateConnect = connect(null, mapDispatchToPropsPU)(CatPreUpdate)

// React-router
const CatPreUpdateWrapper = () => {
    const { idCat } = useParams()
    return <CatPreUpdateConnect idCat={idCat} />
}
//---------------

// Redux
const mapStateToProps = state => ({
    cat: state.cat.cat,
    updated: state.cat.updated
})
const mapDispatchToProps = dispatch => ({
    updateCat: newCat => dispatch(CatActions.updateCat(newCat))
})
const CatUpdateConnect = connect(mapStateToProps, mapDispatchToProps)(CatUpdate)

// React-router
const CatUpdateWrapper = () => {
    const history = useHistory()
    const goToCatList = () => history.push('/')
    return <CatUpdateConnect goToCatList={goToCatList} />
}
//----------------

export default CatPreUpdateWrapper
export {
    CatPreUpdateWrapper,
    CatUpdateWrapper
}