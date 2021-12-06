import { DIRECTIONS, INSTRUCTIONS } from '../shared/constants.js';
import { getNextCoordinates, mod } from '../shared/helpers.js';

export const gridReducer = (state, action) => {
  switch (action.type) {
    case 'GRID_SIZE_INCREMENT': {
      return { ...state, size: [state.size[0] + 1, state.size[1] + 1] };
    }
    case 'GRID_SIZE_DECREMENT': {
      const { size } = state;
      return { ...state, size: size[0] === 1 ? size : [size[0] - 1, size[1] - 1] };
    }
    default:
      throw new Error();
  }
};

export const roverReducer = (state, action) => {
  switch (action.type) {
    case 'ROVER_TURN': {
      const instruction = action.data;
      const step = INSTRUCTIONS.TURN_LEFT === instruction ? -1 : 1;
      const directions = Object.values(DIRECTIONS);
      const directionIndex = directions.findIndex((d) => d === state.direction);
      const newDirection = directions[mod(directionIndex + step, 4)];
      return { ...state, direction: newDirection };
    }
    case 'ROVER_FORWARD': {
      return { ...state, position: getNextCoordinates(state.position, state.direction) };
    }
    case 'ROVER_RESET': {
      return { ...state, ...action.data };
    }
    default:
      throw new Error();
  }
};
