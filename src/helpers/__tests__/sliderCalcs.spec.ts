import { secondsPerNumberOfPixels } from '../sliderCalcs';

describe('#secondsPerNumberOfPixels', () => {
  test('should return the correct value', () => {
    expect(secondsPerNumberOfPixels(4000, 10)).toBe(400);
  });
});
