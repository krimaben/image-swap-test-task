import initialState from '../initialState';
import { SHOW_ALERT, CLOSE_ALERT } from '../../actions/actionTypes';

export default function alertReducer(state = initialState.alert, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return Object.assign(
        {},
        state,
        { isError: true },
        { message: action.payload.message },
        { type: action.payload.type },
      );
    case CLOSE_ALERT:
      return Object.assign(
        {},
        state,
        { isError: false },
        { message: '' },
        { type: '' },
      );
    default:
      return state;
  }
}
