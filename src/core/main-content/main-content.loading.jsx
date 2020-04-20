import React from 'react'
import { connect } from 'react-redux';
import MainContent from './main-content'
import Loading from '../components/loading'

const MainContentLoading = ({ pendingCat, pendingConcat }) => {
  return (
    <>
      {(pendingCat || pendingConcat) && <Loading />}
      <MainContent />
    </>
  );
}

// Redux
const mapStateToProps = state => ({
  pendingCat: state.cat.pending,
  pendingConcat: state.contact.pending,
});
const MainContentLoadingWrapper = connect(mapStateToProps)(MainContentLoading);

export default MainContentLoadingWrapper;

