import { DIRECTIONS } from './constants.js';

export const mod = (n1, n2) => ((n1 % n2) + n2) % n2;

export const getNextCoordinates = (position, direction) => {
  const steps = {
    [DIRECTIONS.NORTH]: [0, -1],
    [DIRECTIONS.EAST]: [1, 0],
    [DIRECTIONS.SOUTH]: [0, 1],
    [DIRECTIONS.WEST]: [-1, 0],
  };
  const [stepX, stepY] = steps[direction];
  return [position[0] + stepX, position[1] + stepY];
};

export const seqAsync = (arr, cb) =>
  arr.reduce((acc, f) => acc.then(() => cb(f)), Promise.resolve(true));
