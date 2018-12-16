import { combineReducers } from 'redux';
import { board } from './board';
import { ui } from './ui';

export default combineReducers({
  board,
  ui,
});