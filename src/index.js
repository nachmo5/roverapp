import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { DIRECTIONS } from './shared/constants.js';

const inputs = {
  defaultGridSize: [10, 10],
  roverDefaultDirection: DIRECTIONS.NORTH,
  roverDefaultPosition: [0, 0],
  defaultCommand: 'rfrfflflf',
};

ReactDOM.render(
  <React.StrictMode>
    <App {...inputs} />
  </React.StrictMode>,
  document.getElementById('root')
);
