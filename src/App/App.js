import React from 'react';
import Commandor from '../components/Commandor/Commandor.js';
import Grid from '../components/Grid/Grid.js';
import { useGrid } from './hooks.js';

const App = (props) => {
  const { defaultGridSize, roverDefaultDirection, roverDefaultPosition, defaultCommand } = props;

  const { grid, rover } = useGrid(defaultGridSize, {
    position: roverDefaultPosition,
    direction: roverDefaultDirection,
  });

  return (
    <div className="app">
      <Commandor rover={rover} grid={grid} defaultCommand={defaultCommand} />
      <Grid size={grid.size} rover={rover} />
    </div>
  );
};

export default App;
