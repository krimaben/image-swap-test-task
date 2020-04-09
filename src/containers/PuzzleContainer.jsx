import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Puzzle from '../components/puzzle/Puzzle';
import { puzzleActions } from '../actions';

const mapStateToProps = state => ({
  items: state.puzzle.items,
});

const mapActionToProps = dispatch => ({
  initPuzzle() {
    dispatch(puzzleActions.initPuzzle());
  },
});

class PuzzleContainer extends React.Component {
  componentDidMount() {
    const { initPuzzle } = this.props;
    initPuzzle();
  }

  render() {
    const { items } = this.props;

    return (
      <Puzzle items={items} />
    );
  }
}


PuzzleContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number),
  initPuzzle: PropTypes.func,
};

PuzzleContainer.defaultProps = {
  items: [],
  initPuzzle: null,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(DragDropContext(HTML5Backend)(PuzzleContainer));
