import { gridReducer, roverReducer } from '../App/reducers.js';

it('should turn to the correct direction', () => {
  const initialState = { direction: 'N' };
  const action = { type: 'ROVER_TURN', data: 'r' };
  const nextState = roverReducer(initialState, action);
  expect(nextState.direction).toEqual('E');
});

it('should move forward to the right coordinates', () => {
  const initialState = { direction: 'S', position: [3, 2] };
  const action = { type: 'ROVER_FORWARD' };
  const nextState = roverReducer(initialState, action);
  expect(nextState.direction).toEqual('S');
  expect(nextState.position[0]).toEqual(3);
  expect(nextState.position[1]).toEqual(3);
});

it('should increment grid size', () => {
  const initialState = { size: [10, 10] };
  const action = { type: 'GRID_SIZE_INCREMENT' };
  const nextState = gridReducer(initialState, action);
  expect(nextState.size[0]).toEqual(11);
  expect(nextState.size[1]).toEqual(11);
});
