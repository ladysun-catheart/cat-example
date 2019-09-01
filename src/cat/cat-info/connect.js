import { connect } from 'react-redux';
import CatInfo from './cat-info';

const mapStateToProps = (state) => ({
    cat: state.cat.catSelected
});
const CatInfoConnect = connect(mapStateToProps)(CatInfo);

export default CatInfoConnect;