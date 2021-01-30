/* eslint-disable import/prefer-default-export */
export const secondsPerNumberOfPixels = (
  componentHeight: number,
  pixelsPerSeconds: number,
): number => (
  componentHeight / pixelsPerSeconds
);
