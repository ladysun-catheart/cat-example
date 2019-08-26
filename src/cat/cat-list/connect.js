import {connect} from 'react-redux';
import CatList from './cat-list';

const mapStateToProps = state => ({
    catList: state.cat.catListFinded,
    catTotal: state.cat.catTotalStored,
});
const mapDispacthToProps = dispatch => ({});
const CatListConnect = connect(mapStateToProps, mapDispacthToProps)(CatList);

export default CatListConnect;
