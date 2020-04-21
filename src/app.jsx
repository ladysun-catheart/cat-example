import React from 'react';
import TopBar from './core/components/top-bar';
import MainContent from './core/main-content';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './core/store/redux/store';
import { ToastProvider } from 'react-toast-notifications'

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
      <ToastProvider>
          <App />
      </ToastProvider>
  </Provider>
);

export default App;
export { AppConnected };
