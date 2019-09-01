import React from 'react';
import { Provider } from 'react-redux';
import store from './core/store/redux/store';
import TopBar from './core/components/top-bar';
import MainContent from './core/components/main-content';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <TopBar />
    <div style={{marginTop: '20px'}}>
      <MainContent />
    </div>
  </Router>
);

const AppConnected = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
export { AppConnected };
