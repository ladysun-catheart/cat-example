import { connect } from 'react-redux';
import CatList from './cat-list';
import { CatActions } from '../../core/store/redux/actions';

const mapStateToProps = state => ({
    catList: state.cat.catListFinded,
    catTotal: state.cat.catTotalStored,
    page: state.cat.page, 
    rows: state.cat.rows
});
const mapDispacthToProps = (dispatch) => ({
    onClickCat: (cat) => dispatch(CatActions.catSelected(cat)),
    saveCatList: (catTotalStored, catListFinded, page, rows) => dispatch(CatActions.persistCatList(catTotalStored, catListFinded, page, rows))
});
const CatListConnect = connect(mapStateToProps, mapDispacthToProps)(CatList);

export default CatListConnect;
