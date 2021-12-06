import { useReducer } from 'react';
import { getNextCoordinates } from '../shared/helpers.js';
import { gridReducer, roverReducer } from './reducers.js';

export const useRover = (initialState) => {
  const [state, dispatch] = useReducer(roverReducer, initialState);
  const turn = (instruction) => dispatch({ type: 'ROVER_TURN', data: instruction });
  const forward = () => dispatch({ type: 'ROVER_FORWARD' });
  const reset = () => dispatch({ type: 'ROVER_RESET', data: initialState });
  return { ...state, turn, forward, reset };
};

export const useGrid = (defaultGridSize, roverInitialState) => {
  const [state, dispatch] = useReducer(gridReducer, { size: defaultGridSize });
  const rover = useRover(roverInitialState);
  const { size } = state;

  const grid = {
    size,
    incrementSize: () => {
      rover.reset();
      dispatch({ type: 'GRID_SIZE_INCREMENT' });
    },
    decrementSize: () => {
      rover.reset();
      dispatch({ type: 'GRID_SIZE_DECREMENT' });
    },
  };

  const boundedRover = {
    ...rover,
    forward: () => {
      const [x, y] = getNextCoordinates(rover.position, rover.direction);
      if (x < 0 || y < 0 || x > size[0] - 1 || y > size[1] - 1) {
        throw new Error('out of bounds');
      }
      return rover.forward();
    },
  };
  return { grid, rover: boundedRover };
};
