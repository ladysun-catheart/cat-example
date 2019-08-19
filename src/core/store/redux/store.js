import { createStore } from 'redux';
import thunk from 'thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import reducers from './reducers';

const store = createStore(reducers, thunk, composeWithDevTools());
export default store;
