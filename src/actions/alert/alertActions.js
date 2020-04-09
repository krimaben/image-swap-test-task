import { SHOW_ALERT, CLOSE_ALERT } from '../actionTypes';

export const showAlert = data => ({
  type: SHOW_ALERT,
  payload: data,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});
