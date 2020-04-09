import React from 'react';
import PropTypes from 'prop-types';

import Grid from './grid/Grid';

const Puzzle = ({ items }) => (
  <div className="puzzle">
    <Grid
      rows={3}
      cols={3}
      items={items}
    />
  </div>
);

Puzzle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number),
};

Puzzle.defaultProps = {
  items: [],
};

export default Puzzle;
