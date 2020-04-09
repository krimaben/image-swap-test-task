import React from 'react';
import PropTypes from 'prop-types';

import PuzzleItemContainer from '../../../containers/PuzzleItemContainer';

import './Grid.scss';
import PuzzleItem from "../item/PuzzleItem";

function createCells(items) {
  const cells = [];

  for (let i = 0; i < items.length; i += 1) {
    cells.push(
      <div className="col" key={`cell-${i}`}>
        <PuzzleItemContainer cellNumber={i}>
          <PuzzleItem
            img={items[i]}
            cellNumber={i}
          />
        </PuzzleItemContainer>
      </div>,
    );
  }
  return cells;
}

function createGrid(rows, cols, items) {
  const colElements = createCells(items);
  const rowElements = [];
  for (let i = 0, j = 0; i < rows; i += 1, j += cols) {
    rowElements.push(
      <div className="row" key={`row-${i}`}>
        {colElements.slice(j, j + cols)}
      </div>,
    );
  }
  return rowElements;
}

const Grid = ({ rows, cols, items }) => (
  <div className="grid">
    {createGrid(rows, cols, items)}
  </div>
);

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.number),
};

Grid.defaultProps = {
  items: [],
};

export default Grid;
