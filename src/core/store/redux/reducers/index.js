import { combineReducers } from 'redux';
import cat from './cat-reducer';
import contact from './contact-reducer';
import modal from './modal-reducer';

const reducers = combineReducers({
  cat,
  contact,
  modal
});

export default reducers;