import { combineReducers } from 'redux';
import puzzle from './puzzle/puzzleReducer';
import alert from './alert/alertReducer';

export default combineReducers({
  puzzle,
  alert,
});
