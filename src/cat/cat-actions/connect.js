import { connect } from 'react-redux';
import CatActions from "./cat-actions";

const mapStateToProps = (state) => ({
    cat: state.cat.catSelected,
    catList: state.cat.catListFinded
});
const mapDispatchToProps = () => ({});
const CatActionsConnect = connect(mapStateToProps, mapDispatchToProps)(CatActions);

export default CatActionsConnect;