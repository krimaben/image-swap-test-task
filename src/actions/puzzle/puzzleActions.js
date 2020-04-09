import { MOVE_PUZZLE, INIT_PUZZLE } from '../actionTypes';

export const movePuzzle = data => ({
  type: MOVE_PUZZLE,
  payload: data,
});

export const initPuzzle = () => ({
  type: INIT_PUZZLE,
});
