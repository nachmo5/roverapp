import React, { useState } from 'react';
import { INSTRUCTIONS } from '../../shared/constants.js';
import { seqAsync } from '../../shared/helpers.js';
import { useClosure } from '../../shared/hooks.js';

const Commandor = (props) => {
  const { grid, rover, defaultCommand } = props;
  const [command, setCommand] = useState(defaultCommand);
  const getRover = useClosure(() => rover);

  const go = async () => {
    if (!command || typeof command !== 'string') {
      return;
    }
    const instructions = command.split('');
    setCommand('');
    seqAsync(instructions, (instruction) => {
      if (!Object.values(INSTRUCTIONS).includes(instruction)) {
        alert('Invalid instruction => ', instruction);
        return Promise.reject(false);
      }
      try {
        const latestRover = getRover();
        if (instruction === INSTRUCTIONS.MOVE_FORWARD) {
          latestRover.forward();
        } else {
          latestRover.turn(instruction);
        }
        return new Promise((r) => setTimeout(r, 500));
      } catch (e) {
        alert(e.message);
        return Promise.reject(false);
      }
    });
  };

  return (
    <div className="commandor">
      <div>
        Grid size {grid.size.join('-')}
        <button className="button btn1" onClick={grid.decrementSize}>
          -
        </button>
        <button className="button btn2" onClick={grid.incrementSize}>
          +
        </button>
      </div>
      <input
        className="input"
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button onClick={go} className="button">
        Go
      </button>
    </div>
  );
};

export default Commandor;
