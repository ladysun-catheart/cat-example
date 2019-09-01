import { connect } from 'react-redux';
import CatList from './cat-list';
import { CatActions } from '../../core/store/redux/actions';

const mapStateToProps = state => ({
    catList: state.cat.catListFinded,
    catTotal: state.cat.catTotalStored
});
const mapDispacthToProps = (dispatch) => ({
    onClickCat: (cat) => dispatch(CatActions.catSelected(cat))
});
const CatListConnect = connect(mapStateToProps, mapDispacthToProps)(CatList);

export default CatListConnect;
