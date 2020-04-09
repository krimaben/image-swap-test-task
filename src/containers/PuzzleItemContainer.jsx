import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import { puzzleActions } from '../actions';

import ItemTypes from '../constants/itemTypes';

const puzzleTarget = {
  drop(props, monitor) {
    const dragItem = monitor.getItem();
    props.movePuzzle(Object.assign(dragItem, { to: props.cellNumber }));
  },
};

const mapActionToProps = dispatch => ({
  movePuzzle(data) {
    dispatch(puzzleActions.movePuzzle(data));
  },
});

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const CellContainer = ({ children, connectDropTarget }) => connectDropTarget(
  <div className="cell">
    {children}
  </div>,
);

CellContainer.propTypes = {
  cellNumber: PropTypes.number.isRequired,
  children: PropTypes.node,
  connectDropTarget: PropTypes.func.isRequired,
};

export default connect(null, mapActionToProps)(DropTarget(
  ItemTypes.PUZZLE,
  puzzleTarget,
  collect,
)(CellContainer));
