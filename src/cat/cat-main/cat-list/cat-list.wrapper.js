import { connect } from 'react-redux';
import CatList from "./cat-list";

const mapStateToProps = state => ({
    catList: state.cat.catList,
    catTotal: state.cat.catTotal,
})

const CatListWrapper = connect(mapStateToProps)(CatList)

export default CatListWrapper;