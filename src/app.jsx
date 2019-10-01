import React from 'react';
import TopBar from './core/components/top-bar';
import MainContent from './core/components/main-content';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './core/store/redux/store';
import {
  globalModalService,
  GlobalModal
} from './core/global-modal/config';

const App = () => (
  <Router>
    <TopBar />
    <div style={{ marginTop: '20px' }}>
      <MainContent />
    </div>
  </Router>
);

const AppConnected = () => (
  <Provider store={store}>
    <App />
    <GlobalModal
      observer={globalModalService.observer}
      {...globalModalService.propsModal}
    />
  </Provider>
);

export default App;
export { AppConnected };
