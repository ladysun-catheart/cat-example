import { CatActions } from '../core/store/redux/actions';
import { connect } from 'react-redux';
import Cat from "./cat";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    persistCatList: (catTotalStored, catListFinded) => dispatch(CatActions.persistCatList(catTotalStored, catListFinded))
});
const CatConnect = connect(mapStateToProps, mapDispatchToProps)(Cat);

export default CatConnect;