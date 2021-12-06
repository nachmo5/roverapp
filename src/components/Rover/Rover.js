import React from 'react';

const Rover = (props) => {
  const { direction } = props;
  return (
    <div>
      {direction === 'N' && <div>^</div>}
      <div>
        {direction === 'W' && '<'} Rover {direction === 'E' && '>'}
      </div>
      {direction === 'S' && <div>v</div>}
    </div>
  );
};

export default Rover;
