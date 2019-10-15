import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import reducers from './reducers';

const enhancer = applyMiddleware(thunk);
const store = createStore(reducers, [ 'Use Redux' ], composeWithDevTools(enhancer));
export default store;
