import { combineReducers } from 'redux';
import cat from './cat-reducer';
import contact from './contact-reducer';

const reducers = combineReducers({
  cat,
  contact
});

export default reducers;