import { connect } from 'react-redux';
import Cat from "./cat";
import { CatActions } from '../core/store/redux/actions';

const mapStateToProps = (state) => ({
    cat: state.cat.catSelected,
    catList: state.cat.catListFinded,
    catTotal: state.cat.catTotalStored,
    page: state.cat.page, 
    rows: state.cat.rows
});;
const mapDispatchToProps = (dispatch) => ({
    saveCatList: (catTotalStored, catListFinded, page, rows) => dispatch(CatActions.persistCatList(catTotalStored, catListFinded, page, rows)),
    onClickCat: (cat) => dispatch(CatActions.catSelected(cat))
});
const CatConnect = connect(mapStateToProps, mapDispatchToProps)(Cat);

export default CatConnect;