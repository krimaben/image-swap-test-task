import initialState from '../initialState';
import { INIT_PUZZLE, MOVE_PUZZLE } from '../../actions/actionTypes';
import { fillPuzzleWithRandomImages, isPuzzleReady } from '../../utils/puzzle';

export default function puzzleReducer(state = initialState.puzzle, action) {
  switch (action.type) {
    case MOVE_PUZZLE: {
      const { from, to } = action.payload;
      const newItems = [...state.items];

      const dragImage = state.items[from];
      const otherImage = state.items[to];
      newItems[to] = dragImage;
      newItems[from] = otherImage;
      const ready = isPuzzleReady(newItems);

      return Object.assign({}, { ready }, { items: newItems });
    }
    case INIT_PUZZLE: {
      const numberOfImages = 9;
      const items = fillPuzzleWithRandomImages(numberOfImages);

      return Object.assign({}, { ready: false }, { items });
    }
    default:
      return state;
  }
}
