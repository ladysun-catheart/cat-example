import { connect } from 'react-redux';
import CatInfo from "./cat-info";

const mapStateToProps = (state) => ({
    cat: state.cat.actual
});
const mapDispatchToProps = () => ({});
const CatInfoConnect = connect(mapStateToProps, mapDispatchToProps)(CatInfo);

export default CatInfoConnect;
