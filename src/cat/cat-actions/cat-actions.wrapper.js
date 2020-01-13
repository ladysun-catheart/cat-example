import { connect } from 'react-redux';
import CatActions from "./cat-actions";

const mapStateToProps = (state) => ({
    cat: state.cat.actual,
    catList: state.cat.catList
});
const mapDispatchToProps = () => ({});
const CatActionsConnect = connect(mapStateToProps, mapDispatchToProps)(CatActions);

export default CatActionsConnect;
