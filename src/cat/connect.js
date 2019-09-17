import { connect } from 'react-redux';
import Cat from "./cat";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
const CatConnect = connect(mapStateToProps, mapDispatchToProps)(Cat);

export default CatConnect;