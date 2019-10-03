import React from 'react';
import TopBar from './core/components/top-bar';
import MainContent from './core/components/main-content';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './core/store/redux/store';
import {
  errorGlobalModalService,
  ErrorGlobalModal
} from './core/config/global-modal';

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
    <ErrorGlobalModal observer={errorGlobalModalService.observer} />
  </Provider>
);

export default App;
export { AppConnected };
