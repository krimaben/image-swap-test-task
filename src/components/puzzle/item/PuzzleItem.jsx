import React from 'react';
import PropTypes from 'prop-types';

import { DragSource } from 'react-dnd';

import ItemTypes from '../../../constants/itemTypes';

import './PuzzleItem.scss';

const puzzleSource = {
  beginDrag(props) {
    return {
      from: props.cellNumber,
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class PuzzleItem extends React.Component {
  render() {
    const { img, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', display: 'inline-block' }}>
        <div className="puzzle-item">
          <img src={`../../../../public/images/puzzle-elements/${img}.jpg`} alt={`${img}`} />
        </div>
      </div>,
    );
  }
}

PuzzleItem.propTypes = {
  img: PropTypes.number.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource(ItemTypes.PUZZLE, puzzleSource, collect)(PuzzleItem);
