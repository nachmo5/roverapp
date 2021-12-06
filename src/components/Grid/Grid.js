import React from 'react';
import Rover from '../Rover/Rover.js';

const Grid = (props) => {
  const {
    size,
    rover: { direction, position },
  } = props;

  const squareLength = `min(calc(90vw/${size[0]}), calc(90vh/${size[1]}))`;
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${size[0]}, min-content)` }}>
      {new Array(size[1]).fill(1).map((_, y) =>
        new Array(size[0]).fill(1).map((_, x) => (
          <div
            key={`${x}${y}`}
            className="square"
            style={{ width: squareLength, height: squareLength }}
          >
            {position[0] === x && position[1] === y && <Rover direction={direction} />}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
