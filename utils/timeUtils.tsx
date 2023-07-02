export const convertMsToMinsSecs = (durationMs: number): string => {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${secondsStr}`;
};
