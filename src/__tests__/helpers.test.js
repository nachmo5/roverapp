import { getNextCoordinates } from '../shared/helpers';

it('should get next coordinates', () => {
  const currentPosition = [3, 3];
  const currentDirection = 'E';
  const [x, y] = getNextCoordinates(currentPosition, currentDirection);
  expect(x).toEqual(4);
  expect(y).toEqual(3);
});
